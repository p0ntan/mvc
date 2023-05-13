<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Test class for ApiController
 */
class ApiControllerTest extends WebTestCase
{
    public function testApiStart(): void
    {
        $client = static::createClient();
        $client->request('GET', '/api');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Några API:er');
    }

    public function testApiQuote()
    {
        $client = static::createClient();
        $client->request('GET', '/api/quote');
        $this->assertResponseIsSuccessful();

        $response = $client->getResponse()->getContent();
        $this->assertJson($response);

        $this->assertStringContainsString('timestamp', $response);
    }

    public function testApiGameUninitialized()
    {
        $client = static::createClient();
        $client->request('POST', '/api/game');
        $this->assertResponseIsSuccessful();

        $response = $client->getResponse()->getContent();
        $this->assertJson($response);
        $this->assertStringContainsString('no game', $response);
    }

    public function testApiLibrary()
    {
        $client = static::createClient();
        $client->request('GET', '/api/library/books');
        $this->assertResponseIsSuccessful();

        $response = $client->getResponse()->getContent();
        $this->assertJson($response);
        $this->assertStringContainsString('isbn', $response);
    }

    public function testApiLibrarySingleBookNoMatch()
    {
        $client = static::createClient();
        $client->request('GET', '/api/library/book/wrong-isbn');
        $this->assertResponseIsSuccessful();

        $response = $client->getResponse()->getContent();
        $this->assertJson($response);
        $this->assertEquals("null", $response);
    }
}