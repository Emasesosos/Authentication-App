const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

// Obtener Usuario
const getUsuario = async(req, res = response) => {

    const id = req.params.id;

    const usuario = await Usuario.findById(id);

    res.status(201).json({
        ok: true,
        usuario
    });

};

// Obtener Usuarios
const getUsuarios = async(req, res = response) => {

    const usuario = await Usuario.find();

    res.status(201).json({
        ok: true,
        usuario
    });

};

// Actualizar Eventos
const actualizarUsuario = async(req, res = response) => {

    const usuarioId = req.params.id;
    const { imageUrl, password } = req.body;

    try {

        const usuario = await Usuario.findById(usuarioId);
        console.log({ usuario });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe por ese id'
            });
        }

        // Parametros nuevos
        const nuevoUsuario = {
            ...req.body
        };
        console.log({ nuevoUsuario });

        // Encriptar nueva contraseña
        const salt = bcrypt.genSaltSync();
        nuevoUsuario.password = bcrypt.hashSync(password, salt);

        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, nuevoUsuario, { new: true });

        res.status(201).json({
            ok: true,
            usuario: usuarioActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador...'
        });
    }

};

module.exports = {
    getUsuario,
    getUsuarios,
    actualizarUsuario
};