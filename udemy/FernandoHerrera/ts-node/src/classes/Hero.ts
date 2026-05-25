export class Hero {
    constructor(
        public name: string,
        public powerId: string,
        public age: number
    ) {}

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, and I have the power of ${this.powerId}. and i'm ${this.age} years old.`);
    }
}