import { printObject, genericFunction } from './generics/generics';


// Ejemplo del uso de la función printObject con diferentes tipos de argumentos
printObject('Hello world');
printObject(123);
printObject(true);

const name:string = 'Daniel';

// Ejemplo del uso de la función genérica genericFunction con diferentes tipos de argumentos

console.log(genericFunction('Hello world').toUpperCase());
console.log(genericFunction(123).toFixed());
console.log(genericFunction(true).valueOf());
console.log(genericFunction(new Date()).getDate ());

