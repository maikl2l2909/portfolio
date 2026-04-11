<x-mail::message>
# New portfolio message

**Name:** {{ $senderName }}

**Email:** {{ $senderEmail }}

<x-mail::panel>
{!! nl2br(e($contactBody)) !!}
</x-mail::panel>

You can reply directly to this email to reach the sender.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
