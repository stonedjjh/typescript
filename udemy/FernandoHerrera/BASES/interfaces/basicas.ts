(() => {

  // Interface basics
  //las   interfaces son un contrato que deben cumplir los objetos
  /*
  las interfaces son parecidas a los tipos, pero tienen algunas diferencias
    1. Las interfaces pueden ser extendidas (heredadas) por otras interfaces
    2. Las interfaces pueden ser implementadas por clases
    3. Las interfaces solo describen la forma de un objeto, no pueden describir tipos primitivos o uniones
    4. Las interfaces pueden ser abiertas, es decir, se pueden agregar nuevas propiedades después de su declaración
  */

  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super Speed", "travel through time"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 30,
    powers: ["Super Strength", "Flight"],
    getName() {
      return this.name;
    },
  };

  console.log(flash, superman);

})();


