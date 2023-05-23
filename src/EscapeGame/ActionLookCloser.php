<?php

namespace App\EscapeGame;

/**
 * ActionLookCloser is used to set an object to active
 */
class ActionLookCloser implements ActionOneInterface
{
    public function execute(EscapeObject $object): void
    {
        // Does nothing for now
    }

    public function getName(): string
    {
        return 'Titta närmare';
    }
}
