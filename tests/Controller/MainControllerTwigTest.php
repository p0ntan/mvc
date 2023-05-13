<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Test class for MainController
 */
class MainControllerTest extends WebTestCase
{
    public function testLandingPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Hem');
    }

    public function testAboutPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/about');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Om kursen mvc');
        $this->assertSelectorTextContains('p', 'objektorienterade progammeringstekniker');
    }

    public function testReportPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/report');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Redovisningstexter');
        $this->assertSelectorTextContains('h2', 'Kmom01');
    }

    public function testLuckyPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/lucky');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Lucky number!');
    }

    public function testMetricsPage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/metrics');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Metrics');
        $this->assertSelectorTextContains('p', 'kodstil');
    }
}
