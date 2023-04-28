<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\CardHand;

/**
 * Test cases for class RulesBlackjack
 */
class RulesBlackjackTest2 extends TestCase
{
    /**
     * Test for finding winner when computer wins
     */
    public function testFindWinner(): void
    {
        // Set up for player
        // Cards (total 16)
        $stubSix = $this->createStub(Card::class);
        $stubSix->method("getValue")->willReturn(6); // six = 6
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        // Hand, need an actual instance to control outcome
        $hand = new CardHand();
        $hand->addCards([$stubSix, $stubKing]);
        // Player
        $player = $this->createStub(PlayerBlackjack::class);
        $player->method("getHands")->willReturn([$hand]);

        // Set up for computer
        // Cards (total 20 with two tens)
        $stubTen = $this->createStub(Card::class);
        $stubTen->method("getValue")->willReturn(10); // ten = 10
        // Create a mock instance of CardHand for the computer
        $computer = $this->createStub(CardHand::class);
        $computer->method("cardsInHand")->willReturn(2); // 2 cards in han
        $computer->method("getCards")->willReturn([$stubTen, $stubTen]);
        $computer->method("getPoints")->willReturn(20); // value of two tens = 20

        $rulesBlackjack = new RulesBlackjack();
        $rulesBlackjack->findWinner($player, $computer);
        $exp = "lose";
        $res = $hand->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test for finding winner, player has two hands one that wins and one that loses
     */
    public function testFindWinnerTwoHands(): void
    {
        // Stub cards setup
        $stubFive = $this->createStub(Card::class);
        $stubFive->method("getValue")->willReturn(5); // five = 5
        $stubNine = $this->createStub(Card::class);
        $stubNine->method("getValue")->willReturn(9); // nine = 9
        $stubTen = $this->createStub(Card::class);
        $stubTen->method("getValue")->willReturn(10); // ten = 10
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13

        // Set up for player
        // Hand, need an actual instance to control outcome
        $handOne = new CardHand();
        $handTwo = new CardHand();
        $handOne->addCards([$stubNine, $stubKing]); // Total value of 19
        $handTwo->addCards([$stubFive, $stubKing, $stubKing]); // Hand bust
        // Player
        $player = $this->createStub(PlayerBlackjack::class);
        $player->method("getHands")->willReturn([$handOne, $handTwo]);

        // Set up for computer
        $computer = $this->createStub(CardHand::class);
        $computer->method("cardsInHand")->willReturn(2); // 2 cards in han
        $computer->method("getCards")->willReturn([$stubNine, $stubNine]); // Total value 18
        $computer->method("getPoints")->willReturn(18); // value of two nines = 18

        $rulesBlackjack = new RulesBlackjack();
        $rulesBlackjack->findWinner($player, $computer);

        $exp = "win";
        $res = $handOne->getOutcome();
        $this->assertEquals($exp, $res);
        $exp = "lose";
        $res = $handTwo->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test for finding winner when player has two hand and one is blackjack
     */
    public function testFindWinnerTwoHandsBlackjack(): void
    {
        // Stub cards setup
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubTen = $this->createStub(Card::class);
        $stubTen->method("getValue")->willReturn(10); // ten = 1
        $stubNine = $this->createStub(Card::class);
        $stubNine->method("getValue")->willReturn(9); // nine = 9

        // Set up for player
        // Hand, need an actual instance to control outcome
        $handOne = new CardHand();
        $handTwo = new CardHand();
        $handOne->addCards([$stubAce, $stubTen]); // blackjack
        $handTwo->addCards([$stubTen, $stubNine]); // 19
        // Player
        $player = $this->createStub(PlayerBlackjack::class);
        $player->method("getHands")->willReturn([$handOne, $handTwo]);

        // Set up for computer
        $computer = $this->createStub(CardHand::class);
        $computer->method("cardsInHand")->willReturn(2); // 2 cards in hand
        $computer->method("getCards")->willReturn([$stubAce, $stubTen]);
        $computer->method("getPoints")->willReturn(21);

        $rulesBlackjack = new RulesBlackjack();
        $rulesBlackjack->findWinner($player, $computer);

        $exp = "draw";
        $res = $handOne->getOutcome();
        $this->assertEquals($exp, $res);

        $exp = "lose";
        $res = $handTwo->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test for finding winner when computer busts
     */
    public function testFindWinnerComputerBust(): void
    {
        // Stub cards setup
        $stubFive = $this->createStub(Card::class);
        $stubFive->method("getValue")->willReturn(5); // five = 5
        $stubTen = $this->createStub(Card::class);
        $stubTen->method("getValue")->willReturn(10); // ten = 10
        $stubNine = $this->createStub(Card::class);
        $stubNine->method("getValue")->willReturn(9); // nine = 9

        // Set up for player
        // Hand, need an actual instance to control outcome
        $hand = new CardHand();
        $hand->addCards([$stubNine, $stubTen]); // 19
        // Player
        $player = $this->createStub(PlayerBlackjack::class);
        $player->method("getHands")->willReturn([$hand]);

        // Set up for computer
        $computer = $this->createStub(CardHand::class);
        $computer->method("cardsInHand")->willReturn(2); // 2 cards in hand
        $computer->method("getCards")->willReturn([$stubFive, $stubTen, $stubNine]);
        $computer->method("getPoints")->willReturn(24);

        $rulesBlackjack = new RulesBlackjack();
        $rulesBlackjack->findWinner($player, $computer);

        $exp = "win";
        $res = $hand->getOutcome();
        $this->assertEquals($exp, $res);
    }
}
