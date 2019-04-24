<?php

use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

Route::namespace("Api")->group(function () {
    Route::get('user', 'ChatController@userDetail');
    Route::get('user-list/{userId}', 'ChatController@userList');
    Route::post('update-token', 'ChatController@updateToken');
    Route::get('chat-user-list', 'ChatController@chatUserList');
    Route::post('send-message', 'ChatController@sendMessage');
    Route::get('message-list', 'ChatController@messageList');
});
