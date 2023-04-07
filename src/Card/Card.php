<?php

namespace App\Card;

/**
 * Card class for playing cards
 */
class Card
{
    protected ?string $suit;
    protected ?int $value;

    public function __construct(string $suit = null, int $value = null)
    {
        $this->suit = $suit;
        $this->value = $value;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function getSuit(): ?string
    {
        return $this->suit;
    }
}
