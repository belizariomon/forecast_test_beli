const mongoose = require('mongoose'); 

let Schema = mongoose.Schema;
  
let categoriaSchema = new Schema({  
    descripcion: { type: String, unique: true, required: [true, 'descripcion es necesario'] }, 
    productos:[{ type: Schema.Types.ObjectId, ref: 'producto' }]
}); 

module.exports = mongoose.model('categoria', categoriaSchema);