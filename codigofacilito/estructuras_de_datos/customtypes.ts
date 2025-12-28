type Person3 = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person3 = {
  name: "Alice",
  code: 123,
};

type ServiceResponse = string | number | boolean | undefined;
