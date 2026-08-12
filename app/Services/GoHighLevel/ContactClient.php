<?php

namespace App\Services\GoHighLevel;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class ContactClient
{
    /**
     * Create or update a contact in the configured GoHighLevel location.
     *
     * @param  array{
     *     firstName?: string,
     *     lastName?: string,
     *     name?: string,
     *     email: string,
     *     phone: string,
     *     tags?: list<string>,
     *     source?: string
     * }  $contact
     * @return array<string, mixed>
     */
    public function upsert(array $contact): array
    {
        $locationId = config('services.gohighlevel.location_id');
        $token = config('services.gohighlevel.api_key');

        if (! filled($token) || ! filled($locationId)) {
            throw new RuntimeException('GoHighLevel is not configured.');
        }

        $payload = array_filter([
            'locationId' => $locationId,
            'firstName' => $contact['firstName'] ?? null,
            'lastName' => $contact['lastName'] ?? null,
            'name' => $contact['name'] ?? null,
            'email' => $contact['email'],
            'phone' => $contact['phone'],
            'tags' => $contact['tags'] ?? null,
            'source' => $contact['source'] ?? 'Website',
        ], fn (mixed $value): bool => $value !== null && $value !== '');

        try {
            $response = $this->client()
                ->post('/contacts/upsert', $payload)
                ->throw();
        } catch (RequestException $exception) {
            throw new RuntimeException(
                'GoHighLevel contact upsert failed: '.$exception->response?->body(),
                previous: $exception,
            );
        }

        /** @var array<string, mixed> $json */
        $json = $response->json() ?? [];

        return $json;
    }

    private function client(): PendingRequest
    {
        return Http::baseUrl((string) config('services.gohighlevel.base_url'))
            ->withToken((string) config('services.gohighlevel.api_key'))
            ->acceptJson()
            ->asJson()
            ->withHeaders([
                'Version' => (string) config('services.gohighlevel.version'),
            ])
            ->timeout(10)
            ->connectTimeout(5)
            ->retry(2, 200, throw: false);
    }
}
