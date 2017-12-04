import {anyOf, backRef, regex, str} from "../src/factories";

describe('Back-References', () => {

    it("Supports back references", () => {
        let regexp = regex(
            anyOf(str('a'), str('b')).capture(),
            str('--'),
            backRef(1)
        ).compile();

        expect('a--a').toMatch(regexp);
        expect('a--b').not.toMatch(regexp);
        expect('c--c').toMatch(regexp);
    });

});