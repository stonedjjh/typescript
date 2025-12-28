export const PI = 3.14159;

export interface User {
  id: string;
  name: string;
}

export const generatedId = () => {
  return Math.floor(Math.random() * 100);
};
