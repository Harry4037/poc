<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\User;
use App\Models\ChatMessages;

class ChatController extends Controller {

    /**
     * @api {get} /api/user User
     * @apiHeader {String} Accept application/json. 
     * @apiName GetUser
     * @apiGroup Chat
     * 
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message User detail.
     * @apiSuccess {JSON} data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
        {
            "status": true,
            "status_code": 200,
            "message": "User detail.",
            "data": {
                "user": {
                    "id": 4,
                    "name": "Akash",
                    "email": "akash@gmail.com",
                    "email_verified_at": null,
                    "device_token": null,
                    "created_at": null,
                    "updated_at": null
                }
            }
        }
     * 
     * 
     * 
     */
    public function userDetail(Request $request) {
        $user['user'] = User::inRandomOrder()->first();
        return $this->sendSuccessResponse("User detail.", $user);
    }
    
    /**
     * @api {get} /api/user-list/{user_id} User List
     * @apiHeader {String} Accept application/json. 
     * @apiName GetUserList
     * @apiGroup Chat
     * 
     * 
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message User list.
     * @apiSuccess {JSON} data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
        {
            "status": true,
            "status_code": 200,
            "message": "Token updated.",
            "data": {}
        }
     * 
     * 
     * 
     */
    public function userList(Request $request, $userId) {
        $users = User::where('id','!=',$userId)->get();
        return $this->sendSuccessResponse("User list.", $users);
    }

    /**
     * @api {post} /api/update-token Update token
     * @apiHeader {String} Accept application/json. 
     * @apiName PostUpdatetoken
     * @apiGroup Chat
     * 
     * 
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message Token updated.
     * @apiSuccess {JSON} data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
        {
            "status": true,
            "status_code": 200,
            "message": "Token updated.",
            "data": {}
        }
     * 
     * 
     * 
     */
    public function updateToken(Request $request) {
        try {
            if (!$request->user_id) {
                return $this->sendErrorResponse("User id missing.", (object) []);
            }
            if (!$request->device_token) {
                return $this->sendErrorResponse("Device token missing.", (object) []);
            }

            $user = User::find($request->user_id);
            if ($user) {
                $user->device_token = $request->device_token;
                $user->save();
            } else {
                return $this->sendErrorResponse("User not found.", (object) []);
            }

            return $this->sendSuccessResponse("Token updated.", (object) []);
        } catch (\Exception $ex) {
            return $this->administratorResponse();
        }
    }

    /**
     * @api {post} /api/send-message Send Message
     * @apiHeader {String} Accept application/json. 
     * @apiName PostSendMessage
     * @apiGroup Chat
     * 
     * @apiParam {String} sender_id Sender id*.
     * @apiParam {String} receiver_id Receiver id*.
     * @apiParam {String} message Message*.
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message Message send successfully.
     * @apiSuccess {JSON} data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
      {
      "status": true,
      "status_code": 200,
      "message": "Message send successfully.",
      "data": {}
      }
     * 
     * 
     * @apiError SenderIdMissing The Sender id was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "Sender id missing.",
     *  "data": {}
     * }
     * 
     * @apiError ReceiverMissing The Receiver was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "Receiver id missing.",
     *  "data": {}
     * }
     * 
     * @apiError MessageMissing The Message was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "Message missing.",
     *  "data": {}
     * }
     * 
     * 
     */
    public function sendMessage(Request $request) {
        try {
            if (!$request->sender_id) {
                return $this->sendErrorResponse("Sender id missing.", (object) []);
            }
            if (!$request->receiver_id) {
                return $this->sendErrorResponse("Reciver id missing.", (object) []);
            }
            if (!$request->message) {
                return $this->sendErrorResponse("Message missing.", (object) []);
            }

            $chatMessage = new ChatMessages();
            $chatMessage->sender_id = $request->sender_id;
            $chatMessage->receiver_id = $request->receiver_id;
            $chatMessage->message = $request->message;
            $chatMessage->save();
            return $this->sendSuccessResponse("Message send successfully.", (object) []);
        } catch (\Exception $ex) {
            return $this->administratorResponse();
        }
    }

