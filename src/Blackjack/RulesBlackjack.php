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
        $rules = [
            "blackjack" => $this->blackjack($cardHand),
            "softBlackjack" => $this->softBlackjack($cardHand),
            "bust" => $this->bust($cardHand),
            "split" => $this->split($cardHand)
        ];
        $bestValue = $this->getHighestValue($cardHand);
        $cardHand->setPoints($bestValue);
        return $rules;
    }

    /**
     * Function to see if hand has blackjack (21 on first give)
     * @param CardHand $cardHand
     * @return bool
     */
    private function blackjack(CardHand $cardHand): bool
    {
        $noOfCards = $cardHand->cardsInHand();
        $handValues = $this->countHand($cardHand);
        if ($noOfCards == 2) {
            if ($handValues[0] == 21 or $handValues[1] == 21) {
                return true;
            }
        }
        return false;
    }

    /**
     * Function to see if there is a bust (over 21)
     * @param CardHand $cardHand
     * @return bool
     */
    private function bust(CardHand $cardHand): bool
    {
        $handValues = $this->countHand($cardHand);
        if ($handValues[0] > 21 && $handValues[1] > 21) {
            return true;
        }
        return false;
    }

    /**
     * Function to see if hand is 21
     * @param CardHand $cardHand
     * @return bool
     */
    private function softBlackjack(CardHand $cardHand): bool
    {
        $handValues = $this->countHand($cardHand);
        if ($handValues[0] == 21 or $handValues[1] == 21) {
            return true;
        }
        return false;
    }

    /**
     * Function to see if it's possible to split hands
     */
    private function split(CardHand $cardHand): bool
    {
        $noOfCards = $cardHand->cardsInHand();
        $cards = $cardHand->getCards();
        if ($noOfCards == 2) {
            if ($cards[0]->getValue() == $cards[01]->getValue()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Function for computer rule (always play if handvalue < 17)
     * @return bool
     */
    public function computerRules(CardHand $cardHand): bool
    {
        // Add best value to cardhand
        $bestValue = $this->getHighestValue($cardHand);
        $cardHand->setPoints($bestValue);
        // Return bool if computer is finished or not
        $handValues = $this->countHand($cardHand);
        if ($this->softBlackjack($cardHand)) {
            return true;
        } elseif ($handValues[0] < 17 or $handValues[1] < 17) {
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
     * @param CardHand $cardHand
     * @return int
     */
    public function getHighestValue(CardHand $cardHand): int
    {
        $handValues = $this->countHand($cardHand);
        $maxValue = $handValues[0];
        if($handValues[1] <= 21 && $handValues[1] > $maxValue) {
            $maxValue = $handValues[1];
        }
        return $maxValue;
    }

    /**
     * Function to calculate who is the winner
     * @param PlayerBlackjack $player
     * @param CardHand $computer
     */
    public function findWinner(PlayerBlackjack $player, CardHand $computer): void
    {
        $playerHands = $player->getHands();
        $computerOptions = $this->checkAllRules($computer);
        foreach ($playerHands as $hand) {
            $playerOptions = $this->checkAllRules($hand);
            if ($playerOptions["blackjack"] !== $computerOptions["blackjack"]) {
                $outcome = $playerOptions["blackjack"] ? "win" : "lose";
                $hand->setOutcome($outcome);
            } elseif ($playerOptions["bust"] !== $computerOptions["bust"]) {
                $outcome = $playerOptions["bust"] ? "lose" : "win";
                $hand->setOutcome($outcome);
            } elseif ($hand->getPoints() !== $computer->getPoints()) {
                $outcome = $hand->getPoints() > $computer->getPoints() ? "win" : "lose";
                $hand->setOutcome($outcome);
            }
        }
    }
}
