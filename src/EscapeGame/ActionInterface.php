<?php

namespace App\EscapeGame;

/**
 * ActionInterface is an interface to use for each action that can be used on an object.
 */
interface ActionInterface
{
    /**
     * @return string
     */
    public function getName();
}
