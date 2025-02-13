<?php

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
        
        $existingExpense = Expense::find($id);

        if ($existingExpense) {
            $existingExpense = Expense::create($request->all());
        
            $existingExpense->save();

            return $existingExpense;
        }

        return "Record not found.";
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
        // ->orderByDesc('expenses')
        $category_group = category::query()->with('expenses')->has('expenses')->get();
        return $category_group;
    }

    public function groupedByMonth() {
        $month_group = Expense::select('*')
        ->get()
        ->groupBy(function($expense) {
        return Carbon::parse($expense->created_at)->format('F Y');
        });
        return $month_group;
    }

    public function getExpenseById($id) {
        // $requestedExpense = Expense::find($id);
        // $requestedExpense = Expense::find($id)::with('category')->get();
        $requestedExpense = Expense::find($id);
        // $requestedExpense = category::query()->with('expenses')->has('expenses')::find($id);
        
        if ($requestedExpense) {
            return $requestedExpense;
        }

        return "Record not found.";
    }
}
