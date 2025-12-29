(() => {
  // Function flecha que recibe tres números y retorna su suma
  const sumarNumeros = (a: number, b: number, c: number): number => a + b + c;

  // Función flecha que recibe un nombre y retorna un saludo
  const greet = (name: string): string => `Hola ${name}`;

  // Función flecha que no recibe parámetros y retorna un string
  const saveTheWorld = (): string => "El mundo está salvado!";

  // podemos asignar el tipo Function a una variable
  let myfunction: Function;

  /*
    myfunction = 10; // Error: Type 'number' is not assignable to type 'Function'
    tambien podemos definir los tipos de retornos de las funciones
    const myfunction: (a:number, b:number, c:number) => number;
    si fuera una función que recibe un string y retorna un string
    const myfunction: (name:string) => string;
    si fuera una función que no recibe parámetros y retorna un string
    const myfunction: () => string;
  */

  myfunction = sumarNumeros;
  console.log(myfunction(1, 2, 3));

  myfunction = greet;
  console.log(myfunction("Stone"));

  myfunction = saveTheWorld;
  console.log(myfunction());
})();
