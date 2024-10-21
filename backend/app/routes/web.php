<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['status' => 'OK', 'apiVersion' => 1, 'isTest' => true]);
});
