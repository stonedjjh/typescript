(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    // No se puede instanciar una clase abstracta pero si podemos heredar de ella
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Max Eisenhardt');
    
    console.log( wolverine );
    console.log( magneto );

    printName( wolverine );
    printName( magneto );
})()