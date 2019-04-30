<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use LaravelFCM\Facades\FCM;

class Controller extends BaseController {

    use AuthorizesRequests,
        DispatchesJobs,
        ValidatesRequests;

    public function sendSuccessResponse($message, $data) {
        return response()->json([
                    'status' => true,
                    'status_code' => 200,
                    'message' => $message,
                    'data' => $data
        ]);
    }

    public function sendErrorResponse($message, $data, $statusCode = 404) {
        return response()->json([
                    'status' => false,
                    'status_code' => $statusCode,
                    'message' => $message,
                    'data' => $data
        ]);
    }

    public function administratorResponse() {
        return response()->json([
                    'status' => false,
                    'status_code' => 404,
                    'message' => "Something went be wrong. Please contact administrator.",
                    'data' => (object) []
        ]);
    }

    public function androidPushNotification($title, $message, $token) {

        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(60 * 20)
                ->setPriority('high');

        $notificationBuilder = new PayloadNotificationBuilder($title);
        $notificationBuilder->setBody($message)
                ->setSound('default');

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData([
            'title' => $title,
            'message' => $message,
        ]);

        $option = $optionBuilder->build();
        $notification = $notificationBuilder->build();
        $data = $dataBuilder->build();

        $downstreamResponse = FCM::sendTo($token, $option, $notification, $data);
        return $downstreamResponse;
    }

}
