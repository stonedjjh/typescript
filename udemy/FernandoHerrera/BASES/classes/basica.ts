( () => {

    class Avenger {

        /*Forma 1 de definir atributos en una clase
        private name : string;
        public team : string;
        public realName?  : string;
        // atributo estatico de la clase, compartido por todas las instancias
        static avgAge : number = 35;
        static getAvgAge(){
            return this.name;
        }       
       
        constructor( name : string = 'Antman', team : string = 'Capitan', realName : string = 'Scott Lang' ){
            this.name = name;
            this.team = team;
            this.realName = realName;
        
        }*/

        //Forma 2 de definir atributos en una clase (mas corta)
        static avgAge: number = 35;

        constructor(
            private name: string,
            private team: string,
            public realName?: string
            
        ) {};

        public bio() : string {
            return `${this.name} (${this.team})`;
        }


}

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log( antman );

    console.log( antman.bio() );

    
    //Accediendo a un atributo estatico de la clase, a traves del nombre de la clase
    console.log( Avenger.avgAge );

    
    

})()