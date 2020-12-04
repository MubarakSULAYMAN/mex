<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Carbon;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Category::orderBy('created_at', 'DESC')->get();
        return Category::all();
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
    // public function store(Request $request)
    // {
    //     $newCategory = new Category;
    //     $newCategory->name = $request->category["name"];
    //     $newCategory->save();

    //     return $newCategory;
    // }
    public function store(Request $request)
    {
        $newCategory = new Category;
        $newCategory->name = $request->item["name"];
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
        $existingCategory = Category::find( $id );

        if ($existingCategory) {
            $existingCategory->completed = $request->category['completed'] ? true : false;
            $existingCategory->completed_at = $request->category['completed'] ? Carbon::now() : false;
            $existingCategory->save();
            return $existingCategory;
        }

        return "Category not found";
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

        return "Category not found";
    }
}
