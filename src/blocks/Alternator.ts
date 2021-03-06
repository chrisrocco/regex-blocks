import {Group} from "./Group";

class Alternator extends Group {

    toString(): string {
        let opts_string: string[] = [];
        this.blocks.forEach( opt => opts_string.push(opt.toString()));
        return this.addModifiers('(' + this.innerModifier() + opts_string.join('|') + ')');
    }

}

export {Alternator}