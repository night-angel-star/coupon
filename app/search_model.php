<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class search_model extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
    ];

    protected $table = 'searchs';

    public function getList()
    {
        $sortedData = DB::table('searchs')
            ->orderBy('count', 'asc')
            ->limit(10)
            ->get();
        return $sortedData;
    }

    public function search($key)
    {
        if (json_encode($this->where('key', $key)->get()) == '[]') {
            $this->create(['key' => $key]);
        } else {
            $data = $this->where('key', $key)->firstOrFail();
            $data->count = $data->count + 1;
            $data->save();
        }
    }
}
