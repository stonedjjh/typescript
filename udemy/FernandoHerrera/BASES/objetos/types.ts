(() => {
  //Usamos la palabra reservada Type para definir un nuevo tipo de dato
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  //luego usamos el tipo Hero para definir el objeto literal
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
