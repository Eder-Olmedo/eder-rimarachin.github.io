@extends('base.layout')


@section('content')
    <div class="container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <div style="display: flex; justify-content: space-between; align-items: center;">

                                <span id="card_title">
                                    {{ __('Project') }}
                                </span>
                            </div>
                        </div>
                        @if ($message = Session::get('success'))
                            <div class="alert alert-success">
                                <p>{{ $message }}</p>
                            </div>
                        @endif


                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead class="thead">
                                        <tr>
                                            {{-- <th>No</th>

                                            <th>User Id</th> --}}
                                            <th>Porject Name</th>
                                            <th>Project Description</th>
                                            <th>Project Image</th>
                                            <th>Project Link</th>

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($projects as $project)
                                            @if ($project->status == 'yes')
                                                <tr>
                                                    {{-- <td>{{ ++$i }}</td>

                                                <td>{{ $project->user_id }}</td> --}}
                                                    <td>{{ $project->porject_name }}</td>
                                                    <td>{{ $project->project_description }}</td>
                                                    <td>{{ $project->project_image }}</td>
                                                    <td>{{ $project->project_link }}</td>

                                                </tr>
                                            @endif
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {!! $projects->links() !!}
            </div>
        </div>
    </div>
@endsection
