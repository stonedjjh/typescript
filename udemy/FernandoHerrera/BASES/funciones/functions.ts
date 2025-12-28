(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatSignal = (): string => {
    return "Batiseñal activada";
  };

  console.log(returnName(), activateBatSignal());
  console.log(typeof activateBatSignal);
})();
