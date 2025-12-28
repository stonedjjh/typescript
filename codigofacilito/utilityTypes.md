# Utility Types

Los Utility Types en TypeScript son tipos genéricos predefinidos que facilitan la manipulación y transformación de otros tipos. Estos tipos son especialmente útiles para crear nuevos tipos basados en tipos existentes sin tener que definirlos manualmente.

## Principales Utility Types

- `Partial<T>`: Hace que todas las propiedades de un tipo sean opcionales.

```typescript
interface Task {
  id: number;
  name: string;
  description: string;
}
function updateTask(task: Partial<Task>) {
  // Lógica para actualizar la tarea
}
```

- `Required<T>`: Hace que todas las propiedades de un tipo sean obligatorias.

```typescript
interface Task {
  id?: number;
  name?: string;
  description?: string;
}
function createTask(task: Required<Task>) {
  // Lógica para crear la tarea
}
```

- `Readonly<T>`: Hace que todas las propiedades de un tipo sean de solo lectura.

```typescript
interface Task {
  id: number;
  name: string;
  description: string;
}
const task: Readonly<Task> = {
  id: 1,
  name: "Learn TypeScript",
  description: "Study the utility types in TypeScript",
};

// task.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

- `Record<K, T>`: Crea un tipo que mapea un conjunto de claves `K` a un tipo `T`.

```typescript
type TaskStatus = "pending" | "in-progress" | "completed";
const taskStatuses: Record<TaskStatus, string> = {
  pending: "Task is pending",
  "in-progress": "Task is in progress",
  completed: "Task is completed",
};
```

Estos son solo algunos ejemplos de los Utility Types disponibles en TypeScript. Hay muchos más, como `Pick<T, K>`, `Omit<T, K>`, `Exclude<T, U>`, entre otros, que permiten una gran flexibilidad al trabajar con tipos en TypeScript.
