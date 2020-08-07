# forecast_test_beli
Test challenge Node Js backend + React Js Front

Para ejecutar el servidor sólamente se necesita correr el node en la carpeta raiz:
1) Instalar los paquetes faltantes con npm ejecutando el comando "npm install" en la carpeta raíz.
2) Existen dos pasos para seguir:
  a) Configurar local:Configurar el archivo config.js de la carpeta server y editar el valor process.env.IPLOCAL y poner su ip.
  b) Configurar producción:Configurar el archivo config.js de la carpeta server y editar el valor process.env.PRODUCCIONMODE => true.
3) Correr el comando "node server/app" o si tienen nodemon correr el comando "nodemon server/app".
4) Abrir en localhost:8080.

Packages utilizados:

Backend:
express.
node-fetch.

frontend:
styled-components