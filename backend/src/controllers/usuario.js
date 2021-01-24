const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const fs = require('fs-extra'); // Permite trabajar los archivos en el SO

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

    let imageDefault;

    if (imageUrl) {
        // No se subio imagen se queda con la misma
        imageDefault = imageUrl;
    } else if (imageUrl === undefined) {
        // Hay cambio de imagen
        imageDefault = await cloudinary.v2.uploader.upload(req.file.path);
    }

    try {

        const usuario = await Usuario.findById(usuarioId);
        // console.log({ usuario });

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

        // Url Image
        if (imageUrl) {
            nuevoUsuario.imageUrl = imageDefault;
        } else if (imageUrl === undefined) {
            nuevoUsuario.imageUrl = imageDefault.url;
        }

        // Encriptar nueva contraseña
        const salt = bcrypt.genSaltSync();
        nuevoUsuario.password = bcrypt.hashSync(password, salt);

        // console.log({ nuevoUsuario });
        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, nuevoUsuario, { new: true });

        // Borrar imagen de uploads
        if (imageUrl === undefined) {
            await fs.unlink(req.file.path);
        }

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