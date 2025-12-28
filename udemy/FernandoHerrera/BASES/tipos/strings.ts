(() => {
  const batman: string = "Bruce";
  const superman: string = "Clark";
  const panteraNegra: string = `T'Challa`;

  console.log(` I'm ${batman} `);
  console.log(batman.toUpperCase());
  //console.log( batman[10].toUpperCase()); //en javascript no da error, pero en typescript si

  //con el operador de encadenamiento opcional (?.) evitamos el error;
  console.log(batman[10]?.toUpperCase() || "No esta definido");
})();
