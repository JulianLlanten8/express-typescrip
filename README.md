# Express TypeScript Starter

Este es un proyecto de plantilla para iniciar un servidor Node.js utilizando Express y TypeScript.

## Descripción

Este repositorio proporciona una configuración básica para construir aplicaciones web del lado del servidor con Express y TypeScript. Incluye:

*   Configuración de TypeScript lista para usar.
*   Servidor Express básico.
*   Scripts para desarrollo (`dev`), compilación (`tsc`), inicio (`start`) y linting (`lint`).
*   Configuración de Nodemon para recarga automática durante el desarrollo.

## Tecnologías Utilizadas

*   [Node.js](https://nodejs.org/)
*   [Express](https://expressjs.com/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [tsx](https://github.com/esbuild-kit/tsx) (para ejecutar TypeScript directamente en desarrollo)
*   [ts-standard](https://github.com/standard/ts-standard) (para linting)

## Requisitos Previos

*   Node.js (v18 o superior recomendado)
*   npm (o yarn)

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/JulianLlanten8/express-typescrip.git
    cd express-typescrip
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

### Desarrollo

Para iniciar el servidor en modo de desarrollo con recarga automática en cada cambio:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

### Linting

Para verificar el estilo del código:

```bash
npm run lint
```

### Compilación

Para compilar el código TypeScript a JavaScript (los archivos resultantes se guardarán en el directorio `build/`):

```bash
npm run tsc
```

### Producción

Para iniciar el servidor usando el código JavaScript compilado:

1.  Asegúrate de haber compilado el código primero:
    ```bash
    npm run tsc
    ```
2.  Inicia el servidor:
    ```bash
    npm start
    ```

## Scripts Disponibles

*   `npm run dev`: Inicia el servidor en modo desarrollo con `tsx`.
*   `npm run lint`: Ejecuta `ts-standard` para verificar el código.
*   `npm run tsc`: Compila el código TypeScript a JavaScript en el directorio `build/`.
*   `npm start`: Ejecuta el servidor desde el código compilado en `build/index.js`.
*   `npm test`: (Script de ejemplo, actualmente no implementado).

## Endpoints

*   `GET /ping`: Responde con `pong`. Útil para verificar si el servidor está activo.
*   `/api/diaries`: (Rutas definidas en `src/routes/diaries.ts`) - Implementa la lógica para las rutas relacionadas con "diaries".
