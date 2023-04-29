<?php

namespace App\Blackjack;

use App\Card\CardHand;

/**
 * Class for blackjack player
 */
class PlayerBlackjack
{
    /** @var array<CardHand> $hands Hold all hands possible for player */
    private array $hands = [];

    /** @var int $totMoney Is the amount a player has to bet, starts with 100 */
    private int $totMoney = 100;

    /**
     * Method to add a cardHand to the player
     *
     * @param CardHand $cardHand Hand to add to player
     */
    public function addCardHand(CardHand $cardHand): void
    {
        $this->hands[] = $cardHand;
    }

    /**
     * Method to get all cardHands for player
     *
     * @return array<CardHand>
     */
    public function getHands(): array
    {
        return $this->hands;
    }

    /**
     * Method to "reset" a players hands, making it to an empty array.
     *
     */
    public function resetHands(): void
    {
        $this->hands = [];
    }

    /**
     * Method to split the players hand
     */
    public function splitHand(): void
    {
        $bet = $this->currentHand()->getBet();
        $money = $this->getMoney();

        $cardHand = new CardHand();
        $card = $this->currentHand()->removeLast();
        $cardHand->addCard($card);
        $cardHand->setBet($bet);
        $this->setMoney($money - $bet);
        $this->hands[] = $cardHand;
    }

    /**
     * Method to get the current hand for the player
     *
     * @throws NoHandsLeftException when there are no hands or no hands left to play
     *
     * @return CardHand
     */
    public function currentHand(): CardHand
    {
        $allHands = $this->hands;
        foreach ($allHands as $hand) {
            $isDone = $hand->isDone();
            if (!$isDone) {
                return $hand;
            }
        }
        throw new NoHandsLeftException();
    }

    /**
     * Method to get property totMoney
     *
     * @return int
     */
    public function getMoney(): int
    {
        return $this->totMoney;
    }

    /**
     * Method to set property totMoney
     *
     * @param int $money The value to set property to
     */
    public function setMoney(int $money): void
    {
        $this->totMoney = $money;
    }

    /**
     * Method to get total bet for player
     *
     * Method goes through all playerhands and sums up all the bets.
     * Since a player can have serveral hands, the betting is on each hand.
     *
     * @return int
     */
    public function getTotalBet(): int
    {
        $totalBet = 0;
        foreach ($this->hands as $hand) {
            $totalBet += $hand->getBet();
        }
        return $totalBet;
    }
}
