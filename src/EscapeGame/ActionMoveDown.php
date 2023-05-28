<?php

namespace App\EscapeGame;

/**
 * ActionMoveDown is used to move down an object.
 */
class ActionMoveDown implements ActionOneInterface
{
    /**
     * Execute the action, changes position of the object.
     */
    public function execute(EscapeObject $object): void
    {
        $object->setPosition([31, 63]);
    }

    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Flytta';
    }
}
