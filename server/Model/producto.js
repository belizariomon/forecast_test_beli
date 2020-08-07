const mongoose = require('mongoose'); 

let Schema = mongoose.Schema;
  
let productoSchema = new Schema({ 
    marca: { type: String,  required: [true, 'marca es necesario'] },
    descripcion: { type: String,  required: [true, 'descripcion es necesario'] },
    precio: { type: Number,  required: [true, 'precio es necesario'] },
    stock: { type: Number,  required: [true, 'stock es necesario'] },
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria', required: true },
});  
module.exports = mongoose.model('producto', productoSchema);


// { 
//     "marca":"Friar",
//     "descripcion":"Costilla",
//     "precio":250,
//     "stock":10,
//     "idCategoria":"5efca1fb3a57ad081ec02594"
// }
// { 
//     "marca":"Friar",
//     "descripcion":"Costilla",
//     "precio":250,
//     "stock":10,
//     "idCategoria":"5efca1fb3a57ad081ec02594"
// }