import {inSet, regex, str, space} from "../src/factories";

describe('Characters', () => {

    it('Literal tokens', () => {

        let output = regex(str('chris'), space(), str('rocco')).compile();

        expect('chris rocco').toMatch(output);
        expect('jon doe').not.toMatch(output);
    });

    it("Supports character sets", () => {

        let rg = regex(inSet('abc').not()).fullMatch().compile();

        expect('a').not.toMatch(rg);
        expect('d').toMatch(rg);
    });

    it("Escapes special characters", () => {
        expect(str('.').toString()).toEqual('\\.');
    })

});