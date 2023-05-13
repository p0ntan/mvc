<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Test class for MainController
 */
class CardGameControllerTest extends WebTestCase
{
    public function testCardLandingpage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Kort');
        $this->assertSelectorTextContains('p', 'CardGraphic');
        $this->assertStringContainsString('<img', $content);
    }

    public function testDeckPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'En komplett sorterad kortlek');

        $exp = 52;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }

    public function testShufflePage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck/shuffle');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'En komplett blandad kortlek');

        $exp = 52;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }

    public function testDrawOnePage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck/draw');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Dra ett kort');

        $exp = 1;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }

    public function testDrawMultiNoCards(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck/draw/0');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Dra flera kort');

        $exp = 0;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }

    public function testDrawMultiFive(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck/draw/5');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Dra flera kort');

        $exp = 5;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }

    public function testDealAndDraw(): void
    {
        $client = static::createClient();
        $client->request('GET', '/card/deck/deal/2/4');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Dra kort till spelare');

        $exp = 8;
        $noOfImages = substr_count($content, "<i\n");
        $this->assertEquals($exp, $noOfImages);
    }
}
