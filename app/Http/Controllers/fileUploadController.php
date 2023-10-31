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

    public function getAdvertCount(Request $request)
    {
        $filePath1 = public_path('uploads/Advertisement1.jpg');
        $filePath2 = public_path('uploads/Advertisement2.jpg');
        $filePath3 = public_path('uploads/Advertisement3.jpg');
        $filePath4 = public_path('uploads/Advertisement4.jpg');
        $filePath5 = public_path('uploads/Advertisement5.jpg');
        $filePath6 = public_path('uploads/Advertisement6.jpg');
        $filePath7 = public_path('uploads/Advertisement7.jpg');
        $filePath8 = public_path('uploads/Advertisement8.jpg');
        $filePath9 = public_path('uploads/Advertisement9.jpg');
        $filePath10 = public_path('uploads/Advertisement10.jpg');

        $adExists = [];
        if (file_exists($filePath1)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath2)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath3)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath4)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath5)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath6)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath7)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath8)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath9)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }
        if (file_exists($filePath10)) {
            $adExists[] = 1;
        } else {
            $adExists[] = 0;
        }

        return response()->json(['adverts' => $adExists], 200);
    }

    public function getAdverts(Request $request)
    {
        $filePath1 = public_path('uploads/Advertisement1.jpg');
        $filePath2 = public_path('uploads/Advertisement2.jpg');
        $filePath3 = public_path('uploads/Advertisement3.jpg');
        $filePath4 = public_path('uploads/Advertisement4.jpg');
        $filePath5 = public_path('uploads/Advertisement5.jpg');
        $filePath6 = public_path('uploads/Advertisement6.jpg');
        $filePath7 = public_path('uploads/Advertisement7.jpg');
        $filePath8 = public_path('uploads/Advertisement8.jpg');
        $filePath9 = public_path('uploads/Advertisement9.jpg');
        $filePath10 = public_path('uploads/Advertisement10.jpg');

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
        if (file_exists($filePath4)) {
            $files[] = basename($filePath4);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath5)) {
            $files[] = basename($filePath5);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath6)) {
            $files[] = basename($filePath6);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath7)) {
            $files[] = basename($filePath7);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath8)) {
            $files[] = basename($filePath8);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath9)) {
            $files[] = basename($filePath9);
        } else {
            $files[] = '';
        }
        if (file_exists($filePath10)) {
            $files[] = basename($filePath10);
        } else {
            $files[] = '';
        }

        return response()->json(['adverts' => $files], 200);
    }
}
