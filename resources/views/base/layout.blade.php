<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Eder Rimarachin | Developer</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Styles -->

    @include('base.resource.style')
    @yield('styles')

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

    </style>

</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <div class="wrapper">
        @include('base.components.navbar')
        <div class="content-wrapper">
            @yield('content')
        </div>
        @include('base.components.footer')
    </div>
    @include('base.resource.script')
    @yield('scripts')
</body>
</html>
