# 🧮 Calculator
[![Main image](https://i.postimg.cc/dVDk2RPh/Captura-de-pantalla-2021-03-18-a-las-16-22-37.png)](https://postimg.cc/tsQ4yxgb)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Arrancar el proyecto desde cero:

Si has decidido clonar este repo,:
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```bash
npm start
```

### Para arrancar los test

Para comprobar que todo va según lo previsto, puedes arrancar los test con el siguiente comando:

```bash
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Para compilar el proyecto

Cuando ya tenemos listo nuestro proyecto para subirlo a producción, ejecutamos el siguiente comando para generar el directorio build:

```bash
npm run build
```

## Estructura de carpetas

```
src
 ├─ html // los ficheros de esta carpeta se copian en public/api/
 |  ├─ partials
 |  |  ├─ addNewTask.html
 |  |  ├─ footer.html
 |  |  └─ main.html
 |  └─ index.html
 ├─ images
 |  └─ list.png
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ 01-variables.js
 |  ├─ 02-create-date.js
 |  ├─ 03-create-tasks-list.js
 |  ├─ 04-manage-every-task.js
 |  ├─ 05-local-storage.js
 |  └─ 06-events.js
 └─ scss
    ├─ core
    |  ├─ _reset.scss
    |  └─ _variables.scss
    ├─ layout
    |  ├─ _addNewTask.scss
    |  ├─ _footer.scss
    |  └─ _main.scss
    └─ pages
    |  └─ _index.scss
    └─ _main.scss
 
```
