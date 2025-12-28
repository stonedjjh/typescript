# Mapped Types

Los Mapped Types en TypeScript son una poderosa característica que permite crear nuevos tipos basados en tipos existentes mediante la transformación de sus propiedades. Esto es especialmente útil cuando se desea aplicar modificaciones uniformes a todas las propiedades de un tipo.

```typescript
type OriginalType = {
  name: string;
  age: number;
  isActive: boolean;
};
type ReadonlyType = {
  readonly [K in keyof OriginalType]: OriginalType[K];
};
```

En este ejemplo, `ReadonlyType` es un nuevo tipo que tiene las mismas propiedades que `OriginalType`, pero todas las propiedades son de solo lectura (`readonly`). La sintaxis `[K in keyof OriginalType]` itera sobre todas las claves del tipo original y aplica la transformación deseada.

### Ejemplo práctico

```typescript
type User = {
  id: number;
  username: string;
  email: string;
};
type PartialUser = {
  [K in keyof User]?: User[K];
};
const updateUser = (user: PartialUser) => {
  // Lógica para actualizar el usuario
};
updateUser({ username: "newUsername
" });
```

En este ejemplo, `PartialUser` es un tipo que permite que todas las propiedades de `User` sean opcionales. Esto es útil para funciones como `updateUser`, donde solo se desea actualizar algunas propiedades del usuario.

### Usos comunes de Mapped Types

- **Readonly**: Crear tipos con propiedades de solo lectura.
- **Partial**: Crear tipos donde todas las propiedades son opcionales.
- **Required**: Crear tipos donde todas las propiedades son obligatorias.
- **Record**: Crear tipos que mapean claves a valores específicos.

```typescript
type RequiredType = {
  [K in keyof OriginalType]-?: OriginalType[K];
};
type RecordType = Record<string, number>;
```

En resumen, los Mapped Types son una herramienta flexible y poderosa en TypeScript que permite transformar tipos de manera eficiente y reutilizable.

```typescript
type OriginalType = {
  name: string;
  age: number;
  isActive: boolean;
};
type ReadonlyType = {
  readonly [K in keyof OriginalType]: OriginalType[K];
};
type PartialType = {
  [K in keyof OriginalType]?: OriginalType[K];
};
type RequiredType = {
  [K in keyof OriginalType]-?: OriginalType[K];
};
type RecordType = Record<string, number>;
```
