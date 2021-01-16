/*
    Rutas Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('./../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');
const { crearUsuario } = require('./../controllers/auth');

const router = Router();

// Crear Usuario
router.post(
    '/new', [ // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos

    ],
    crearUsuario
);

module.exports = router;