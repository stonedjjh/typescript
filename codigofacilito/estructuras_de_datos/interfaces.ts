interface Person {
  name: string;
  code: string | number;
  charge: number;
  //al usar el signo de interrogacion hacemos que la propiedad sea opcional
  description?: string;
  sayHello?: () => string;
}

let personInfo: Person = {
  name: nameList[2],
  code: "01",
  charge: 1,
  age: 30,
  //podemos omitir la propiedad opcional
  //description: "This is a sample person object",
};

let anotherPerson: Person = {
  name: nameList[3],
  code: 2,
  charge: 2,
  age: 25,
  sayHello: () => `Hello, my name is ${anotherPerson.name}`,
};

anotherPerson.description?.toUpperCase();