    /**
     * @api {get} /api/message-list Chat message list
     * @apiHeader {String} Accept application/json. 
     * @apiName GetChatMessageList
     * @apiGroup Chat
     * 
     * @apiParam {String} sender_id Sender id*.
     * @apiParam {String} receiver_id Receiver id*.
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message Messages list.
     * @apiSuccess {JSON}   data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
      {
      "status": false,
      "status_code": 404,
      "message": "Messages list.",
      "data": [
      {
      "id": 1,
      "sender_id": 93,
      "receiver_id": 94,
      "message": "Hi",
      "is_view": 0,
      "created_at": "2019-04-18 18:10:11",
      "updated_at": "2019-04-18 18:10:11",
      "sender_detail": {
      "id": 93,
      "user_name": "SHYAM SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      "receiver_detail": {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      },
      {
      "id": 2,
      "sender_id": 94,
      "receiver_id": 93,
      "message": "hello",
      "is_view": 0,
      "created_at": "2019-04-18 18:10:18",
      "updated_at": "2019-04-18 18:10:18",
      "sender_detail": {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      "receiver_detail": {
      "id": 93,
      "user_name": "SHYAM SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      },
      {
      "id": 3,
      "sender_id": 93,
      "receiver_id": 94,
      "message": "How are you?",
      "is_view": 0,
      "created_at": "2019-04-18 18:10:42",
      "updated_at": "2019-04-18 18:10:42",
      "sender_detail": {
      "id": 93,
      "user_name": "SHYAM SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      "receiver_detail": {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      },
      {
      "id": 4,
      "sender_id": 94,
      "receiver_id": 93,
      "message": "I am fine.",
      "is_view": 0,
      "created_at": "2019-04-18 18:10:51",
      "updated_at": "2019-04-18 18:10:51",
      "sender_detail": {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      "receiver_detail": {
      "id": 93,
      "user_name": "SHYAM SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      },
      {
      "id": 5,
      "sender_id": 94,
      "receiver_id": 93,
      "message": "and you",
      "is_view": 0,
      "created_at": "2019-04-18 18:10:57",
      "updated_at": "2019-04-18 18:10:57",
      "sender_detail": {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      "receiver_detail": {
      "id": 93,
      "user_name": "SHYAM SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      }
      ]
      }
     * 
     * 
     * @apiError SenderIdMissing The Sender id was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "Sender id missing.",
     *  "data": {}
     * }
     * 
     * @apiError ReceiverIdMissing The Receiver id was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "Receiver id missing.",
     *  "data": {}
     * }
     * 
     * 
     */
    public function messageList(Request $request) {
        try {
            if (!$request->sender_id) {
                return $this->sendErrorResponse("Sender id missing.", (object) []);
            }
            if (!$request->receiver_id) {
                return $this->sendErrorResponse("Receiver id missing.", (object) []);
            }
            $query = ChatMessages::query();

            $chatMessages = $query->where(function($q) use($request) {
                        $q->where(
                                function($query) use($request) {
                            $query->where("sender_id", $request->sender_id)
                            ->where("receiver_id", $request->receiver_id);
                        }
                        )
                        ->orWhere(
                                function($query) use($request) {
                            $query->where("receiver_id", $request->sender_id)
                            ->where("sender_id", $request->receiver_id);
                        }
                        );
                    })
                    ->get();

            return $this->sendErrorResponse("Messages list.", $chatMessages);
        } catch (\Exception $ex) {
            return $this->administratorResponse();
        }
    }

    /**
     * @api {get} /api/chat-user-list Chat User list
     * @apiHeader {String} Accept application/json. 
     * @apiName GetChatUserList
     * @apiGroup Chat
     * 
     * @apiParam {String} user_id User id*.
     * 
     * @apiSuccess {String} success true 
     * @apiSuccess {String} status_code (200 => success, 404 => Not found or failed). 
     * @apiSuccess {String} message Messages user list.
     * @apiSuccess {JSON}   data [].
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
      {
      "status": false,
      "status_code": 404,
      "message": "Messages user list.",
      "data": [
      {
      "id": 90,
      "user_name": "AKHIL PRATAP SINGH",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      },
      {
      "id": 94,
      "user_name": "HONEY KHERA",
      "profile_pic_path": "http://127.0.0.1:8000/img/no-image.jpg"
      }
      ]
      }
     * 
     * 
     * @apiError UserIdMissing The user id was missing.
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     * {
     *  "status": false,
     *  "message": "User id missing.",
     *  "data": {}
     * }
     * 
     * 
     */
    public function chatUserList(Request $request) {
        try {
            if (!$request->user_id) {
                return $this->sendErrorResponse("User id missing.", (object) []);
            }

            $query = ChatMessages::query();
            $chatUserLists = $query->where(function($q) use($request) {
                        $q->where("sender_id", $request->user_id)
                        ->orWhere("receiver_id", $request->user_id);
                    })
                    ->get();

            $data = [];
            $ids = [];
            $i = 0;
            foreach ($chatUserLists as $chatUserList) {
                if ($chatUserList->sender_id != $request->user_id) {
                    $user = User::find($chatUserList->sender_id);
                } else {
                    $user = User::find($chatUserList->receiver_id);
                }
                if (!in_array($user->id, $ids)) {
                    $ids[] = $user->id;
                    $data[$i]['id'] = $user->id;
                    $data[$i]['user_name'] = $user->name;
                    $data[$i]['profile_pic_path'] = "";
                    $i++;
                }
            }
            return $this->sendErrorResponse("Messages user list.", $data);
        } catch (\Exception $ex) {
            dd($ex);
            return $this->administratorResponse();
        }
    }

}
