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
    public function testGetHighestValue(): void
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
    public function testRuleBlackjack(): void
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
    public function testRuleSoftBlackjack(): void
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
    public function testRuleBust(): void
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
    public function testRuleSplit(): void
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubAce]);
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
    public function testComputerRules16(): void
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
    public function testComputerRules18(): void
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
    public function testComputerRulesAces(): void
    {
        // Set up stubs for card and cardhand
        $stubAce = $this->createStub(Card::class);
        $stubAce->method("getValue")->willReturn(1); // acevalue = 1
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubAce, $stubAce, $stubKing]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertFalse($res);
    }

    /**
     * Test for checking computerrules, having a hand > 21
     */
    public function testComputerRulesBust(): void
    {
        // Set up stubs for card and cardhand
        $stubSix = $this->createStub(Card::class);
        $stubSix->method("getValue")->willReturn(6); // six = 6
        $stubKing = $this->createStub(Card::class);
        $stubKing->method("getValue")->willReturn(13); // king = 13
        $cardHand = $this->createStub(CardHand::class);
        $cardHand->method("getCards")->willReturn([$stubSix, $stubKing, $stubKing]);
        $cardHand->method("cardsInHand")->willReturn(3); // 3 cards in hand

        $rulesBlackjack = new RulesBlackjack();
        $res = $rulesBlackjack->computerRules($cardHand);

        $this->assertTrue($res);
    }
}
