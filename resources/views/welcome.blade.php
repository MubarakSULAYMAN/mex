<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        {{-- <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> --}}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {{-- <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet"> --}}
        <link href="'css/app.css'" rel="stylesheet">
        <title>Expense Manager</title>

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}
        {{-- <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"> --}}
        {{-- <link rel="icon" href="{{ URL::secure_asset('report.svg') }}" type="image/x-icon"/> --}}
        <link rel="icon" href="'report.svg'" type="image/x-icon"/>

        {{-- <link rel="shortcut icon" type="image/png" href="../../resources/js/vue/assets/img/personal_finance.svg"/> --}}

    </head>

    <body>
        <div id="app">
            <App></App>
        </div>
    </body>
    <script src="{{ mix('js/app.js') }}"></script>

</html>
