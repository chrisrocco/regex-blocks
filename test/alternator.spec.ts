import {anyOf, regex, str} from "../src/factories";

describe('Alternators', () => {

    it('supports alternators', () => {

        let output = regex()
            .concat(anyOf(
                str('dog'),
                str('fish'),
                str('frog')
            ))
            .compile();

        expect('dog').toMatch(output);
        expect('fish').toMatch(output);
        expect('duck').not.toMatch(output);
    });

});