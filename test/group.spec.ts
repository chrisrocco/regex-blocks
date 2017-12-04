import {RegularExpression} from "../src/RegularExpression";
import {StringLiteral} from "../src/blocks/character/CharacterLiteral";
import {Alternator} from "../src/blocks/Alternator";
import {capture, Group} from "../src/blocks/Group";

describe('groups test', () => {

    it('Builds a regular expression with capture groups', () => {
        let regex = new RegularExpression();
        let group = capture(new Group([ new StringLiteral('captureme') ]));
        regex.add(group);
        regex.add(new StringLiteral('.com'));
        let res = regex.compile();

        let match = res.exec('captureme.com');
        expect(match).toBeTruthy();
        if(!match) return;
        expect(match[1]).toEqual('captureme');
    });

});