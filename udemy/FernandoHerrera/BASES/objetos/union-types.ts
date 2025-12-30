(() => {
  //Usamos la palabra reservada Type para definir un nuevo tipo de dato
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Stone";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Clark Kent",
    age: 30,
    powers: ["Super Strength", "Flight"],
    //Este this es solo para darle contexto al método getName
    //es decir que this dentro del método se refiere al objeto Hero
    //es puramente estructural para el compilador.
    getName(this: Hero) {
      return this.name;
    },
  };

  console.log(typeof myCustomVariable);
  //Esto retornará Object porque los tipos personalizados
  //son tratados como objetos en tiempo de ejecución
})();
