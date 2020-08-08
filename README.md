# forecast_test_beli
Test challenge Node Js backend + React Js Front

Para ejecutar el servidor sólamente se necesita correr el node en la carpeta raiz:
1) Instalar los paquetes faltantes con npm ejecutando el comando "npm install" en la carpeta raíz.
2) Existen dos pasos para **A ELEGIR** dependiendo del contexto*:\
**a) Configurar test local:Configurar el archivo config.js de la carpeta server : \
process.env.PRODUCCIONMODE debe estar como false \
process.env.IPLOCAL debe tener su ip.<==Preferentemente realizar este paso** \
b) Configurar producción, si node efectivamente se monta como servidor: Configurar el archivo config.js de la carpeta server y editar el valor \
process.env.PRODUCCIONMODE => true.\

**!!!Actualmente el archivo se encuentra definido en modo producción, de manera que si necesitan probarlo en su host local, deberán realizar el paso 2.a**

3) Correr el comando "node server/app" o si tienen nodemon correr el comando "nodemon server/app".
4) Abrir en localhost:8080.

*Esto es debido a que express solo detectará el ip del request la conexión entrante si se encuentra por wan. Si es montado por localhost por consiguiente el ip será ::1

Packages utilizados:

Backend:\
-express.\
-node-fetch.

frontend:\
styled-components

Corriendo en: http://forecastestbeli.azurewebsites.net

Consultas: belizariomonje@hotmail.com, respondo en el momento.
