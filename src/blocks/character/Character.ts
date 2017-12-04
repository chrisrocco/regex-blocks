import {Block} from "../Block";

abstract class Character extends Block{
    abstract toString(): string;
}

export { Character }