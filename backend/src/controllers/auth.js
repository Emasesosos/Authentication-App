const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

// Crear Usuario
const crearUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email: email });
        // console.log(usuario);
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

        usuario = new Usuario(req.body);

        // Valores por default del Usuario
        usuario.imageUrl = 'https://res.cloudinary.com/emasesosos/image/upload/v1610838658/addImage_siw6ys.png';
        usuario.name = 'Edit Name';
        usuario.bio = 'Edit Bio';
        usuario.phone = 'Edit Phone';

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el Administrador'
        });
    }

};

// Login Usuario
const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email: email });
        // console.log(usuario);
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });


    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el Administrador'
        });
    }

};

// Revalidar Token para Usuario
const revalidarToken = async(req, res = response) => {

    const { uid, name } = req;

    // Generar nuevo JWT y retornarlo en la petición
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    });

};

// Obtener Usuarios
const getUsuarioSocialNet = async(req, res = response) => {

    const { id: email } = req.params;
    const usuario = await Usuario.find({ email });

    if (usuario.length > 0) {
        res.status(201).json({
            ok: true
        });
    } else {
        res.status(201).json({
            ok: false
        });
    }

};

// Crear Usuario Social Networks
const crearUsuarioSocialNet = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email: email });
        // console.log(usuario);
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

        usuario = new Usuario(req.body);

        // Valores por default del Usuario
        usuario.imageUrl = 'https://res.cloudinary.com/emasesosos/image/upload/v1613335327/addImage_wvgo0m.png';
        usuario.name = 'Edit Name';
        usuario.bio = 'Edit Bio';
        usuario.phone = 'Edit Phone';

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el Administrador'
        });
    }

};

// Login Usuario Social Networks
const loginUsuarioSocialNet = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email: email });
        // console.log(usuario);
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });


    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el Administrador'
        });
    }

};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    getUsuarioSocialNet,
    crearUsuarioSocialNet,
    loginUsuarioSocialNet
};