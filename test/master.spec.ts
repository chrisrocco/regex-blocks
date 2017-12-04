import {RegularExpression} from "../src/RegularExpression";
import {digit, StringLiteral, word} from "../src/blocks/character/CharacterLiteral";
import {Alternator} from "../src/blocks/Alternator";
import {kleenPlus, optionally} from "../src/Quantifier";
import {Group} from "../src/blocks/Group";

describe('Main Test', () => {

    it('Builds a scary ass regular expression', () => {
        let regex = new RegularExpression();
        regex.add(kleenPlus(word()));
        regex.add(new StringLiteral('@'));
        regex.add(kleenPlus(word()));
        regex.add(new Alternator([
            new StringLiteral('.com'),
            new StringLiteral('.org')
        ]));
        let output = regex.compile();

        console.log(regex.toString());

        expect('chrisrocco7@gmail.com').toMatch(output);
    });

    it('', () => {
        let rg = new RegularExpression();

        rg.add(optionally(new StringLiteral('-')));
        rg.add(kleenPlus(digit()));
        rg.add(optionally(
            new Group([
                new StringLiteral('.'),
                kleenPlus(digit())
            ])
        ));

        console.log(rg.toString())
    })
});