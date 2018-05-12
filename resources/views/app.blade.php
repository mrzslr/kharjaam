<!-- app.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('/css/antd.min.css')}}" rel="stylesheet" type="text/css" />
        
    </head>
    <body>
        <div id="app"></div>
        <script src="{{mix('js/app.js')}}" ></script>
        <script src="{{asset('/js/antd.min.js')}}" ></script>
    </body>
</html>