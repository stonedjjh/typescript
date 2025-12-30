# tsconfig

El archivo tsconfig.json configura el compilador de TypeScript para un proyecto. Define las opciones de compilación, qué archivos incluir/excluir y cómo generar los artefactos (JS, mapas, declaraciones). Es leído por tsc y por editores/IDEs para ofrecer análisis y autocompletado.

Opciones comunes:

- target: versión de JavaScript que se emitirá (es5, es6/es2015, es2020, ...)
- module: sistema de módulos (commonjs, esnext, amd, ...)
- lib: definiciones de entorno (DOM, ES2019, ...)
- outDir / rootDir: carpeta de salida y raíz del código fuente
- strict: activa varias comprobaciones estrictas (strictNullChecks, noImplicitAny, ...)
- esModuleInterop / allowSyntheticDefaultImports: compatibilidad con módulos CommonJS
- sourceMap: generar .map para depuración
- declaration: generar .d.ts
- include / exclude / files: qué archivos procesar

Ejemplo mínimo:

```json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

Uso básico:

- Compilar todo el proyecto: tsc -p .
- Compilar incremental: tsc --incremental
- Los editores usan tsconfig.json para ofrecer linting y navegación precisa del proyecto.

## Creación

Para crear un tsconfig.json básico, ejecuta:

```bash
tsc --init
```

Esto genera un archivo con muchas opciones comentadas que puedes ajustar según tus necesidades.

## Opciones

Consulta la [documentación oficial](https://www.typescriptlang.org/tsconfig) para una lista completa de opciones y su descripción detallada.

### sourceMap

Tipo: Boolean

Genera archivos .map para facilitar la depuración en navegadores y herramientas que soportan mapas de origen.

### removeComments

Tipo: Boolean

Elimina todos los comentarios del código JavaScript emitido.

### Exclude e Include

Tipo: Array de Strings

- exclude: Lista de patrones de archivos/carpetas que no se deben compilar.

- include: Lista de patrones de archivos/carpetas que se deben compilar.

```TypeScript
//tsconfig.json
"include": [
    "funciones/**/*",
    "objetos/**/*",
    "tipos/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "funciones/temp.ts"
  ]
```

### outFile

Tipo: String

Concatena todos los archivos de salida en un solo archivo JavaScript.

```TypeScript
//tsconfig.json
"outFile": "./dist/app.js"
```

### watch

Tipo: Boolean
Habilita el modo de observación para recompilar automáticamente cuando los archivos fuente cambien.

```TypeScript
//tsconfig.json
"watch": true
```

### target

Tipo: String

Especifica la versión de JavaScript a la que se debe compilar el código TypeScript.

```TypeScript
//tsconfig.json
"target": "es6"
```

### module

Tipo: String

Define el sistema de módulos que se utilizará en el código emitido.

```TypeScript
//tsconfig.json
"module": "commonjs"
```
