<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormToAdmin;
use App\Mail\ContactFormConfirmation;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Enviar correo al admin
        Mail::to('davidgarciavalero@gmail.com')->send(new ContactFormToAdmin($data));

        // Enviar confirmación al usuario
        Mail::to($data['email'])->send(new ContactFormConfirmation($data));

        return response()->json([
            'message' => 'Mensaje enviado correctamente'
        ]);
    }
}
