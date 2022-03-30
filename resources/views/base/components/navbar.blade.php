<div>
    <nav class="navbar navbar-expand-lg navbar-dark text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-backspace-reverse-fill" viewBox="0 0 16 16" style="color:white;">
            <path
                d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z" />
        </svg>
        <a class="navbar-brand" href="{{ route('home') }}">Eder Rimarachin / Developer</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style="color: white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" style="justify-content: flex-end;">
            <ul class="navbar-nav text-white" style="font-size: 14px">
                <li class="nav-item active">
                    <a class="nav-link" href="{{ route('index') }}">ABOUT ME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('resume') }}">RESUME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('project') }}">PROJECTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('contact') }}">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
