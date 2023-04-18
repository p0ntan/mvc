<?php

namespace App\Card;

/**
 * Card class for playing cards
 */
class Card
{
    public const SUITS = ["clubs", "diamonds", "hearts", "spades"];
    public const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    protected string $suit;
    protected int $value;

    public function __construct(string $suit = null, int $value = null)
    {
        $this->suit = $suit == null ? "joker" : $suit;
        $this->value = $value == null ? 0 : $value;
    }

    public function getValue(): int
    {
        return $this->value;
    }

    public function getSuit(): string
    {
        return $this->suit;
    }

    public function getAsString(): string
    {
        switch ($this->value) {
            case (0):
                return "Joker";
            case (1):
                $value = "Ace";
                break;
            case (11):
                $value = "Knight";
                break;
            case (12):
                $value = "Queen";
                break;
            case (13):
                $value = "King";
                break;
            default:
                $value = $this->value;
                break;
        }
        return "$value of $this->suit";
    }

    public function getAsJson(): array
    {
        return [
            "suit" => $this->getSuit(),
            "value" => $this->getValue(),
            "name" => $this->getAsString()
        ];
    }
}
