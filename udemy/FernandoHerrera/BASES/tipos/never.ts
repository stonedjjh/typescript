(() => {
  /* función que nunca llega a un return
   es decir, nunca termina su ejecución de forma correcta
   o lo que es lo mismo no puede tener un punto final alcanzable
   */
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc("auxilio");
})();
