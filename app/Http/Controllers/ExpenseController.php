zzz<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        return Expense::with('category')->get();
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

    public function groupedByCategory() {;
        // return Category::has('expenses')->get();
        
        $rsult = category::query()->with('expenses')->has('expenses')->get();
        return $rsult;

        // $rsult = Expense::groupBy('id')->get();
        // return $rsult;

        // $rsult = Category::with('expenses')->get()->groupBy('id');
        // return $rsult;
        
        // return Expense::with()
    }

    public function groupedByMonth() {
        // return Expense::select('*')
        // ->get()
        // ->groupBy(function($date) {
        // return Carbon::parse($date->created_at)->format('Y'); // grouping by years
        // })->map(function($expense){
        // return $expense->groupBy(function($date){
        // return Carbon::parse($date->created_at)->format('m'); // grouping by years
        // });
        // });

        return Expense::select('*')
        ->get()
        ->groupBy(function($expense) {
        return Carbon::parse($expense->created_at)->format('F Y');
        });

        // return Expense::all()
        //     ->groupBy(function ($expense) {
        //         return $expense->created_at->format('F Y');
        //     })
        //     ->map(function ($month) {
        //         return $month->sum('amount');
        //     });
    }
}
