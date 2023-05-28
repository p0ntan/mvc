<?php

namespace App\EscapeGame;

/**
 * ActionLookCloser is used to set an object to active
 */
class ActionLookCloser implements ActionOneInterface
{
    /**
     * Method doens't do anything, exists only for interface.
     */
    public function execute(EscapeObject $object): void
    {
        // Does nothing for now
    }

    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Titta närmare';
    }
}
