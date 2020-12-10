<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use App\Models\Expense;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // DB::table('categories')
        //     ->select('*', DB::raw('count(*) as total'))
        //     ->groupBy('id')->get();

        // $x = Category::with('expenses')->get();
        // $y = Category::has('expenses')->get();
        // $z = $y->merge($x);
        // return $z->all();


        return Category::with('expenses')->get();
        // return Category::has('expenses')->get();
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
        $newCategory = new Category;
        $newCategory->name = $request->category["name"];
        $newCategory->save();

        return $newCategory;
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
        $existingCategory = Category::find($id);

        if ($existingCategory) {
            
        $existingCategory->narration = $request->get('narration');
        $existingCategory->category = $request->get('category');
        $existingCategory->amount = $request->get('amount');
        $existingCategory->date = $request->get('date');
        $existingCategory->save();

        return $existingCategory;
        }

        return "No result found.";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingCategory = Category::find($id);

        if ($existingCategory) {
            $existingCategory->delete();
            return "Category successfully deleted.";
        }

        return "Record not found.";
    }

    public function getWithExpense() {
        $withExpense = Category::has('expenses')->get();
        return $withExpense;
    }
}