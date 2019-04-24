define({ "api": [
  {
    "type": "get",
    "url": "/api/message-list",
    "title": "Chat message list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "GetChatMessageList",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender_id",
            "description": "<p>Sender id*.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Receiver id*.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Messages list.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n      \"status\": false,\n      \"status_code\": 404,\n      \"message\": \"Messages list.\",\n      \"data\": [\n      {\n      \"id\": 1,\n      \"sender_id\": 93,\n      \"receiver_id\": 94,\n      \"message\": \"Hi\",\n      \"is_view\": 0,\n      \"created_at\": \"2019-04-18 18:10:11\",\n      \"updated_at\": \"2019-04-18 18:10:11\",\n      \"sender_detail\": {\n      \"id\": 93,\n      \"user_name\": \"SHYAM SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      \"receiver_detail\": {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      },\n      {\n      \"id\": 2,\n      \"sender_id\": 94,\n      \"receiver_id\": 93,\n      \"message\": \"hello\",\n      \"is_view\": 0,\n      \"created_at\": \"2019-04-18 18:10:18\",\n      \"updated_at\": \"2019-04-18 18:10:18\",\n      \"sender_detail\": {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      \"receiver_detail\": {\n      \"id\": 93,\n      \"user_name\": \"SHYAM SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      },\n      {\n      \"id\": 3,\n      \"sender_id\": 93,\n      \"receiver_id\": 94,\n      \"message\": \"How are you?\",\n      \"is_view\": 0,\n      \"created_at\": \"2019-04-18 18:10:42\",\n      \"updated_at\": \"2019-04-18 18:10:42\",\n      \"sender_detail\": {\n      \"id\": 93,\n      \"user_name\": \"SHYAM SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      \"receiver_detail\": {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      },\n      {\n      \"id\": 4,\n      \"sender_id\": 94,\n      \"receiver_id\": 93,\n      \"message\": \"I am fine.\",\n      \"is_view\": 0,\n      \"created_at\": \"2019-04-18 18:10:51\",\n      \"updated_at\": \"2019-04-18 18:10:51\",\n      \"sender_detail\": {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      \"receiver_detail\": {\n      \"id\": 93,\n      \"user_name\": \"SHYAM SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      },\n      {\n      \"id\": 5,\n      \"sender_id\": 94,\n      \"receiver_id\": 93,\n      \"message\": \"and you\",\n      \"is_view\": 0,\n      \"created_at\": \"2019-04-18 18:10:57\",\n      \"updated_at\": \"2019-04-18 18:10:57\",\n      \"sender_detail\": {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      \"receiver_detail\": {\n      \"id\": 93,\n      \"user_name\": \"SHYAM SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      }\n      ]\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SenderIdMissing",
            "description": "<p>The Sender id was missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReceiverIdMissing",
            "description": "<p>The Receiver id was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"Sender id missing.\",\n \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"Receiver id missing.\",\n \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/api/chat-user-list",
    "title": "User list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "GetChatUserList",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id*.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Messages user list.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n      \"status\": false,\n      \"status_code\": 404,\n      \"message\": \"Messages user list.\",\n      \"data\": [\n      {\n      \"id\": 90,\n      \"user_name\": \"AKHIL PRATAP SINGH\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      },\n      {\n      \"id\": 94,\n      \"user_name\": \"HONEY KHERA\",\n      \"profile_pic_path\": \"http://127.0.0.1:8000/img/no-image.jpg\"\n      }\n      ]\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdMissing",
            "description": "<p>The user id was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"User id missing.\",\n \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "GetUser",
    "group": "Chat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User detail.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"status\": true,\n            \"status_code\": 200,\n            \"message\": \"User detail.\",\n            \"data\": {\n                \"user\": {\n                    \"id\": 4,\n                    \"name\": \"Akash\",\n                    \"email\": \"akash@gmail.com\",\n                    \"email_verified_at\": null,\n                    \"device_token\": null,\n                    \"created_at\": null,\n                    \"updated_at\": null\n                }\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/api/user-list/{user_id}",
    "title": "User List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "GetUserList",
    "group": "Chat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User list.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"status\": true,\n            \"status_code\": 200,\n            \"message\": \"Token updated.\",\n            \"data\": {}\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/api/send-message",
    "title": "Send Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "PostSendMessage",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender_id",
            "description": "<p>Sender id*.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Receiver id*.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message*.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message send successfully.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n      \"status\": true,\n      \"status_code\": 200,\n      \"message\": \"Message send successfully.\",\n      \"data\": {}\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SenderIdMissing",
            "description": "<p>The Sender id was missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReceiverMissing",
            "description": "<p>The Receiver was missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MessageMissing",
            "description": "<p>The Message was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"Sender id missing.\",\n \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"Receiver id missing.\",\n \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": false,\n \"message\": \"Message missing.\",\n \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/api/update-token",
    "title": "Update token",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "name": "PostUpdatetoken",
    "group": "Chat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_code",
            "description": "<p>(200 =&gt; success, 404 =&gt; Not found or failed).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Token updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"status\": true,\n            \"status_code\": 200,\n            \"message\": \"Token updated.\",\n            \"data\": {}\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  }
] });
