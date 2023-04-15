<?php

namespace App\Card;

/**
 * Class to extend the class Card to make it more graphic
 */
class CardGraphic extends Card
{
    /**
     * @var array<string>
     */
    protected array $graphicSuits = [
        "joker" => "🂿",
        "spades" => "♠",
        "diamonds" => "♦",
        "hearts" => "♥",
        "clubs" => "♣"
    ];

    /**
     * @var array<string>
     */
    protected array $graphicValues = [
        1 => " A",
        11 => " J",
        12 => " Q",
        13 => " K"
    ];

    /**
     * Get card as a class sprite
     */
    public function getClassName(): string
    {
        return "card-sprite suit-$this->suit card-value-$this->value";
    }

    /**
     * Get card as a graphic string
     */
    public function getAsString(): string
    {
        $cardString = "[";
        $cardString .= $this->graphicSuits[$this->suit] . " ";
        $cardString .= array_key_exists($this->value, $this->graphicValues)
            ? $this->graphicValues[$this->value]
            : "$this->value";
        $cardString .= "]";
        return $cardString;
    }
}
