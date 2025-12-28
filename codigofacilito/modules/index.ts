//Se puede asignar un alias a las variables importadas con la palabra reservada 'as'
import { PI, User as Usuario, generatedId } from "./utils.module";

//tambien se puede importat todo el modulo como un objeto
//import * as Utils from "./utils.module";
//luego acceder a sus propiedades como Utils.PI, Utils.User, etc.

const myNumber = 10 * PI;

const myUser: Usuario = { id: generatedId().toString(), name: "Kevin" };
console.log(`My number is ${myNumber}`);
console.log(`User ID: ${myUser.id}, User Name: ${myUser.name}`);
