(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    
    }

    interface Human{
        age: number;
    }

    class Mutant implements Xmen, Human {
        constructor(
            public name: string,
            public realName: string,
            public age: number
        ) {}
        mutantPower( id: number ) : string {
            return this.name + ' - ' + id;
        }
    }
})()