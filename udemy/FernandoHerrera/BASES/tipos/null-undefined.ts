(() => {
  let nada: undefined = undefined;
  let nulo: null = null;

  /*
  podemos hacer que un valor booleano sea null o undefined
  con la opción --strictNullChecks desactivada en el tsconfig.json
  */

  console.log({ nada, nulo });
})();
