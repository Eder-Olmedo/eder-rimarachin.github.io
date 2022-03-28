<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Project
 *
 * @property $id
 * @property $user_id
 * @property $porject_name
 * @property $project_description
 * @property $project_image
 * @property $project_link
 * @property $created_at
 * @property $updated_at
 *
 * @property User $user
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Project extends Model
{
    
    static $rules = [
		'user_id' => 'required',
		'porject_name' => 'required',
		'project_description' => 'required',
		'project_image' => 'required',
		'project_link' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id','porject_name','project_description','project_image','project_link'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
    

}
