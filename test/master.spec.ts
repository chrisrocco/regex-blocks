import {anyOf, regex, str, word} from "../src/factories";

describe('Main Test', () => {

    it('Builds a scary ass regular expression', () => {
        let output = regex(
            word().oneOrMore(),
            str('@'),
            word().oneOrMore(),
            anyOf(str('.com'), str('.org'))
        ).compile();

        expect('chrisrocco7@gmail.com').toMatch(output);
        expect('chrisrocco7@gmail.org').toMatch(output);
        expect('chrisrocco7@gmail.io').not.toMatch(output);
    });

});