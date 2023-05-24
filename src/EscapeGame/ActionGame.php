<?php

namespace App\EscapeGame;

/**
 * ActionGame is an interface to use for actions requiring two argument where
 * the second argument is the game.
 */
interface ActionGame extends ActionInterface
{
    public function execute(EscapeObject $object, EscapeGame $game): void;
}
