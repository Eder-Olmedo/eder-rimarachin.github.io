@extends('base.layout')

@section('content')
    <div>
        <div class="d-flex flex-wrap  align-content-around" style="position: relative; border: 1px solid #ccc;">
            <div class=" d-flex"
                style="width:50%; min-width:400px; height: 100vh; background-color:coral; background-size:cover">asdad</div>
            <div class="d-flex" style="width:50%; height: 100vh; background-color:gray;">ssss</div>
            <div class="box-profile d-flex flex-wrap  align-content-around ">
                <div class="d-flexbox caj1">
                    <img src="{{ asset('assets/img/Joaquin.jpg') }}" alt="profile-img">
                    <h1>
                        Eder Rimarachin
                    </h1>
                    <div class="line"></div>
                    <p>
                        Developer
                    </p>
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
                            <a class="btn btn-outline-light btn-floating btn-sm m-1"
                                href="https://github.com/eder-rimarachin/" target="_blank" role="button"><i
                                    class="fa fa-github"></i></a>
                        </section>
                    </div>

                </div>
                <div class="d-flexbox caj2">
                    <h1> Hellow</h1>
                    <h3> Here's who I am & what I do</h3>
                    <div class="align-content-around">
                        <a href="#">Resume</a>
                        <a href="#">Projects</a>
                    </div>
                    <p>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                        double click me to add your own content and make changes to the font.
                    </p>
                    <p>
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
