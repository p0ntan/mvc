<?php

namespace App\EscapeGame;

/**
 * ActionOneInterface is an interface to use for actions requiring one argument
 */
interface ActionOneInterface extends ActionInterface
{
    public function execute(EscapeObject $object): void;
}
