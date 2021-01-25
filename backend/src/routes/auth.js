/*
    Rutas Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('./../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    getUsuarioSocialNet,
    crearUsuarioSocialNet,
    loginUsuarioSocialNet
} = require('./../controllers/auth');

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

// Login Usuario
router.post(
    '/', [ // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

// Obtener Usuario Social Network
router.get('/searchUserSocialNet/:id', getUsuarioSocialNet);

// Crear Usuario Social Network
router.post(
    '/newSocialNet', [ // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos

    ],
    crearUsuarioSocialNet
);

// Login Usuario Social Network
router.post(
    '/loginSocialNet', [ // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuarioSocialNet
);

// Revalidar Token para Usuario
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;