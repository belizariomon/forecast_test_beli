const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'Es obligatorio']
    },
    img: {
        type: String,
        required: false
    }, // No es obli
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos,
    }, // default:'USER_ROLE'
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

usuarioSchema.plugin(uniqueValidator, { message: ' {PATH} debe de ser único' });

// Borra el dato de contraseña al retornar el usuario
usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model('usuario', usuarioSchema);