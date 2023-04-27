<?php

namespace App\Blackjack;

use PHPUnit\Framework\TestCase;
use App\Card\Card;
use App\Card\CardHand;

/**
 * Test cases for class RulesBlackjack
 */
class RulesBlackjackTest extends TestCase
{
    /**
     * Test to get the higest value from a cardhand
     */
    public function testGetHighestValue()
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubKing]);

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->getHighestValue($cardHand);
        $exp = 21;

        $this->assertEquals($exp, $res);
    }

    /**
     * Test rules with a blackjack hand
     */
    public function testRuleBlackjack()
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubKing]);
        $cardHand->method("cardsInHand")->willReturn(2); // 2 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $rules = $rulesBlackjack->checkAllRules($cardHand);

        $blackjack = $rules["blackjack"];
        $softBlackjack = $rules["softBlackjack"];
        $bust = $rules["bust"];
        $doubleDown = $rules["doubleDown"];
        $split = $rules["split"];

        $this->assertTrue($blackjack);
        $this->assertTrue($softBlackjack);
        $this->assertFalse($bust);
        $this->assertTrue($doubleDown);
        $this->assertFalse($split);
    }

    /**
     * Test rules with a blackjack hand
     */
    public function testRuleSoftBlackjack()
    {
        // Set up stubs for card and cardhand
        $stubFive = $this->createStub(Card::class);
        $stubFive->method("getValue")->willReturn(5); // five = 5
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $stubSix = $this->createStub(Card::class);
        $stubSix->method("getValue")->willReturn(6); // six = 6
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubFive, $stubKing, $stubSix]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $rules = $rulesBlackjack->checkAllRules($cardHand);

        $blackjack = $rules["blackjack"];
        $softBlackjack = $rules["softBlackjack"];
        $bust = $rules["bust"];
        $doubleDown = $rules["doubleDown"];
        $split = $rules["split"];

        $this->assertFalse($blackjack);
        $this->assertTrue($softBlackjack);
        $this->assertFalse($bust);
        $this->assertFalse($doubleDown);
        $this->assertFalse($split);
    }

    /**
     * Test rules with a hand that is a bust
     */
    public function testRuleBust()
    {
        // Set up stubs for card and cardhand
        $stubQueen = $this->createStub(Card::class);
        $stubQueen->method("getValue")->willReturn(12); // queen = 12
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $stubNine = $this->createStub(Card::class);
        $stubNine->method("getValue")->willReturn(9); // nine = 9
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubQueen, $stubKing, $stubNine]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $rules = $rulesBlackjack->checkAllRules($cardHand);

        $blackjack = $rules["blackjack"];
        $softBlackjack = $rules["softBlackjack"];
        $bust = $rules["bust"];
        $doubleDown = $rules["doubleDown"];
        $split = $rules["split"];

        $this->assertFalse($blackjack);
        $this->assertFalse($softBlackjack);
        $this->assertTrue($bust);
        $this->assertFalse($doubleDown);
        $this->assertFalse($split);
    }

    /**
     * Test all rules method with a hand with two aces
     */
    public function testRuleSplit()
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubAceTwo = $this->createStub(Card::class);
        $stubAceTwo->method("getValue")->willReturn(1); // acevalue = 1
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubAceTwo]);
        $cardHand->method("cardsInHand")->willReturn(2); // 2 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $rules = $rulesBlackjack->checkAllRules($cardHand);

        $blackjack = $rules["blackjack"];
        $softBlackjack = $rules["softBlackjack"];
        $bust = $rules["bust"];
        $doubleDown = $rules["doubleDown"];
        $split = $rules["split"];

        $this->assertFalse($blackjack);
        $this->assertFalse($softBlackjack);
        $this->assertFalse($bust);
        $this->assertTrue($doubleDown);
        $this->assertTrue($split);
    }

    /**
     * Test for checking computerrules, having 16 in hand
     */
    public function testComputerRules16()
    {
        // Set up stubs for card and cardhand
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $stubSix = $this->createStub(Card::class);
        $stubSix->method("getValue")->willReturn(6); // six = 6
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubKing, $stubSix]);
        $cardHand->method("cardsInHand")->willReturn(2); // 2 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertFalse($res);
    }

    /**
     * Test for checking computerrules, having 18 in hand
     */
    public function testComputerRules18()
    {
        // Set up stubs for card and cardhand
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $stubEight = $this->createStub(Card::class);
        $stubEight->method("getValue")->willReturn(8); // eight = 6
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubKing, $stubEight]);
        $cardHand->method("cardsInHand")->willReturn(2); // 2 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertTrue($res);
    }

    /**
     * Test for checking computerrules, having aces to make hand worth < 17 and > 21
     */
    public function testComputerRulesAces()
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubAceTwo = $this->createStub(Card::class);
        $stubAceTwo->method("getValue")->willReturn(1); // acevalue = 1
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubAceTwo, $stubKing]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertFalse($res);
    }

    /**
     * Test for checking computerrules, having a hand > 21
     */
    public function testComputerRulesBust()
    {
        // Set up stubs for card and cardhand
        $stubSix = $this->createStub(Card::class);
        $stubSix->method("getValue")->willReturn(6); // six = 6
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $stubKingTwo = $this->createStub(Card::class);
        $stubKingTwo->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubSix, $stubKing, $stubKingTwo]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertTrue($res);
    }

    /**
     * Test for finding winner when computer wins
     */
    public function testFindWinner()
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
    public function testFindWinnerTwoHands()
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
    public function testFindWinnerTwoHandsBlackjack()
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
    public function testFindWinnerComputerBust()
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
