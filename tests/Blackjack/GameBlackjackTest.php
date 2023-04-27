<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\CardHand;

/**
 * Test cases for class GameBlackjack
 */
class GameBlackjackTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties. Also init game and get players.
     */
    public function testCreateAndInitGame(): void
    {
        $game = new GameBlackjack();
        $game->initGame();
        $game->newRound();
        $gameOver = $game->gameOver;
        [$player, $computer] = $game->getPlayers();

        $this->assertInstanceOf("\App\Blackjack\GameBlackjack", $game);
        $this->assertInstanceOf("\App\Blackjack\PlayerBlackjack", $player);
        $this->assertInstanceOf("\App\Card\CardHand", $computer);
        $this->assertFalse($gameOver);
    }
}
