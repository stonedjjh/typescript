/**
 * Demuestra las anotaciones de tipos de TypeScript y el uso básico de tipos.
 *
 * Este archivo cubre:
 * - Tipos primitivos (number, boolean, string)
 * - Declaraciones de tipos de arrays (notación de corchetes y genérico Array<T>)
 * - Tipo Object
 * - Tipo 'any' (debe evitarse cuando sea posible ya que omite la verificación de tipos)
 * - Tipo 'unknown' (alternativa más segura a 'any', requiere verificación de tipos antes de usar)
 * - Anotaciones de tipos en funciones con tipo de retorno void
 * - null vs undefined:
 *   - null: Valor asignado explícitamente que representa la ausencia intencional de cualquier valor de objeto
 *   - undefined: Valor por defecto para variables no inicializadas, representa ausencia no intencional de valor
 *
 * @remarks
 * El tipo 'any' debe evitarse ya que anula el propósito de la seguridad de tipos de TypeScript.
 * Prefiere 'unknown' cuando el tipo sea realmente desconocido, ya que obliga a verificar el tipo antes de usarlo.
 */
let ageOfPerson: number = 20;
let isAdult: boolean = ageOfPerson >= 18;
let greeting: string;
//Podemos inicializar arrays y objetos con tipos específicos
let nameList: string[] = ["Alice", "Bob", "Charlie"];
//otra manera
let nameList2: Array<string> = ["Alice", "Bob", "Charlie"];
let person: Object = {
  name: nameList[0],
  age: ageOfPerson,
};

// Tipo 'any' permite asignar cualquier tipo de valor
// Evitar su uso cuando sea posible
let response: any = "Hola";
response = 42; // No hay error, pero no es recomendable usar 'any'

greeting = `Hello, you are ${isAdult ? "an adult" : "not an adult"}.`;
console.log(greeting);

function greetingPerson(name: string, age: number): void {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

// Uso de 'unknown' para mayor seguridad
let response2: unknown = "Hola Mundo";
if (typeof response2 === "string") {
  console.log(response2.toUpperCase());
}

let response3 = null; // Tipo 'any' implícito
let response4 = undefined;

// Diferencia entre null y undefined:
// - null: Valor asignado explícitamente que representa la ausencia intencional de un valor
// - undefined: Valor por defecto de variables no inicializadas, representa ausencia no intencional

//Combinacion de tipos

let response5: string | number;
response5 = "Hola";
response5 = 42; // Ambas asignaciones son válidas

/*
 * ahora que pasaria si tenemos una gran cantidad de variables que
 * tiene esta combinacion de tipos, seria tedioso estar escribiendo
 * el mismo tipo una y otra vez, para estos casos podemos usar los
 * alias de tipos
 */

type StringOrNumber = string | number;

let response6: StringOrNumber;
response6 = "Hola";
response6 = 100; // Ambas asignaciones son válidas

//Type Assertions

let someValue: unknown = "Esto es una cadena de texto";

// Usando type assertion para indicar que someValue es una cadena
let strLength: number = (someValue as string).length;
let someValueUpperCase: string = (someValue as string).toUpperCase();

console.log(`Longitud de la cadena: ${strLength}`);
console.log(`Cadena en mayúsculas: ${someValueUpperCase}`);

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const context = canvas.getContext("2d");
