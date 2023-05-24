<?php

namespace App\EscapeGame;

/**
 * ActionOpenDoor opens the door and finishes the game
 */
class ActionOpenDoor implements ActionGame
{
    public function execute(EscapeObject $object, EscapeGame $game): void
    {
        $game->setGameOver(true);
    }

    public function getName(): string
    {
        return 'Lås upp och öppna';
    }
}
