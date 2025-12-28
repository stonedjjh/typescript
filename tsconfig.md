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
