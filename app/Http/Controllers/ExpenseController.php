<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Models\Expense;
use App\Models\Category;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Expense::all();
        // return Expense::orderBy('created_at', 'DESC')->get();
        // return Expense::latest()->get();
        // return Expense::with('expenses', 'category')->get();
        return Expense::with('category')->get();

        // return Expense::with('expenses', 'category')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newExpense = new Expense;
        $newExpense = Expense::create($request->all());

        // error_log($newExpense);
        // LOG::info($newExpense);
        // LOG::debug($newExpense);

        // dd($request->all());

        $newExpense->save();

        return $newExpense;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingExpense = Expense::find($id);

        if ($existingExpense) {
            $existingExpense->delete();
            return "Expense successfully deleted.";
        }

        return "Record not found.";
    }

    public function groupedByCategory() {
        // return Expense::groupBy('category_id', 'id')->get();
        return Expense::all()
            ->groupBy(function ($expense) {
                return $expense->category_id;
            })
            ->map(function ($category) {
                return $category->sum('amount');
            });
    }

    public function groupedByMonth() {
        // return Expense::select('*')
        // ->get()
        // ->groupBy(function($date) {
        // return Carbon::parse($date->created_at)->format('F Y');
        // });

        return Expense::all()
            ->groupBy(function ($expense) {
                return $expense->created_at->format('F Y');
            })
            ->map(function ($month) {
                return $month->sum('amount');
            });
    }
}
