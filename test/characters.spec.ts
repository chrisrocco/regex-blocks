import {RegularExpression} from "../src/RegularExpression";
import {StringLiteral, whitespace} from "../src/blocks/character/CharacterLiteral";
import {CharacterSet} from "../src/blocks/character/CharacterSet";

describe('literals test', () => {

    it('Builds a regular expression with only character literals', () => {
        let regex = new RegularExpression();
        regex.add(new StringLiteral('chris'));
        regex.add(whitespace());
        regex.add(new StringLiteral('rocco'));
        let res = regex.compile();

        expect('chris rocco').toMatch(res);
        expect('jon doe').not.toMatch(res);
    });

    it("Supports character sets", () => {
        let regex = new RegularExpression();
        let cs = new CharacterSet('abc');
        cs.isNot = true;
        regex.add(cs);

        expect(regex.toString()).toEqual("^[^abc]$");
    })

});