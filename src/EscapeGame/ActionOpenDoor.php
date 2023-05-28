<?php

namespace App\EscapeGame;

/**
 * ActionOpenDoor opens the door and finishes the game
 */
class ActionOpenDoor implements ActionGame
{
    /**
     * Execute the action, sets game to over.
     */
    public function execute(EscapeObject $object, EscapeGame $game): void
    {
        $game->setGameOver(true);
    }

    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Lås upp och öppna';
    }
}
