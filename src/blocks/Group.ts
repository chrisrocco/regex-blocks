
import {Block} from "./Block";

class Group extends Block {

    isCapturing: boolean = false;
    blocks: Block[] = [];

    constructor(blocks: Block[] = []){
        super();
        this.blocks = blocks;
    }

    concat( block: Block ){
        this.blocks.push(block);
    }

    capture() {
        this.isCapturing = true;
        return this;
    }

    nonCapturing(){
        this.isCapturing = false;
        return this;
    }

    toString(): string {
        let blockStr = '';
        this.blocks.forEach( blk => blockStr += blk.toString() );
        if(!this.isCapturing && !this.quantifier)
            return blockStr;
        return this.addModifiers('(' + this.innerModifier() + blockStr + ')');
    }

    protected innerModifier(): string {
        return (this.isCapturing)? '' : '?:';
    }

}

export { Group }