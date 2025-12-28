# Tipos de datos en Typescript

## Assertion

TypeScript permite afirmar un tipo específico para una variable cuando el desarrollador tiene más conocimiento sobre el tipo que el compilador. Esto se conoce como "type assertion" o "aserción de tipo".

```typescript
let valorDesconocido: any = "Hola, TypeScript!";
let longitudDelString: number = (valorDesconocido as string).length;
console.log(longitudDelString); // Salida: 18
```
