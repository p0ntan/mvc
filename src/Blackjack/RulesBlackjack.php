<?php

namespace App\Blackjack;

use App\Card\Card;
use App\Card\CardHand;

/**
 * Class for all the blackjack-rules
 */
class RulesBlackjack
{
    /**
     * Method to check the rules for each hand
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return array<mixed> with rules and booleans for certain rules
     */
    public function checkAllRules(CardHand $cardHand): array
    {
        // Check all rules, give back array with rules to use
        $rules = [
            "blackjack" => $this->blackjack($cardHand),
            "softBlackjack" => $this->softBlackjack($cardHand),
            "bust" => $this->bust($cardHand),
            "doubleDown" => $this->doubleDown($cardHand),
            "split" => $this->split($cardHand)
        ];
        $bestValue = $this->getHighestValue($cardHand);
        $cardHand->setPoints($bestValue);
        return $rules;
    }

    /**
     * Method to see if hand has blackjack (21 on first give)
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if blackjack
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
     * Method to see if there is a bust (over 21)
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if bust
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
     * Method to see if hand is 21 (soft blackjack)
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if hand is 21
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
     * Method to see if it's possible to split hands
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if it's possible to split
     */
    private function split(CardHand $cardHand): bool
    {
        $noOfCards = $cardHand->cardsInHand();
        $cards = $cardHand->getCards();
        if ($noOfCards == 2) {
            if ($cards[0]->getValue() == $cards[1]->getValue()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Method to see if it's possible to split hands
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if possible to doubledown
     */
    private function doubleDown(CardHand $cardHand): bool
    {
        $noOfCards = $cardHand->cardsInHand();
        if ($noOfCards == 2) {
            return true;
        }
        return false;
    }

    /**
     * Method for computer rule (always play if handvalue < 17)
     *
     * @param CardHand $cardHand The hand to check rules for
     *
     * @return bool True if computer is finished (hand >= 17)
     */
    public function computerRules(CardHand $cardHand): bool
    {
        // Add best value to cardhand
        $bestValue = $this->getHighestValue($cardHand);
        $cardHand->setPoints($bestValue);
        // Return bool if computer is finished or not
        $handValues = $this->countHand($cardHand);
        if ($handValues[0] < 17 && $handValues[1] > 21) {
            return false;
        } elseif ($handValues[0] < 17 && $handValues[1] < 17) {
            return false;
        }
        return true;
    }

    /**
     * Method to count value for a blackjack-hand
     *
     * A cardHand can have two different values if there is an ace or more in the hand.
     * This method returns an array that can show the two different values.
     *
     * @param CardHand $cardHand The hand to count
     *
     * @return array<int> With the possible points
     */
    private function countHand(CardHand $cardHand): array
    {
        // Two sums to control if an ace is in the hand
        $totalValue = 0;
        $totalValue2 = 0;
        $aceCount = 0; // To keep track of nr of aces in hand
        $allCards = $cardHand->getCards();
        foreach ($allCards as $card) {
            $cardValue = $this->updateValue($card);
            if ($cardValue == 1) {
                $aceCount += 1;
                $totalValue += 1;
                $totalValue2 += 11;
                continue;
            }
            $totalValue += $cardValue;
            $totalValue2 += $cardValue;
        }
        // Adjusting highest hand if there are multiple aces in hand
        while ($aceCount > 1 && $totalValue2 > 21) {
            $totalValue2 -= 10;
            $aceCount -= 1;
        }

        return [$totalValue, $totalValue2];
    }

    /**
     * Method to give the correct "blackjack"-value for a card.
     *
     * @param Card $card Card to check value of
     *
     * @return int With the correct blackjack-value
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
     * Method to get highets "valid" value (<= 21)
     *
     * If there are two different values, the highets under 21 will be returned.
     * If both values are over 21 then the lowest value will be returned.
     *
     * @param CardHand $cardHand Hand to get value from
     *
     * @return int With the highest value
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
     * Method to calculate who is the winner
     *
     * @param PlayerBlackjack $player
     * @param CardHand $computer
     */
    public function findWinner(PlayerBlackjack $player, CardHand $computer): void
    {
        $playerHands = $player->getHands();

        foreach ($playerHands as $hand) {
            $outcome = $this->decideOutcome($hand, $computer);
            $hand->setOutcome($outcome);
        }
    }

    /**
     * Private helper method to calculate who is the winner
     *
     * @param CardHand $hand
     * @param CardHand $computer
     * @return string with the result for the hand
     */
    private function decideOutcome(
        CardHand $hand,
        CardHand $computer
    ): string {
        $playerOptions = $this->checkAllRules($hand);
        $computerOptions = $this->checkAllRules($computer);

        if ($playerOptions["blackjack"] !== $computerOptions["blackjack"]) {
            return $playerOptions["blackjack"] ? "win" : "lose";
        } elseif ($playerOptions["bust"]) {
            return "lose";
        } elseif ($computerOptions["bust"]) {
            return "win";
        } elseif ($hand->getPoints() !== $computer->getPoints()) {
            return $hand->getPoints() > $computer->getPoints() ? "win" : "lose";
        }
        return "draw";
    }
}
