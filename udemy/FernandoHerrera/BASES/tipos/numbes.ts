(() => {
  let avenger;

  console.log(avenger);
  const villians: number = 20;

  if (avenger < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  /*en javascript se puede hacer esto, pero en typescript no se puede
    en javascript mostraria "Nos salvamos" 
    en typescript da tipos/numbes.ts:7:7 - error TS18048: 'avenger' is possibly 'undefined'.
  */
})();
