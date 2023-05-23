<?php

namespace App\EscapeGame;

/**
 * ActionMoveDown is used to move down an object.
 */
class ActionMoveDown implements ActionOneInterface
{
    public function execute(EscapeObject $object): void
    {
        $object->setPosition([31, 63]);
    }

    public function getName(): string
    {
        return 'Flytta';
    }
}
