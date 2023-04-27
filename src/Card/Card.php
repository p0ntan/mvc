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
    private array $valueNames = [
        0 => "Joker",
        1 => "Ace",
        11 => "Knight",
        12 => "Queen",
        13 => "King"
    ];

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
        $value = array_key_exists($this->value, $this->valueNames)
            ? $this->valueNames[$this->value]
            : $this->value;
        return "$value of $this->suit";
    }

    /**
     * Function to get card as json-objekt
     * @return array<mixed>
     */
    public function getAsJson(): array
    {
        return [
            "suit" => $this->getSuit(),
            "value" => $this->getValue(),
            "name" => $this->getAsString()
        ];
    }
}
