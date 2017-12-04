import {regex, str, word} from "../src/factories";

describe('quantifiers test', () => {

    it('Builds a regular expression with quantifiers', () => {

        let output = regex(
            word().oneOrMore(),
            str('.com')
        ).compile();

        expect('example.com').toMatch(output);
        expect('example.org').not.toMatch(output);
    });

    it("Supports repetitions", () => {
        let regexp = regex()
            .concat(str('abc').repeat(2,5))
            .fullMatch()
            .compile();

        expect('abc').not.toMatch(regexp);
        expect('abcabcabc').toMatch(regexp);
        expect('abcabcabcabcabcabc').not.toMatch(regexp);
    })

});