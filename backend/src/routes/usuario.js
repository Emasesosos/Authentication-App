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
router.put('/:id', actualizarUsuario);


module.exports = router;