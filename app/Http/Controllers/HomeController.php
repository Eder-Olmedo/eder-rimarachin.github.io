<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('index');
    }

    public function resume()
    {
        return view('resume');
    }

    public function projects()
    {
        // return view('project');
        $projects = Project::paginate();

        return view('project', compact('projects'))
            ->with('i', (request()->input('page', 1) - 1) * $projects->perPage());
    }

    public function contact()
    {
        return view('contact');
    }
}
