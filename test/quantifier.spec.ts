import {RegularExpression} from "../src/RegularExpression";
import {StringLiteral, word} from "../src/blocks/character/CharacterLiteral";
import {ONE_OR_MORE} from "../src/Quantifier";

describe('quantifiers test', () => {

    it('Builds a regular expression with quantifiers', () => {
        let regex = new RegularExpression();
        let body = word();
        body.setQuantifier(ONE_OR_MORE);
        regex.add(body);
        regex.add(new StringLiteral('.com'));
        let res = regex.compile();

        expect('example.com').toMatch(res);
        expect('example.org').not.toMatch(res);
    });

});