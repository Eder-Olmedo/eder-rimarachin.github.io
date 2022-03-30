@extends('base.layout')

@section('content')
    <div class="cp3 d-flex flex-wrap" style="position: relative; align-items: stretch;">
        <div class="lrt"></div>
        <div class="llt"></div>
        <div class="box-profile d-flex flex-wrap align-middle">
            <div class="d-flexbox caj1">
                <img src="{{ asset('assets/img/Joaquin.jpg') }}" alt="profile-img">
                <h1>
                    Eder Rimarachin
                </h1>
                <div class="line"></div>
                <div>
                    <p>
                        Developer
                    </p>
                </div>
                <div class="social">
                    <section class="p-1">
                        {{-- <!-- Facebook -->
                            <a class="btn btn-outline-light btn-floating btn-sm m-1"
                                href="https://www.facebook.com/eder.rimarachin.77/" target="_blank" role="button"><i
                                    class="fa fa-facebook"></i></a>

                            <!-- Twitter -->
                            <a class="btn btn-outline-light btn-floating  btn-sm m-1"
                                href="https://twitter.com/RimarachinEder" target="_blank" role="button"><i
                                    class="fa fa-twitter"></i></a> --}}

                        <!-- Instagram -->
                        <a class="btn btn-outline-light btn-floating btn-sm m-1"
                            href="https://www.instagram.com/eder_rimarachin/" target="_blank" role="button"><i
                                class="fa fa-instagram"></i></a>

                        <!-- Linkedin -->
                        <a class="btn btn-outline-light btn-floating btn-sm m-1"
                            href="https://www.linkedin.com/in/erimarachin98/" target="_blank" role="button"><i
                                class="fa fa-linkedin"></i></a>

                        <!-- Github -->
                        <a class="btn btn-outline-light btn-floating btn-sm m-1" href="https://github.com/eder-rimarachin/"
                            target="_blank" role="button"><i class="fa fa-github"></i></a>
                    </section>
                </div>

            </div>
            <div class="d-flexbox caj2">
                <h1> Hello!</h1>
                <h3> Soy Joaquin, Y no sé que estoy haciendo</h3>
                <div class="Repro ">
                    <a id="resume" href="{{ route('resume') }}">Resume</a>
                    <a id="project" href="{{ route('project') }}">Projects</a>
                </div>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                    double click me to add your own content and make changes to the font.<br/>
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
        </div>
    </div>
@endsection
