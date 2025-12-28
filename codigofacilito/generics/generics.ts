interface MyInterface<T> {
  field: T;
}

const myValue: MyInterface<number> = {
  field: 42,
};
console.log(`The value is: ${myValue.field}`);

class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

//Definimos la clase de tipo numero
const myObject: MyClass<number> = new MyClass(42);

//Definimos la clase de tipo string
const myObject2: MyClass<string> = new MyClass("Daniel");

//Tambien se puede usar en funciones

function getDate<T>(id: string): Promise<T> | void {}

interface UserResponse {
  id: number;
  name: string;
}

interface UserResponseHttp {
  data: UserResponse;
  status: 200;
  code: 1;
}

//usando un generico podemos usar

class HttpResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserResponse => {
  return {
    id: 1,
    name: "Kevin",
  };
};

const myUser2 = fetchUser();
const res = new HttpResponse(myUser2, 200, 1);
console.log(res);

class CRUD<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem() {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const user: UserResponse[] = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "Codigo" },
  { id: 3, name: "Facilito" },
];

const userCRUD: CRUD<UserResponse> = new CRUD(user);
userCRUD.addItem({ id: 4, name: "Typescript" });
console.log(userCRUD.printItems());
