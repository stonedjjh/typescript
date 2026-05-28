import { powers, type Power } from '../data/powers'

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, and I have the power of ${this.powerId}. and i'm ${this.age} years old.`);
    }

    get power():string{
        return powers.find((power:Power) => power.id === this.powerId)?.desc || 'not found';
    }
}