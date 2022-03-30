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

    public function status($id)
    {
        $project = Project::find($id);
        if ($project->status == 'yes') {
            $project->status = 'no';
        } else {
            $project->status = 'yes';
        }
        $project->save();
        return redirect()->route('projects.index', compact('project'))
            ->with('success', 'Project status changed successfully');
    }

    public function contact()
    {
        return view('contact');
    }
}
