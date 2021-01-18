// Configuración básica de Express
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const multer = require('multer');
const path = require('path'); // Permite trabajar las rutas de node
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();
// Base de Datos
dbConnection();
// CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));
// Lectura y parseo del body
app.use(express.json());

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname)); // Para cambiar el nombre de la imagen
    }
});
app.use(multer({ storage }).single('imageUrl'));

// Rutas
// TODO: Auth => Crear, Login, Renew
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos
app.use('/api/user', require('./routes/usuario'));

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});