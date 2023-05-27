<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Test class for ProjectApiController
 */
class ProjectApiControllerTest extends WebTestCase
{
    public function testApiProjectHome(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h2', 'API:er');
    }

    public function testApiProjectObjects(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/objects');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('position', $response);
        $this->assertStringContainsString('hidden', $response);
    }

    public function testApiProjectDirections(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/directions');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('fromRoom', $response);
        $this->assertStringContainsString('toRoom', $response);
        $this->assertStringContainsString('direction', $response);
    }

    public function testApiProjectObject(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/object?id-object=6');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('"id": 6,', $response);
        $this->assertStringContainsString('position', $response);
        $this->assertStringContainsString('size', $response);
    }

    public function testApiProjectObjectFail(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/object?id-object=20000');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('"message":"No object found with id 20000"', $response);
    }

    public function testApiProjectRoom(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/room?id-room=2');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('"id": 2', $response);
        $this->assertStringContainsString('info', $response);
        $this->assertStringContainsString('firstRoom', $response);
    }

    public function testApiProjectRoomFail(): void
    {
        $client = static::createClient();
        $client->request('GET', '/proj/api/room?id-room=200');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $this->assertStringContainsString('"message":"No room found with id 200"', $response);
    }

    // public function testApiGameUninitialized(): void
    // {
    //     $client = static::createClient();
    //     $client->request('POST', '/api/game');
    //     $this->assertResponseIsSuccessful();

    //     $response = strval($client->getResponse()->getContent());
    //     $this->assertJson($response);
    //     $this->assertStringContainsString('no game', $response);
    // }

    // public function testApiLibrary(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', '/api/library/books');
    //     $this->assertResponseIsSuccessful();

    //     $response = strval($client->getResponse()->getContent());
    //     $this->assertJson($response);
    //     $this->assertStringContainsString('isbn', $response);
    // }

    // public function testApiLibrarySingleBookNoMatch(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', '/api/library/book/wrong-isbn');
    //     $this->assertResponseIsSuccessful();

    //     $response = strval($client->getResponse()->getContent());
    //     $this->assertJson($response);
    //     $this->assertEquals("null", $response);
    // }
}
