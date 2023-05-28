<?php

namespace App\EscapeGame;

/**
 * ActionOneInterface is an interface to use for actions requiring one argument
 */
interface ActionOneInterface extends ActionInterface
{
    /**
     * Execute the action.
     */
    public function execute(EscapeObject $object): void;
}
