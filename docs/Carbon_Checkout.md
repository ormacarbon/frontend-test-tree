# Project: Checkout Teste GSS
Endpoint mock para o teste.

[https://github.com/ormacarbon/frontend-test-tree](https://github.com/ormacarbon/frontend-test-tree)

## End-point: Process payment
### Method: POST
>```
>{{url}}/payment
>```
### Body (**raw**)

```json
{   "co2": 1, // Quantidade de credito a ser comprada.
    "card_number": "5031433215406351",
    "expiration_month": 11,
    "expiration_year": 2025,
    "security_code": "123",
    "cardholder": {
        "name": "Augusto de C R dos Anjos",
        "identification": {
            "type": "CPF",
            "number": "12345678909"
        }
    }
}
```

### Response: 200
```json
{
    "status": "success",
    "message": "Transação realizada com sucesso."
}

```

### Response: 422
```json
{
    "status": "error",
    "message": "Não foi possível processar a transação.",
    "error_code": 422
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Credit Price
### Method: GET
>```
>{{url}}/credit-price/1
>```
### Response: 200
```json
{
    "createdAt": "2024-12-05T13:26:12.441Z",
    "updatedAt": "2024-01-06T18:09:52.130Z",
    "amout": 58,
    "id": "1"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: All Credit Price
### Method: GET
>```
>{{url}}/credit-price
>```
### Response: 200
```json
[
    {
        "createdAt": "2024-12-05T13:26:12.441Z",
        "updatedAt": "2024-01-06T18:09:52.130Z",
        "amout": 58,
        "id": "1"
    },
    {
        "createdAt": "2024-12-05T02:56:35.239Z",
        "updatedAt": "2023-12-15T04:33:12.967Z",
        "amout": 81,
        "id": "2"
    },
    {
        "createdAt": "2024-12-05T03:22:35.483Z",
        "updatedAt": "2024-03-20T11:05:00.551Z",
        "amout": 64,
        "id": "3"
    },
    {
        "createdAt": "2024-12-05T12:13:26.800Z",
        "updatedAt": "2024-01-29T18:50:25.205Z",
        "amout": 20,
        "id": "4"
    },
    {
        "createdAt": "2024-12-05T02:57:29.580Z",
        "updatedAt": "2024-07-30T01:29:53.548Z",
        "amout": 95,
        "id": "5"
    },
    {
        "createdAt": "2024-12-05T08:08:10.965Z",
        "updatedAt": "2024-10-04T17:47:49.390Z",
        "amout": 37,
        "id": "6"
    },
    {
        "createdAt": "2024-12-05T13:32:41.859Z",
        "updatedAt": "2024-03-19T06:50:26.161Z",
        "amout": 35,
        "id": "7"
    },
    {
        "createdAt": "2024-12-05T01:57:31.811Z",
        "updatedAt": "2024-02-23T01:15:02.483Z",
        "amout": 21,
        "id": "8"
    },
    {
        "createdAt": "2024-12-05T12:47:26.506Z",
        "updatedAt": "2023-12-11T00:59:34.484Z",
        "amout": 46,
        "id": "9"
    },
    {
        "createdAt": "2024-12-05T01:00:22.204Z",
        "updatedAt": "2024-08-15T08:19:13.502Z",
        "amout": 12,
        "id": "10"
    },
    {
        "createdAt": "2024-12-05T16:01:49.473Z",
        "updatedAt": "2024-05-15T12:20:38.992Z",
        "amout": 21,
        "id": "11"
    },
    {
        "createdAt": "2024-12-05T15:05:14.699Z",
        "updatedAt": "2024-05-23T23:15:43.995Z",
        "amout": 10,
        "id": "12"
    },
    {
        "createdAt": "2024-12-05T07:14:33.381Z",
        "updatedAt": "2024-06-17T12:38:30.285Z",
        "amout": 4,
        "id": "13"
    },
    {
        "createdAt": "2024-12-05T02:45:18.541Z",
        "updatedAt": "2024-01-06T18:15:22.267Z",
        "amout": 13,
        "id": "14"
    },
    {
        "createdAt": "2024-12-05T10:10:32.651Z",
        "updatedAt": "2024-01-22T17:49:11.366Z",
        "amout": 68,
        "id": "15"
    },
    {
        "createdAt": "2024-12-05T12:12:30.693Z",
        "updatedAt": "2024-06-25T16:24:56.086Z",
        "amout": 89,
        "id": "16"
    },
    {
        "createdAt": "2024-12-05T16:05:44.191Z",
        "updatedAt": "2024-08-08T15:01:46.622Z",
        "amout": 80,
        "id": "17"
    },
    {
        "createdAt": "2024-12-05T13:53:58.359Z",
        "updatedAt": "2024-07-07T18:58:37.747Z",
        "amout": 49,
        "id": "18"
    },
    {
        "createdAt": "2024-12-05T03:06:29.868Z",
        "updatedAt": "2024-07-15T17:22:17.808Z",
        "amout": 54,
        "id": "19"
    },
    {
        "createdAt": "2024-12-05T00:17:58.803Z",
        "updatedAt": "2024-04-09T17:21:43.054Z",
        "amout": 3,
        "id": "20"
    },
    {
        "createdAt": "2024-12-05T12:38:24.314Z",
        "updatedAt": "2023-12-26T15:11:30.264Z",
        "amout": 66,
        "id": "21"
    },
    {
        "createdAt": "2024-12-05T18:00:06.714Z",
        "updatedAt": "2023-12-16T22:29:43.452Z",
        "amout": 32,
        "id": "22"
    },
    {
        "createdAt": "2024-12-05T16:01:41.629Z",
        "updatedAt": "2024-04-11T20:35:35.080Z",
        "amout": 57,
        "id": "23"
    },
    {
        "createdAt": "2024-12-04T21:30:51.846Z",
        "updatedAt": "2024-09-16T08:01:10.190Z",
        "amout": 84,
        "id": "24"
    },
    {
        "createdAt": "2024-12-05T06:00:38.974Z",
        "updatedAt": "2024-05-14T23:05:29.244Z",
        "amout": 79,
        "id": "25"
    },
    {
        "createdAt": "2024-12-05T04:42:29.169Z",
        "updatedAt": "2024-01-11T18:32:33.944Z",
        "amout": 83,
        "id": "26"
    },
    {
        "createdAt": "2024-12-05T18:08:04.261Z",
        "updatedAt": "2024-11-08T13:09:32.283Z",
        "amout": 49,
        "id": "27"
    },
    {
        "createdAt": "2024-12-04T22:00:49.575Z",
        "updatedAt": "2024-07-07T05:16:31.632Z",
        "amout": 91,
        "id": "28"
    },
    {
        "createdAt": "2024-12-05T14:15:15.328Z",
        "updatedAt": "2024-10-19T13:59:33.881Z",
        "amout": 60,
        "id": "29"
    },
    {
        "createdAt": "2024-12-05T00:08:26.728Z",
        "updatedAt": "2024-06-19T02:37:18.832Z",
        "amout": 77,
        "id": "30"
    },
    {
        "createdAt": "2024-12-05T06:36:14.936Z",
        "updatedAt": "2024-08-27T17:37:57.326Z",
        "amout": 31,
        "id": "31"
    },
    {
        "createdAt": "2024-12-05T05:49:23.715Z",
        "updatedAt": "2024-10-21T14:22:14.337Z",
        "amout": 91,
        "id": "32"
    },
    {
        "createdAt": "2024-12-05T18:00:00.667Z",
        "updatedAt": "2024-03-28T11:04:20.686Z",
        "amout": 34,
        "id": "33"
    },
    {
        "createdAt": "2024-12-05T18:13:20.390Z",
        "updatedAt": "2024-03-15T07:54:28.862Z",
        "amout": 36,
        "id": "34"
    },
    {
        "createdAt": "2024-12-05T06:30:26.300Z",
        "updatedAt": "2024-09-14T16:13:59.002Z",
        "amout": 14,
        "id": "35"
    },
    {
        "createdAt": "2024-12-05T16:49:32.688Z",
        "updatedAt": "2024-01-21T06:43:21.927Z",
        "amout": 86,
        "id": "36"
    },
    {
        "createdAt": "2024-12-04T19:08:19.986Z",
        "updatedAt": "2024-01-03T21:04:50.778Z",
        "amout": 22,
        "id": "37"
    },
    {
        "createdAt": "2024-12-04T21:26:30.342Z",
        "updatedAt": "2023-12-27T18:24:51.634Z",
        "amout": 33,
        "id": "38"
    },
    {
        "createdAt": "2024-12-05T05:26:27.479Z",
        "updatedAt": "2024-03-07T03:16:58.268Z",
        "amout": 69,
        "id": "39"
    },
    {
        "createdAt": "2024-12-05T09:01:31.357Z",
        "updatedAt": "2024-11-14T15:52:09.701Z",
        "amout": 80,
        "id": "40"
    },
    {
        "createdAt": "2024-12-04T19:33:08.972Z",
        "updatedAt": "2024-09-24T04:05:00.059Z",
        "amout": 16,
        "id": "41"
    },
    {
        "createdAt": "2024-12-05T00:09:05.527Z",
        "updatedAt": "2024-08-26T00:45:02.240Z",
        "amout": 95,
        "id": "42"
    },
    {
        "createdAt": "2024-12-05T03:27:42.220Z",
        "updatedAt": "2024-04-19T12:57:31.876Z",
        "amout": 26,
        "id": "43"
    },
    {
        "createdAt": "2024-12-05T15:38:45.160Z",
        "updatedAt": "2024-07-15T15:32:40.777Z",
        "amout": 50,
        "id": "44"
    },
    {
        "createdAt": "2024-12-04T19:06:23.423Z",
        "updatedAt": "2024-06-14T12:29:21.333Z",
        "amout": 31,
        "id": "45"
    },
    {
        "createdAt": "2024-12-05T05:05:34.223Z",
        "updatedAt": "2024-10-23T10:41:47.374Z",
        "amout": 24,
        "id": "46"
    },
    {
        "createdAt": "2024-12-05T04:06:44.225Z",
        "updatedAt": "2024-10-31T07:21:03.413Z",
        "amout": 77,
        "id": "47"
    },
    {
        "createdAt": "2024-12-04T20:36:42.575Z",
        "updatedAt": "2024-04-15T13:51:07.899Z",
        "amout": 78,
        "id": "48"
    },
    {
        "createdAt": "2024-12-05T02:22:28.916Z",
        "updatedAt": "2024-08-26T06:36:18.118Z",
        "amout": 84,
        "id": "49"
    },
    {
        "createdAt": "2024-12-04T19:41:19.815Z",
        "updatedAt": "2024-10-09T18:36:55.171Z",
        "amout": 60,
        "id": "50"
    },
    {
        "createdAt": "2024-12-05T18:45:01.293Z",
        "updatedAt": "2024-05-28T01:14:14.682Z",
        "amout": 49,
        "id": "51"
    },
    {
        "createdAt": "2024-12-05T14:35:49.498Z",
        "updatedAt": "2023-12-31T08:57:32.280Z",
        "amout": 96,
        "id": "52"
    },
    {
        "createdAt": "2024-12-05T12:43:35.588Z",
        "updatedAt": "2024-02-20T06:56:25.757Z",
        "amout": 13,
        "id": "53"
    },
    {
        "createdAt": "2024-12-04T22:28:31.969Z",
        "updatedAt": "2024-07-14T18:13:50.244Z",
        "amout": 85,
        "id": "54"
    },
    {
        "createdAt": "2024-12-05T10:32:26.565Z",
        "updatedAt": "2024-05-17T02:14:09.069Z",
        "amout": 8,
        "id": "55"
    },
    {
        "createdAt": "2024-12-05T18:50:53.353Z",
        "updatedAt": "2024-11-12T02:36:16.750Z",
        "amout": 20,
        "id": "56"
    },
    {
        "createdAt": "2024-12-05T06:54:07.093Z",
        "updatedAt": "2024-01-15T12:34:45.977Z",
        "amout": 42,
        "id": "57"
    },
    {
        "createdAt": "2024-12-05T04:27:30.550Z",
        "updatedAt": "2024-05-03T07:30:04.822Z",
        "amout": 32,
        "id": "58"
    },
    {
        "createdAt": "2024-12-05T14:01:49.045Z",
        "updatedAt": "2024-10-30T05:03:51.273Z",
        "amout": 49,
        "id": "59"
    },
    {
        "createdAt": "2024-12-04T22:28:15.659Z",
        "updatedAt": "2024-07-30T13:43:05.336Z",
        "amout": 97,
        "id": "60"
    },
    {
        "createdAt": "2024-12-05T18:24:10.566Z",
        "updatedAt": "2024-04-23T23:09:35.447Z",
        "amout": 24,
        "id": "61"
    },
    {
        "createdAt": "2024-12-05T10:16:54.797Z",
        "updatedAt": "2024-10-20T19:35:34.243Z",
        "amout": 39,
        "id": "62"
    },
    {
        "createdAt": "2024-12-05T04:01:27.404Z",
        "updatedAt": "2024-07-18T05:52:46.304Z",
        "amout": 99,
        "id": "63"
    },
    {
        "createdAt": "2024-12-05T17:51:19.818Z",
        "updatedAt": "2024-04-13T02:38:18.312Z",
        "amout": 74,
        "id": "64"
    },
    {
        "createdAt": "2024-12-05T13:28:43.472Z",
        "updatedAt": "2024-07-14T03:04:51.200Z",
        "amout": 6,
        "id": "65"
    },
    {
        "createdAt": "2024-12-04T21:28:51.721Z",
        "updatedAt": "2024-03-31T10:12:30.915Z",
        "amout": 25,
        "id": "66"
    },
    {
        "createdAt": "2024-12-05T05:28:32.065Z",
        "updatedAt": "2024-09-11T19:33:54.806Z",
        "amout": 57,
        "id": "67"
    },
    {
        "createdAt": "2024-12-05T06:52:25.163Z",
        "updatedAt": "2024-11-07T09:36:58.879Z",
        "amout": 89,
        "id": "68"
    },
    {
        "createdAt": "2024-12-05T04:03:38.609Z",
        "updatedAt": "2023-12-08T20:28:20.865Z",
        "amout": 24,
        "id": "69"
    },
    {
        "createdAt": "2024-12-04T21:55:51.919Z",
        "updatedAt": "2024-01-09T23:21:12.125Z",
        "amout": 88,
        "id": "70"
    },
    {
        "createdAt": "2024-12-05T01:34:32.736Z",
        "updatedAt": "2024-04-28T09:26:19.620Z",
        "amout": 18,
        "id": "71"
    },
    {
        "createdAt": "2024-12-05T14:47:52.050Z",
        "updatedAt": "2024-02-28T01:08:32.787Z",
        "amout": 96,
        "id": "72"
    },
    {
        "createdAt": "2024-12-04T19:18:21.156Z",
        "updatedAt": "2024-09-26T04:14:34.620Z",
        "amout": 17,
        "id": "73"
    },
    {
        "createdAt": "2024-12-05T08:30:34.382Z",
        "updatedAt": "2023-12-26T18:41:18.911Z",
        "amout": 78,
        "id": "74"
    },
    {
        "createdAt": "2024-12-05T10:42:05.137Z",
        "updatedAt": "2024-06-24T02:10:56.619Z",
        "amout": 77,
        "id": "75"
    },
    {
        "createdAt": "2024-12-04T22:32:50.359Z",
        "updatedAt": "2023-12-18T09:38:05.569Z",
        "amout": 8,
        "id": "76"
    },
    {
        "createdAt": "2024-12-04T19:23:01.985Z",
        "updatedAt": "2024-01-07T03:15:59.713Z",
        "amout": 13,
        "id": "77"
    },
    {
        "createdAt": "2024-12-04T20:00:00.996Z",
        "updatedAt": "2024-06-05T18:17:32.476Z",
        "amout": 70,
        "id": "78"
    },
    {
        "createdAt": "2024-12-05T09:22:45.777Z",
        "updatedAt": "2024-11-25T07:24:09.109Z",
        "amout": 33,
        "id": "79"
    },
    {
        "createdAt": "2024-12-04T19:18:18.369Z",
        "updatedAt": "2024-08-11T10:48:12.126Z",
        "amout": 76,
        "id": "80"
    },
    {
        "createdAt": "2024-12-05T16:45:52.167Z",
        "updatedAt": "2024-08-08T16:21:07.674Z",
        "amout": 46,
        "id": "81"
    },
    {
        "createdAt": "2024-12-04T22:54:51.088Z",
        "updatedAt": "2024-10-26T11:27:09.607Z",
        "amout": 87,
        "id": "82"
    },
    {
        "createdAt": "2024-12-05T10:15:40.548Z",
        "updatedAt": "2024-04-18T07:28:13.545Z",
        "amout": 88,
        "id": "83"
    },
    {
        "createdAt": "2024-12-05T07:21:13.474Z",
        "updatedAt": "2024-11-25T01:46:27.233Z",
        "amout": 55,
        "id": "84"
    },
    {
        "createdAt": "2024-12-05T01:52:03.390Z",
        "updatedAt": "2024-07-26T02:17:02.256Z",
        "amout": 77,
        "id": "85"
    },
    {
        "createdAt": "2024-12-05T08:09:05.225Z",
        "updatedAt": "2024-03-12T07:32:47.541Z",
        "amout": 2,
        "id": "86"
    },
    {
        "createdAt": "2024-12-04T22:54:30.881Z",
        "updatedAt": "2024-07-28T19:19:16.591Z",
        "amout": 59,
        "id": "87"
    },
    {
        "createdAt": "2024-12-05T12:58:52.335Z",
        "updatedAt": "2024-03-14T23:30:36.885Z",
        "amout": 49,
        "id": "88"
    },
    {
        "createdAt": "2024-12-05T02:42:21.194Z",
        "updatedAt": "2024-04-20T08:18:54.805Z",
        "amout": 74,
        "id": "89"
    },
    {
        "createdAt": "2024-12-04T23:22:56.248Z",
        "updatedAt": "2024-09-28T19:58:12.367Z",
        "amout": 100,
        "id": "90"
    },
    {
        "createdAt": "2024-12-05T00:03:28.992Z",
        "updatedAt": "2024-07-18T22:47:57.371Z",
        "amout": 15,
        "id": "91"
    },
    {
        "createdAt": "2024-12-05T09:15:13.580Z",
        "updatedAt": "2024-11-15T22:21:19.403Z",
        "amout": 32,
        "id": "92"
    },
    {
        "createdAt": "2024-12-05T01:01:55.599Z",
        "updatedAt": "2024-10-07T12:34:53.855Z",
        "amout": 37,
        "id": "93"
    },
    {
        "createdAt": "2024-12-04T23:56:32.241Z",
        "updatedAt": "2024-05-15T12:28:51.263Z",
        "amout": 31,
        "id": "94"
    },
    {
        "createdAt": "2024-12-04T21:27:29.485Z",
        "updatedAt": "2024-05-01T23:38:29.701Z",
        "amout": 45,
        "id": "95"
    },
    {
        "createdAt": "2024-12-04T23:17:36.794Z",
        "updatedAt": "2024-11-05T23:55:58.897Z",
        "amout": 21,
        "id": "96"
    },
    {
        "createdAt": "2024-12-05T03:12:55.093Z",
        "updatedAt": "2024-10-26T05:24:48.098Z",
        "amout": 20,
        "id": "97"
    },
    {
        "createdAt": "2024-12-05T15:41:02.556Z",
        "updatedAt": "2024-06-12T15:18:46.422Z",
        "amout": 50,
        "id": "98"
    },
    {
        "createdAt": "2024-12-05T18:52:20.527Z",
        "updatedAt": "2024-03-12T00:35:47.181Z",
        "amout": 69,
        "id": "99"
    },
    {
        "createdAt": "2024-12-05T06:39:48.220Z",
        "updatedAt": "2024-04-05T02:38:11.840Z",
        "amout": 11,
        "id": "100"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
