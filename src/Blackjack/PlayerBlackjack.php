<?php

namespace App\Blackjack;

use App\Card\CardHand;

/**
 * Class for blackjack player
 */
class PlayerBlackjack
{
    /** @var array<CardHand> $hands, hold all hands possible for player */
    private array $hands = [];
    private int $totMoney = 100;

    /** Function to add a cardHand to a player */
    public function addCardHand(CardHand $cardHand): void
    {
        $this->hands[] = $cardHand;
    }

    /** Function to get all cardHands for player
     * @return array<CardHand>
     */
    public function getHands(): array
    {
        return $this->hands;
    }

    /** Function to "reset" a players hands */
    public function resetHands(): void
    {
        $this->hands = [];
    }

    /** Function to split a hand */
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
     * @throws NoHandsLeftException when all hands are done
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

    public function getMoney(): int
    {
        return $this->totMoney;
    }

    public function setMoney(int $money): void
    {
        $this->totMoney = $money;
    }

    /** Function to change when all hands are done */
    public function isDone(): bool
    {
        foreach ($this->hands as $hand) {
            if (!$hand->isDone()) {
                return false;
            }
        }
        return true;
    }
}
