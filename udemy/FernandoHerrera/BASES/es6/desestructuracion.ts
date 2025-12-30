(()=>{
// desestructuracion.ts


type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
}

const avengers: Avengers= {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500
}

//Aplicamos desestructuracion de objetos
const { poder, vision } = avengers;
console.log(`Poder: ${poder.toFixed(2)}, Vision: ${vision.toUpperCase()}`);


//esto funciona pero visualmente es dificil de leer
const printAvenger = ( avengers: {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
}) =>{
    console.log( avengers.vision );}

//mejor con desestructuracion en los parametros de la funcion
const printAvenger2 = ( {ironman, ...resto}: Avengers) =>{
    console.log( {ironman}, {resto}
        
     );
}

printAvenger(avengers);
printAvenger2(avengers); 

})()