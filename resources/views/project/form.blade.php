<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('user_id') }}
            {{ Form::text('user_id', $project->user_id, ['class' => 'form-control' . ($errors->has('user_id') ? ' is-invalid' : ''), 'placeholder' => 'User Id']) }}
            {!! $errors->first('user_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('porject_name') }}
            {{ Form::text('porject_name', $project->porject_name, ['class' => 'form-control' . ($errors->has('porject_name') ? ' is-invalid' : ''), 'placeholder' => 'Porject Name']) }}
            {!! $errors->first('porject_name', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('project_description') }}
            {{ Form::text('project_description', $project->project_description, ['class' => 'form-control' . ($errors->has('project_description') ? ' is-invalid' : ''), 'placeholder' => 'Project Description']) }}
            {!! $errors->first('project_description', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('project_image') }}
            {{ Form::text('project_image', $project->project_image, ['class' => 'form-control' . ($errors->has('project_image') ? ' is-invalid' : ''), 'placeholder' => 'Project Image']) }}
            {!! $errors->first('project_image', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('project_link') }}
            {{ Form::text('project_link', $project->project_link, ['class' => 'form-control' . ($errors->has('project_link') ? ' is-invalid' : ''), 'placeholder' => 'Project Link']) }}
            {!! $errors->first('project_link', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>