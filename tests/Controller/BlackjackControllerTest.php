<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Test class for MainController
 */
class BlackjackControllerTest extends WebTestCase
{
    public function testLandingpage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/game');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Blackjack');
        $this->assertSelectorTextContains('p', 'casinospelet Blackjack');
        $this->assertStringContainsString('<form', $content);
    }

    public function testAboutGame(): void
    {
        $client = static::createClient();
        $client->request('GET', '/game/doc');
        $content = strval($client->getResponse()->getContent());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Blackjack');
        $this->assertSelectorTextContains('h2', 'Dokumentation');
        $this->assertStringContainsString('<img', $content);
    }

    public function testInitGame(): void
    {
        $client = static::createClient();
        // Init game, setting submitvalue to "init"
        $client->request('POST', '/game/new-round', ['submit' => 'init']);
        $this->assertResponseRedirects('/game/bet');

        $client->followRedirect();
        $this->assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testInitAndBet(): void
    {
        $client = static::createClient();
        $client->request('POST', '/game/new-round', ['submit' => 'init']);
        $this->assertResponseRedirects('/game/bet');

        $crawler = $client->followRedirect();
        $form = $crawler->selectButton('Satsa')->form();
        $client->submit($form); // Form has a defaultvalue of one

        $this->assertResponseRedirects('/game/play');
    }

    public function testInitBetPlay(): void
    {
        $client = static::createClient();
        $client->request('POST', '/game/new-round', ['submit' => 'init']);
        $this->assertResponseRedirects('/game/bet');
        // Bet
        $crawler = $client->followRedirect();
        $form = $crawler->selectButton('Satsa')->form();
        $form['playerbet'] = "10";
        $client->submit($form);
        $this->assertResponseRedirects('/game/play');
        // Play
        $crawler = $client->followRedirect();
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Spela Blackjack');
        $this->assertSelectorTextContains('p', 'Totalt satsat belopp: 10');
    }
}
