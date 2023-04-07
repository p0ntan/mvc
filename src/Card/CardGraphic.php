<?php

namespace App\Card;

/**
 * Class to extend the class Card to make it more graphic
 */
class CardGraphic extends Card
{
    public function getAsString(): string
    {
        $cardString = "[";
        switch ($this->suit) {
            case (null):
                $cardString .= "🂿";
                break;
            case "spades":
                $cardString .= "♠";
                break;
            case "diamonds":
                $cardString .= "♦";
                break;
            case "hearts":
                $cardString .= "♥";
                break;
            case "clubs":
                $cardString .= "♣";
                break;
        }
        switch ($this->value) {
            case (null):
                $cardString .= " J]";
                break;
            case (1):
                $cardString .= " A]";
                break;
            case (11):
                $cardString .= " J]";
                break;
            case (12):
                $cardString .= " Q]";
                break;
            case (13):
                $cardString .= " K]";
                break;
            default:
                $cardString .= " $this->value]";
                break;
        }
        return $cardString;
    }
}
