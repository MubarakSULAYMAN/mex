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
        // Expense::select("*", DB::raw("count(*) as expense_count"))
        //                 ->groupBy('category_id')
        //                 ->get();

    //     User::selectRaw('users.name, count(*) submitted_games')
    // ->join('games', 'games.user_id', '=', 'users.id')
    // ->groupBy('users.name')
    // ->orderBy('submitted_games', 'DESC')
    // ->get();

        // return Expense::all()->groupBy('category_id');

        // $x = Category::with('expenses')->get()->groupBy('id')->where('expenses', '>', '0');
        // $x = Category::with('expenses')->get()->groupBy('id');
        // $x = Expense::with('category')->get()->groupBy('id');
        // $x = Expense::with('category')->get()->groupBy('id');
        // return $x;
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
