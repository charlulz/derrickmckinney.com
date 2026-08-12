<?php

namespace App\Actions\Campaign;

use App\Services\GoHighLevel\ContactClient;

class SubmitSignupToGoHighLevel
{
    public function __construct(private ContactClient $contacts) {}

    /**
     * @param  array{name: string, email: string, phone: string}  $signup
     * @return array<string, mixed>
     */
    public function handle(array $signup): array
    {
        [$firstName, $lastName] = $this->splitName($signup['name']);

        return $this->contacts->upsert([
            'firstName' => $firstName,
            'lastName' => $lastName,
            'name' => $signup['name'],
            'email' => $signup['email'],
            'phone' => $signup['phone'],
            'tags' => ['website-signup', 'campaign'],
            'source' => 'derrickmckinney.com',
        ]);
    }

    /**
     * @return array{0: string, 1: string|null}
     */
    private function splitName(string $name): array
    {
        $parts = preg_split('/\s+/', trim($name)) ?: [];

        $firstName = $parts[0] ?? $name;
        $lastName = count($parts) > 1
            ? implode(' ', array_slice($parts, 1))
            : null;

        return [$firstName, $lastName];
    }
}
