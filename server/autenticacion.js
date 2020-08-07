const { JsonWebTokenError } = require("jsonwebtoken");

const jwt = require('jsonwebtoken');
// está cargado el ejemplo en routerUsuario /Usuario, como middleware. Debe llevar en encabezado el token. que se le da al ingresar.
const verificarToken = (req, res, next) => {
    let token = req.get('token');

    // res.json({token});
    console.log('Verifico token');

    // devuelve error si no
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next(); 
    });
}

// Igual que el token veo el rol
const verificarAdmin = (req, res, next) => {
    let usuario = req.usuario;

    // res.json({token});
    // console.log(JSON.parse(token));

    // devuelve error si no 
    if (usuario.rol === 'ADMIN_ROLE') {
        next();
    }
    else {
        return res.json({
            ok: false,
            err:{ message:'El usuario no es administrador'}
        });
    }

}

module.exports = {
    verificarToken,
    verificarAdmin
};