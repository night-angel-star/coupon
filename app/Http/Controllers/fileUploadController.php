<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class fileUploadController extends Controller
{
    public function uploadFile(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = $file->getClientOriginalName();
            $file->move(public_path('uploads'), $fileName);

            return response()->json(['message' => 'File uploaded successfully']);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }

    public function deleteFile(Request $request)
    {
        $filePath = public_path('uploads/' . $request['filename']);

        if (file_exists($filePath)) {
            // unlink($filePath);
            return response()->json(['message' => 'File deleted successfully', 'status' => 200]);
        }

        return response()->json(['message' => 'File not found'], 404);
    }

    public function deleteAdvert(Request $request)
    {
        $filePath = public_path('uploads/' . $request['filename']);

        if (file_exists($filePath)) {
            unlink($filePath);
            return response()->json(['message' => 'File deleted successfully', 'status' => 200]);
        }

        return response()->json(['message' => 'File not found'], 404);
    }

    public function getAdverts(Request $request)
    {
        $filePath1 = public_path('uploads/Advertisement1.jpg');
        $filePath2 = public_path('uploads/Advertisement2.jpg');
        $filePath3 = public_path('uploads/Advertisement3.jpg');
        $files = [];
        if (file_exists($filePath1)) {
            $files[] = basename($filePath1);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath2)) {
            $files[] = basename($filePath2);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath3)) {
            $files[] = basename($filePath3);
        } else {
            $files[] = '';
        }

        return response()->json(['adverts' => $files], 200);
    }
}
