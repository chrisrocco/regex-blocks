import {RegularExpression} from "../src/RegularExpression";
import {StringLiteral} from "../src/blocks/character/CharacterLiteral";
import {Alternator} from "../src/blocks/Alternator";

describe('alternators test', () => {

    it('Builds a regular expression with alternators', () => {
        let regex = new RegularExpression();
        let alternator = new Alternator();
        alternator.add(new StringLiteral('chris'));
        alternator.add(new StringLiteral('rocco'));
        regex.add(alternator);
        let res = regex.compile();

        expect('chris').toMatch(res);
        expect('rocco').toMatch(res);
        expect('jon').not.toMatch(res);
    });

});