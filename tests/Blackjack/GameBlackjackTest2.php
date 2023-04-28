<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\DeckOfCards;

/**
 * Test cases for class GameBlackjack
 */
class GameBlackjackTest2 extends TestCase
{
    /**
     * Test to make the computer finish playing it's round and computer wins.
     */
    public function testPlayComputerWins(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 8),
            new Card("diamonds", 6),
            new Card("hearts", 9), // Dealt to player
            new Card("spades", 4),
            new Card("clubs", 7), // Dealt to player
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }

        $game->initGame($deck);
        $game->newRound();
        $game->placeBet(100); // Player is all in
        $game->playerStay();
        $game->playComputer();

        $players = $game->getPlayers();
        $exp = 18; // From card 4, 6, and 8.
        $res = $players[1]->getPoints();
        $this->assertEquals($exp, $res);
        $exp = "lose";
        $res = $players[0]->getHands()[0]->getOutcome();
        $this->assertEquals($exp, $res);
        $res = $game->gameOver;
        $this->assertTrue($res);
    }

    /**
     * Test to make the computer finish playing it's round and player wins.
     */
    public function testPlayComputerLoses(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 7),
            new Card("diamonds", 6),
            new Card("hearts", 9), // Dealt to player
            new Card("spades", 4),
            new Card("clubs", 9), // Dealt to player
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }

        $game->initGame($deck);
        $game->newRound();
        $game->playerStay();
        $game->playComputer();

        $players = $game->getPlayers();
        $exp = 17; // From card 4, 6, and 7.
        $res = $players[1]->getPoints();
        $this->assertEquals($exp, $res);
        $exp = "win";
        $res = $players[0]->getHands()[0]->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to make the computer finish playing it's round and it's a draw.
     */
    public function testPlayComputerDraw(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 7),
            new Card("diamonds", 6),
            new Card("hearts", 8), // Dealt to player
            new Card("spades", 4),
            new Card("clubs", 9), // Dealt to player
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }

        $game->initGame($deck);
        $game->newRound();
        $game->playerStay();
        $game->playComputer();

        $players = $game->getPlayers();
        $exp = 17; // From card 4, 6, and 7.
        $res = $players[1]->getPoints();
        $this->assertEquals($exp, $res);
        $exp = "draw";
        $res = $players[0]->getHands()[0]->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to make the computer finish playing it's round and it's a draw.
     */
    public function testGetAsJson(): void
    {
        $game = new GameBlackjack();
        $deck = new DeckOfCards();
        $cards = [
            new Card("hearts", 7),
            new Card("diamonds", 6),
            new Card("hearts", 8), // Dealt to player
            new Card("spades", 4),
            new Card("clubs", 9), // Dealt to player
        ];
        foreach ($cards as $card) {
            $deck->addCard($card);
        }
        $bet = 30;
        $game->initGame($deck);
        $game->newRound();
        $game->placeBet($bet);

        $exp = [
            "gameOver" => false,
            "roundOver" => false,
            "player" =>
            [
                "hands" =>
                [
                    [
                        "bestPoint" => 17,
                        "placedBet" => 30,
                        "cardHand" => [
                            [
                                "suit" => "clubs",
                                "value" => 9,
                                "name" => "9 of clubs"
                            ],
                            [
                                "suit" => "hearts",
                                "value" => 8,
                                "name" => "8 of hearts"
                            ]
                            ],
                        "handOutcome" => "round not done"
                    ]
                ]
            ],
            "computer" =>
            [
                "hands" =>
                [
                    "bestPoint" => 10,
                    "cardHand" =>
                    [
                        [
                            "suit" => "spades",
                            "value" => 4,
                            "name" => "4 of spades"
                        ],
                        [
                            "suit" => "diamonds",
                            "value" => 6,
                            "name" => "6 of diamonds"
                        ]
                    ]
                ]
            ]
        ];
        $res = $game->getAsJson();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }
}
