<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="author" content="AIT ELAHMADI Farah">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <title>@yield('title') - {{ config('app.name') }}</title>
</head>

<body>
    @include('site.partials.header')
    @yield('content')
    <div id="myDiv"></div>
    @include('site.partials.footer')
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
