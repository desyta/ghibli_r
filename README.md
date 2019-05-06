## Buscador de películas del Studio Ghibli 

La aplicación está desarrollada para que cualquier usuario pueda encontrar de manera rápida la película de dicho estudio de animación con la ayuda de un autocompletado.

El principal reto fueron las validaciones , el primer paso es no activar el botón de búsqueda si no has ingresado nada, ¿qué pasa si la película no está dentro del catálogo? Además de decirle que no tenemos esa película, si presionas el botón tienes otro mensaje.

### Arquitectura

Desarrollo en [REACT.js](https://github.com/facebook/create-react-app), con dos componentes: búsqueda de películas y componente de resultado (detalle de película)
Para arrancar el proyecto: YARN RUN.

### Mejoras

Poner un cta para cerrar el contenido, podría ser una “X” en la esquina superior derecha. Considerar un borrado del input en autofocus aunque puede ser molesto para los usuarios.

### URL productiva

[https://ghibli-resuelve.herokuapp.com/](https://ghibli-resuelve.herokuapp.com/)
