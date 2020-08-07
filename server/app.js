const express = require('express');
const mongoose = require('mongoose'); 
const enrutador = require('./Controller/rutas');
const path = require('path');  

require('./config');
  
const app = express();
   
app.use(express.static(path.resolve( __dirname, '..','client', 'build')));
   
// Para organizar rutas
app.use(enrutador);  

app.listen(process.env.port,
    () => console.log('server run on ', process.env.port)
);
 