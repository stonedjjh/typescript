namespace databaseEntities {
  /* Definición de clases relacionadas con entidades de la base de datos 
     la palabra reservada export se utiliza para hacer que las clases sean accesibles
    fuera del namespace */
  export class User {
    constructor(public id: number, public name: string) {}
  }
  export class Product {
    constructor(public id: number, public title: string) {}
  }
}

const newUser = new databaseEntities.User(1, "John Doe");
const newProduct = new databaseEntities.Product(101, "Laptop");
console.log(`User: ${newUser.name}, Product: ${newProduct.title}`);
