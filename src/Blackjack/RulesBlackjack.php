<?php

namespace App\Card;

namespace App\Blackjack;

use App\Card\Card;
use App\Card\CardGraphic;
use App\Card\CardHand;

/**
 * Class for all the blackjack-rules
 */
class RulesBlackjack
{
    /**
     * Function to check the rules for each hand
     * @return array<mixed> with rules(bools) and values
     */
    public function checkAllRules(CardHand $cardHand): array
    {
        // Check all rules, give back array with rules to use
        $handValue = $this->countHand($cardHand);
        $rules = [
            "blackjack" => $this->blackjack($cardHand, $handValue),
            "softBlackjack" => $this->softBlackjack($handValue),
            "bust" => $this->bust($handValue),
            "values" => $handValue,
            "bestValue" => $this->getHighestValue($handValue),
            "winner" => $cardHand->isWinner()
        ];
        return $rules;
    }

    /**
     * Function to see if hand has blackjack (21 on first give)
     * @param CardHand $cardHand
     * @param array<int> $handValue
     * @return bool
     */
    private function blackjack(CardHand $cardHand, array $handValue): bool
    {
        $noOfCards = $cardHand->cardsInHand();
        if ($noOfCards == 2) {
            if ($handValue[0] == 21 or $handValue[1] == 21) {
                return true;
            }
        }
        return false;
    }

    /**
     * Function to see if there is a bust (over 21)
     * @param array<int> $handValue
     * @return bool
     */
    private function bust(array $handValue): bool
    {
        if ($handValue[0] > 21 && $handValue[1] > 21) {
            return true;
        }
        return false;
    }

    /**
     * Function to see if hand is 21
     * @param array<int> $handValue
     * @return bool
     */
    private function softBlackjack(array $handValue): bool
    {
        if ($handValue[0] == 21 or $handValue[1] == 21) {
            return true;
        }
        return false;
    }

    // More rules to add here:
    // Double down
    // Split

    /**
     * Function for computer rule (always play if handvalue < 17)
     * @return bool
     */
    public function computerRules(CardHand $cardHand): bool
    {
        $handValue = $this->countHand($cardHand);
        if ($this->softBlackjack($handValue)) {
            return true;
        } elseif ($handValue[0] < 17 or $handValue[1] < 17) {
            return false;
        }
        return true;
    }

    /**
     * Function to count value for a blackjack-hand
     * @param CardHand $cardHand
     * @return array<int>
     */
    private function countHand(CardHand $cardHand): array
    {
        // Two sums to control if an ace is in the hand
        $totalValue = 0;
        $totalValue2 = 0;
        $allCards = $cardHand->getCards();
        foreach ($allCards as $card) {
            $cardValue = $this->updateValue($card);
            if ($cardValue == 1) {
                $totalValue += 1;
                $totalValue2 += 11;
                continue;
            }
            $totalValue += $cardValue;
            $totalValue2 += $cardValue;
        }
        // Meaning there are two cards in hand, both aces
        if ($totalValue == 2 && $totalValue2 == 22) {
            $totalValue = 1;
            $totalValue2 = 12;
        }
        return [$totalValue, $totalValue2];
    }

    /**
     * Function to give the correct "blackjack"-value for each card
     * @return int
     */
    private function updateValue(Card $card): int
    {
        $cardValues = [
            11 => 10,
            12 => 10,
            13 => 10
        ];
        $value = $card->getValue();
        if ($value >= 11) {
            $value = $cardValues[$value];
        }
        return $value;
    }

    /**
     * Function to get highets "valid" value (<= 21)
     * Will return the lowest if both are over 21
     * @param array<int> $handValue
     */
    private function getHighestValue(array $handValue): int
    {
        $maxValue = $handValue[0];
        if($handValue[1] <= 21 && $handValue[1] > $maxValue) {
            $maxValue = $handValue[1];
        }
        return $maxValue;
    }

    /**
     * Function to calculate who is the winner
     * @param CardHand $player
     * @param CardHand $computer
     */
    public function findWinner(CardHand $player, CardHand $computer): void
    {
        $playerOptions = $this->checkAllRules($player);
        $computerOptions = $this->checkAllRules($computer);

        if ($playerOptions["blackjack"] !== $computerOptions["blackjack"]) {
            $winner = $playerOptions["blackjack"] ? $player : $computer;
            $winner->setWinner(true);
        } elseif ($playerOptions["bust"] !== $computerOptions["bust"]) {
            $winner = $playerOptions["bust"] ? $computer : $player;
            $winner->setWinner(true);
        } elseif ($playerOptions["bestValue"] !== $computerOptions["bestValue"]) {
            $winner = $playerOptions["bestValue"] > $computerOptions["bestValue"] ? $player : $computer;
            $winner->setWinner(true);
        }
    }
}
