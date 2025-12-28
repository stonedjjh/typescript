# Automatización con package.json (Scripts)

El archivo `package.json` es fundamental en proyectos Node.js y TypeScript. Permite definir **scripts** personalizados que automatizan tareas comunes, como la compilación de código (`tsc`) y la ejecución de archivos, simplificando el flujo de trabajo con comandos sencillos de `npm`.

---

## Configuración Básica

Para poder usar estos scripts, el entorno debe estar inicializado y tener TypeScript instalado:

1.  **Inicializar el proyecto:**

    ```bash
    npm init -y
    ```

    Esto crea el archivo `package.json` con la configuración por defecto.

2.  **Instalar TypeScript:**
    ```bash
    npm install typescript --save-dev
    ```

---

## Estructura de Scripts y Ejemplos

En la sección `"scripts"`, podemos definir comandos genéricos para el proyecto completo o comandos específicos para ejecutar archivos individuales.

### 1. Comandos de Estudio Específicos

Tu repositorio utiliza scripts específicos para compilar y ejecutar archivos de ejemplo individuales.

**Ejemplo de tu configuración actual:**

```json
"scripts": {
  "start:types": "tsc basics/types.ts --outdir dist/ && node dist/types.js",
  "start:enums": "tsc estructuras_de_datos/enums.ts --outdir dist/ && node dist/enums.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}

```

### Uso de estos comandos

| Script              | Comando ejecutado                                                      | Descripción                                                                     |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| npm run start:types | tsc basics/types.ts --outdir dist/ && node dist/types.js               | Compila basics/types.ts a dist/types.js y lo ejecuta con Node.js.               |
| npm run start:enums | tsc estructuras_de_datos/enums.ts --outdir dist/ && node dist/enums.js | Compila estructuras_de_datos/enums.ts a dist/enums.js y lo ejecuta con Node.js. |

### Comandos Genéricos (Recomendados para proyectos)

| Script | Comando            | Descripción                                                         |
| ------ | ------------------ | ------------------------------------------------------------------- |
| build  | tsc                | Compila todos los .ts según tsconfig.json (salida típica en dist/). |
| start  | node dist/index.js | Ejecuta la aplicación ya compilada (entrada en dist/index.js).      |

Ejecución: los scripts se ejecutan con `npm run <script>`. El script `start` puede ejecutarse con `npm start`.
