# Comandos de Typescript

## Compilar un archivo Typescript tsc

Tsc es el compilador de TypeScript (TypeScript Compiler). Su función principal es transformar código TypeScript en JavaScript que los navegadores y entornos como Node.js puedan ejecutar.

**¿Qué hace exactamente?**

Cuando ejecutas:

tsc nombreArchivo.ts

El compilador realiza las siguientes tareas:

- Lee el archivo TypeScript (.ts) que especificaste
  Verifica los tipos

- Revisa que tu código cumpla con las reglas de tipado que definiste

- Transpila el código

- Convierte TypeScript a JavaScript (.js) Genera el archivo de salida

- Crea nombreArchivo.js en el mismo directorio

### Ejemplo práctico

Si tienes este archivo TypeScript:

```typescript
#archivo.ts;
const mensaje: string = "Hola TypeScript";
console.log(mensaje);
```

Al ejecutar tsc archivo.ts, obtendrás:

```javascript
#archivo.js
var mensaje = "Hola TypeScript";
console.log(mensaje);
```

> [!IMPORTANT]
> Detección de errores: Si hay errores de tipo, tsc te los mostrará en la consola, pero igual generará el archivo .js (a menos que configures lo contrario)

**Configuración**: Puedes personalizar cómo funciona tsc usando un archivo **tsconfig.json**

Compilación de múltiples archivos: Ejecutar solo tsc sin argumentos compila todos los archivos según tu configuración

```typescript
// archivo.ts
const mensaje: string = "Hola TypeScript";
console.log(mensaje);
```

```bash
tsc nombreArchivo.ts
```

```javascript
// archivo.js
var mensaje = "Hola TypeScript";
console.log(mensaje);
```
