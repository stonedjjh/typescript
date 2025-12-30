(() => {

class Avenger {
    constructor (
        public name: string,
        public team: string,
        public realName?: string
    ){
        console.log('Constructor Avenger llamado');
    }

    protected getFullname() : string {
        return `${ this.name } - ${ this.realName }`;
    }  
    
    get fullName(): string {
        return `${ this.name } ${ this.realName }`;
    }

    set nameSetter( name: string ) {
        this.name = name;
    }
}

class Xmen extends Avenger {

    constructor(
        public isMutant: boolean = true,
        name: string,
        team: string,
        realName?: string
        
    ){
        super( name, team, realName );
        console.log('Constructor Xmen llamado');
    }
    
    public getFullnameFromXmen() : string { 
        return super.getFullname();
    }   
}

const wolverine = new Xmen(true, 'Wolverine', 'Xmen', 'Logan');
console.log( wolverine );
console.log( wolverine.getFullnameFromXmen() );
console.log( wolverine.fullName );
wolverine.nameSetter = 'New name for Wolverine';
console.log( wolverine.fullName );

})()