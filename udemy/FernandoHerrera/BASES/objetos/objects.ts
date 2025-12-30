(() => {
  //objeto literal
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super Speed", "travel through time"],
  };

  /*
   No podemos agregar mas propiedades al objeto
   flash = {
   name2 = "Otro nombre" //esto dara error
   }
  */

  flash = {
    name: "Clark Kent",
    age: 30,
    powers: ["Super Strength", "Flight"],
    getName() {
      return this.name;
    },
  };

  console.log(flash);
})();
