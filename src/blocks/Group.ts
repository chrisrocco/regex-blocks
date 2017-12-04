
import {Block} from "./Block";

class Group extends Block {

    isCapturing: boolean = false;
    blocks: Block[] = [];

    constructor(blocks: Block[] = []){
        super();
        this.blocks = blocks;
    }

    add( block: Block ){
        this.blocks.push(block);
    }

    toString(): string {
        let blockStr = '';
        this.blocks.forEach( blk => blockStr += blk.toString() );
        if(!this.isCapturing && !this.quantifier)
            return blockStr;
        return '(' + this.innerModifier() + blockStr + ')' + this.getQuantifierString();
    }

    protected innerModifier(): string {
        return (this.isCapturing)? '' : '?:';
    }

}

let capture = ( group: Group ) => {
    group.isCapturing = true;
    return group;
};

export { Group, capture }