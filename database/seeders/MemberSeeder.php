<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\member_model;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        member_model::create([
            'id' => 1,
            'name' => "admin",
            'level_id' => 1,
            'password' => bcrypt("admin")
        ]);

        $this->command->info('Members table seeded.');
    }
}
