<?php

namespace App\EscapeGame;

/**
 * ActionInterface is an interface to use for each action that can be used on an object.
 */
interface ActionInterface
{
    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName();
}
