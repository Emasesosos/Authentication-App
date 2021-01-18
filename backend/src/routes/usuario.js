/*
    Rutas Usuario
    host + /api/user
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getUsuario, getUsuarios, actualizarUsuario } = require("../controllers/usuario");

const router = Router();
router.use(validarJWT);

// Obtener Usuario
router.get('/:id', getUsuario);

// Obtener Usuarios
router.get('/', getUsuarios);

// Actualizar Usuario
router.put(
    '/:id', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    actualizarUsuario
);


module.exports = router;