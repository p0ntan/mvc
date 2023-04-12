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
        null => "🂿",
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

    public function getAsString(): string
    {
        $cardString = "[";
        $cardString .= $this->graphicSuits[$this->suit];
        $cardString .= array_key_exists($this->value, $this->graphicValues)
            ? $this->graphicValues[$this->value]
            : " $this->value";
        $cardString .= "]";
        return $cardString;
    }
}
