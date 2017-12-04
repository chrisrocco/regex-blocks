import {anyOf, capture, group, regex, str, space, word} from "../src/factories";

describe('Grouping', () => {

    it('capture groups', () => {
        let output = regex()
            .concat(capture(word().oneOrMore()))
            .concat(str('@example.com'))
            .fullMatch()
            .compile();

        let match = output.exec('chris@example.com');
        expect(match).toBeTruthy();
        if (!match) return;
        expect(match[1]).toEqual('chris');
    });

    it('non-capture groups', () => {
        let regexp = regex()
            .concat( group(str('chris')).oneOrMore() )
            .compile();

        let match = regexp.exec('chris');
        expect(match).toBeTruthy();
        if(!match) return;
        expect(match.length).toBeLessThan(2);
    });

    it('nested grouping', () => {
        let regexp = regex(
            str('i '),
            anyOf(
                group(
                    str('ate '),
                    anyOf(
                        str('tacos'),
                        str('pasta'),
                        str('chicken')
                    )
                ),
                group(
                    str('went to '),
                    anyOf(
                        str('the mall'),
                        str('New Orleans'),
                        str('the gym')
                    )
                )
            ),
            str(' yesterday')
        ).compile();

        expect('i ate tacos yesterday').toMatch(regexp);
        expect('i went to New Orleans yesterday').toMatch(regexp);
        expect('i ate the gym yesterday').not.toMatch(regexp);
    })

});