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
var ageOfPerson = 20;
var isAdult = ageOfPerson >= 18;
var greeting;
//Podemos inicializar arrays y objetos con tipos específicos
var nameList = ["Alice", "Bob", "Charlie"];
//otra manera
var nameList2 = ["Alice", "Bob", "Charlie"];
var person = {
    name: nameList[0],
    age: ageOfPerson,
};
// Tipo 'any' permite asignar cualquier tipo de valor
// Evitar su uso cuando sea posible
var response = "Hola";
response = 42; // No hay error, pero no es recomendable usar 'any'
greeting = "Hello, you are ".concat(isAdult ? "an adult" : "not an adult", ".");
console.log(greeting);
function greetingPerson(name, age) {
    console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
}
// Uso de 'unknown' para mayor seguridad
var response2 = "Hola Mundo";
if (typeof response2 === "string") {
    console.log(response2.toUpperCase());
}
var response3 = null; // Tipo 'any' implícito
var response4 = undefined;
// Diferencia entre null y undefined:
// - null: Valor asignado explícitamente que representa la ausencia intencional de un valor
// - undefined: Valor por defecto de variables no inicializadas, representa ausencia no intencional
//Combinacion de tipos
var response5;
response5 = "Hola";
response5 = 42; // Ambas asignaciones son válidas
var response6;
response6 = "Hola";
response6 = 100; // Ambas asignaciones son válidas
//Type Assertions
var someValue = "Esto es una cadena de texto";
// Usando type assertion para indicar que someValue es una cadena
var strLength = someValue.length;
var someValueUpperCase = someValue.toUpperCase();
console.log("Longitud de la cadena: ".concat(strLength));
console.log("Cadena en may\u00FAsculas: ".concat(someValueUpperCase));
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
