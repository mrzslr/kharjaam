<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Item;

class ItemController extends Controller
{
    public function index(){
        return Item::all();
    }
}
