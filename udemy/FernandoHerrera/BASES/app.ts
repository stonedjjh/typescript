//Tarea ejercicio # 1 Módulo 3
(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum Fuerza {
    fuerzaAcuaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
  }
  const fuerzaFlash: number = Fuerza.fuerzaFlash;
  const fuerzaSuperman: number = Fuerza.fuerzaSuperman;
  const fuerzaBatman: number = Fuerza.fuerzaBatman;
  const fuerzaAcuaman: number = Fuerza.fuerzaAcuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  //const largoDelPoder: number = parseInt(poder.length);
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
