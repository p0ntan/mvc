<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\CardHand;
use App\Card\DeckOfCards;

/**
 * Test cases for class GameBlackjack.
 */
class GameBlackjackTest extends TestCase
{
    /**
     * Construct object and init game for first round.
     */
    public function testCreateAndInitGame(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);
        $game->newRound();
        $gameOver = $game->gameOver;
        [$player, $computer] = $game->getPlayers();

        $this->assertInstanceOf("\App\Blackjack\GameBlackjack", $game);
        $this->assertInstanceOf("\App\Blackjack\PlayerBlackjack", $player);
        $this->assertInstanceOf("\App\Card\CardHand", $computer);
        $this->assertFalse($gameOver);
    }

    /**
     * Test to place bet for player
     */
    public function testPlaceBet(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);
        $game->newRound();
        $bet = 35;
        $game->placeBet($bet);

        $players = $game->getPlayers();
        $playerHand = $players[0]->currentHand();

        $exp = 65;
        $res = $players[0]->getMoney();
        $this->assertEquals($exp, $res);

        $exp = 35;
        $res = $playerHand->getBet();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to check options with a blackjack hand
     */
    public function testCheckOptionsBlackjack(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);

        $cardHand = new CardHand();
        $cardHand->addCards([new Card("hearts", 1), new Card("clubs", 10)]);

        $exp = [
            "blackjack" => true,
            "softBlackjack" => true,
            "bust" => false,
            "doubleDown" => true,
            "split" => false
        ];
        $res = $game->checkOptions($cardHand);
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to check options with a busted hand
     */
    public function testCheckOptionsBust(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);

        $cardHand = new CardHand();
        $cardHand->addCards([
            new Card("hearts", 6),
            new Card("clubs", 10),
            new Card("diamonds", 10)
        ]);

        $exp = [
            "blackjack" => false,
            "softBlackjack" => false,
            "bust" => true,
            "doubleDown" => false,
            "split" => false
        ];
        $res = $game->checkOptions($cardHand);
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to check options with a bet of more than half of what player has left.
     * Meaning double down or split isn't an option.
     */
    public function testCheckOptionsHighBet(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);
        $bet = 150;

        $cardHand = new CardHand();
        $cardHand->addCards([new Card("hearts", 9), new Card("clubs", 9)]);
        $cardHand->setBet($bet);

        $exp = [
            "blackjack" => false,
            "softBlackjack" => false,
            "bust" => false,
            "doubleDown" => false,
            "split" => false
        ];
        $res = $game->checkOptions($cardHand);
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }

    /**
     * Test when a players chooses double down.
     */
    public function testDoubleDown(): void
    {
        $game = new GameBlackjack();
        $mockDeck = $this->createMock(DeckOfCards::class);
        $game->initGame($mockDeck);
        $game->newRound();
        $bet = 20;
        $game->placeBet($bet);

        $players = $game->getPlayers();
        $hand = $players[0]->getHands();
        $exp = 20; // $bet
        $res = $hand[0]->getBet();
        $this->assertEquals($exp, $res);
        $this->assertFalse($hand[0]->isDone());

        $game->doubleDown();
        $exp = 40; // $bet * 2
        $res = $hand[0]->getBet();
        $this->assertEquals($exp, $res);
        $this->assertTrue($hand[0]->isDone());
    }

    /**
     * Test when a players chooses split.
     */
    public function testSplit(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 10),
            new Card("diamonds", 6),
            new Card("hearts", 7),
            new Card("spades", 4),
            new Card("clubs", 7),
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }

        $game->initGame($deck);
        $game->newRound();
        $bet = 20;
        $game->placeBet($bet);

        $players = $game->getPlayers();
        $hands = $players[0]->getHands();
        $this->assertCount(1, $hands);
        $exp = 80; // 100 - $bet
        $res = $players[0]->getMoney();
        $this->assertEquals($exp, $res);

        $game->splitHand();

        $players = $game->getPlayers();
        $hands = $players[0]->getHands();
        $this->assertCount(2, $hands); // Expecting two hands
        $exp = 60; // 100 - $bet * 2
        $res = $players[0]->getMoney();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test when a player adds a card, and deck will also run out of cards and shuffle itself.
     */
    public function testPlayerAddCard(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 6),
            new Card("diamonds", 6),
            new Card("hearts", 7),
            new Card("spades", 4),
            new Card("clubs", 7),
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }

        $game->initGame($deck);
        $game->newRound();

        $bust = $game->playerAddCard();
        $this->assertFalse($bust);
        $bust = $game->playerAddCard();
        $this->assertTrue($bust);
    }
}
