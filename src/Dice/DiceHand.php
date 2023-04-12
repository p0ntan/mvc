<?php

namespace App\Dice;

use App\Dice\Dice;

/**
 * Class for a hand holding dices
 */
class DiceHand
{
    /**
     * @var array<Dice>
     */
    private array $hand = [];

    /**
     * Adds Dice to DiceHand
     */
    public function add(Dice $die): void
    {
        $this->hand[] = $die;
    }

    /**
     * Roll all Dice in DiceHand
     */
    public function roll(): void
    {
        foreach ($this->hand as $die) {
            $die->roll();
        }
    }

    /**
     * Get number of Dice in hand
     * @return int
     */
    public function getNumberDices(): int
    {
        return count($this->hand);
    }

    /**
     * Get values for each dice
     * @return array<int>
     */
    public function getValues(): array
    {
        $values = [];
        foreach ($this->hand as $die) {
            $values[] = $die->getValue();
        }
        return $values;
    }

    /**
     * Get an array with each dice as a string
     * @return array<string>
     */
    public function getString(): array
    {
        $values = [];
        foreach ($this->hand as $die) {
            $values[] = $die->getAsString();
        }
        return $values;
    }
}
