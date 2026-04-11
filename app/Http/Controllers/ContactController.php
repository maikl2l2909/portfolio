<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMessage;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        ContactMessage::create($request->only(['name', 'email', 'message']));

        $recipient = config('mail.contact_to') ?: config('mail.from.address');

        try {
            Mail::to($recipient)->send(new ContactFormMessage(
                $validated['name'],
                $validated['email'],
                $validated['message'],
            ));
        } catch (\Throwable $e) {
            Log::error('Contact form email failed', [
                'exception' => $e->getMessage(),
                'recipient' => $recipient,
            ]);

            return back()
                ->withInput()
                ->withErrors(['email' => 'We saved your message but could not send the notification email. Please try again later or reach out directly.']);
        }

        return back()->with('success', 'Message sent successfully!');
    }
}

