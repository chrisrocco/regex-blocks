import {anyOf, digit, regex, str, word} from "../src/factories";

describe('Lookaround', () => {

    it('supports lookahead', () => {

        // numbers followed by abc
        let regexp = regex(
            digit().oneOrMore().whenFollowedBy(str('abc'))
        ).startsWith().compile();

        expect('25abc').toMatch(regexp);
        expect('12363452546abc').toMatch(regexp);
        expect('abc89').not.toMatch(regexp);
        expect('13-abc').not.toMatch(regexp);
    });

    it('supports lookbehind', () => {
        // sandwiched in between aaa
        let regexp = regex(
            anyOf(word(), digit())
                .whenFollowedBy(str('aaa'))
                .whenFollowing(str('aaa'))
                .oneOrMore()
                .lazy()
        ).compile();

        expect('aaa123aaa').toMatch(regexp);
        expect('aaa_aaa').toMatch(regexp);
        expect('aaa123').not.toMatch(regexp);
        expect('aaaaaa').not.toMatch(regexp);
    })

});