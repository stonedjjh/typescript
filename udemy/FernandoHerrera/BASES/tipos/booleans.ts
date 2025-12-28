(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;
  //isSuperman = undefinded; esto no se puede realizar

  isSuperman = true && true;

  //isSuperman = (isBatman) ? 'abc':'xyz'; //esto no se puede realizar

  //se usa Propiedad Abreviada de Objeto para imprimir la variable y su valor
  console.log({ isSuperman });
})();
