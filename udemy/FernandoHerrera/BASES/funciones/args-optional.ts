(() => {
  /* Funciones con argumentos opcionales
        para identificar un argumento como opcional
        se agrega un signo de interrogación "?" después del nombre del argumento
    */
  const fullName = (firsName: string, lastName?: string): string => {
    //usamos el operador OR para asignar un valor por defecto si lastName es undefined
    return `${firsName} ${lastName || "No last name"}`;
  };

  const name = fullName("Tony");
  console.log({ name });
})();
