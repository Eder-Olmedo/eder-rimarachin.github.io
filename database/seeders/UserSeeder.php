<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Eder',
            'last_name' => 'Rimarachin',
            'email' => 'Ederrr2802@gmail.com',
            'email_verified_at' => '2020-05-04 03:55:07',
            'password' => bcrypt('yoshimi#'), // secret
            'remember_token' => 'pClmYJHcYLbEB1YmL3tkoywcFg0y6ELPSNSxoCuTtwYbZnHSVrzvLJ45ibcg'
        ]);
    }
}
