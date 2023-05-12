<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\CardHand;

/**
 * Test cases for class PlayerBlackjack
 */
class PlayerBlackjackTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreatePlayer(): void
    {
        $player = new PlayerBlackjack();
        $expMoney = 100; // Default value
        $expHands = []; // Default empty
        $resMoney = $player->getMoney();
        $resHands = $player->getHands();

        $this->assertInstanceOf("\App\Blackjack\PlayerBlackjack", $player);
        $this->assertEquals($expMoney, $resMoney);
        $this->assertEquals($expHands, $resHands);
    }

    /**
     * Test adding and then removing one hand with reset method
     */
    public function testAddAndResetHand(): void
    {
        $player = new PlayerBlackjack();
        $cardHand = new CardHand();

        $player->addCardHand($cardHand);
        $expHand = [$cardHand];
        $resArrHand = $player->getHands();
        $this->assertIsArray($resArrHand);
        $this->assertEquals($expHand, $resArrHand);

        $player->resetHands();
        $exp = [];
        $res = $player->getHands();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test adding and then removing multiple hands with reset method
     */
    public function testAddAndResetMultipleHands(): void
    {
        $player = new PlayerBlackjack();
        $noOfHands = 3;
        for ($i = 0; $i < $noOfHands; $i++) {
            $player->addCardHand(new CardHand());
        }
        $resArrHand = $player->getHands();
        $this->assertIsArray($resArrHand);
        $this->assertCount($noOfHands, $resArrHand);

        foreach ($resArrHand as $hand) {
            $this->assertInstanceOf("\App\Card\CardHand", $hand);
        }

        $player->resetHands();
        $exp = [];
        $res = $player->getHands();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test adding and getting current hand when having two hands
     */
    public function testAddAndGetCurrentHand(): void
    {
        $player = new PlayerBlackjack();
        $handOne = new CardHand();
        $handTwo = new CardHand();
        $player->addCardHand($handOne);
        $player->addCardHand($handTwo);

        $currentHand = $player->currentHand();
        $this->assertSame($handOne, $currentHand);
        $this->assertNotSame($handTwo, $currentHand);
        // Setting first hand to done
        $handOne->setDone(true);
        $currentHand = $player->currentHand();
        $this->assertNotSame($handOne, $currentHand);
        $this->assertSame($handTwo, $currentHand);
    }

    /**
     * Test adding and getting current hand when having no hands or both is done
     */
    public function testAddAndGetCurrentHandException(): void
    {
        $player = new PlayerBlackjack();
        $this->expectException(NoHandsLeftException::class);

        $handOne = new CardHand();
        $handTwo = new CardHand();
        // Setting first hand to done
        $handOne->setDone(true);
        $player->addCardHand($handOne);
        $player->addCardHand($handTwo);

        $currentHand = $player->currentHand();
        $this->assertSame($handTwo, $currentHand);
        $this->assertNotSame($handOne, $currentHand);
        // Setting second hand to done
        $handTwo->setDone(true);
        $this->expectException(NoHandsLeftException::class);
        $currentHand = $player->currentHand();
    }

    /**
     * Test setting and getting money for player
     */
    public function testSetAndGetMoney(): void
    {
        $player = new PlayerBlackjack();
        $expMoney = 100;
        $resMoney = $player->getMoney();
        $this->assertEquals($expMoney, $resMoney);

        $expMoney = 50;
        $player->setMoney($expMoney);
        $resMoney = $player->getMoney();
        $this->assertEquals($expMoney, $resMoney);
    }

    /**
     * Test setting and getting total bet for each hand using mockhands
     */
    public function testGetTotalBet(): void
    {
        $player = new PlayerBlackjack();
        $noOfHands = 3;
        $bet = 10;
        for ($i = 0; $i < $noOfHands; $i++) {
            $mockHand = $this->createStub(CardHand::class);
            $mockHand->method("getBet")->willReturn($bet);
            $player->addCardHand($mockHand);
        }
        $exp = $bet * 3; // 30
        $res = $player->getTotalBet();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to split a hand
     */
    public function testSplitHand(): void
    {
        $player = new PlayerBlackjack();
        $bet = 20;

        $cardHand = new CardHand();
        $cardHand->setBet($bet);
        $mockCard = $this->createStub(Card::class);
        $mockCardLast = $this->createStub(Card::class);
        $cardHand->addCard($mockCard);
        $cardHand->addCard($mockCardLast);
        $player->addCardHand($cardHand);

        $player->splitHand();

        $expBet = $bet * 2;
        $resBet = $player->getTotalBet();
        $this->assertEquals($expBet, $resBet);

        $resHands = $player->getHands();
        $resCardFirst = $resHands[0]->getCards();
        $resCardLast = $resHands[1]->getCards();
        $this->assertSame($mockCard, $resCardFirst[0]);
        $this->assertSame($mockCardLast, $resCardLast[0]);
        $this->assertCount(2, $resHands);
    }

    /**
     * Test to split a empty hand
     */
    public function testSplitHandEmpty(): void
    {
        $player = new PlayerBlackjack();
        $this->expectException(NoHandsLeftException::class);
        $player->splitHand();
    }
}
