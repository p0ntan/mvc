<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Test class for ApiController
 */
class ApiCardControllerTest extends WebTestCase
{
    public function testApiDeck(): void
    {
        $client = static::createClient();
        $client->request('GET', '/api/deck');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $response = json_decode($response);
        $noOfItem = count($response);
        $exp = 52;
        $this->assertEquals($exp, $noOfItem);
    }

    public function testApiShuffle(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/deck/shuffle');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $response = json_decode($response);
        $noOfItem = count($response);
        $exp = 52;
        $this->assertEquals($exp, $noOfItem);
    }

    public function testApiDrawOne(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/deck/draw');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $exp = '"cardsLeft": 51';
        $this->assertStringContainsString($exp, $response);
    }

    public function testApiDrawTen(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/deck/draw/10');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $exp = '"cardsLeft": 42';
        $this->assertStringContainsString($exp, $response);
    }

    public function testApiDrawDeal(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/deck/deal/2/4');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $exp = '"cardsLeft": 44';
        $this->assertStringContainsString($exp, $response);
    }

    public function testApiDrawDealTooMany(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/deck/deal/10/6');
        $this->assertResponseIsSuccessful();

        $response = strval($client->getResponse()->getContent());
        $this->assertJson($response);

        $exp = 'Not enough cards to deal as requested.';
        $this->assertStringContainsString($exp, $response);
    }
}
