const express = require('express');
const { pool } = require('./db');
const app = express();
const port = 8080;

app.post('/insertar_con_rest', async (req, res) => {
    try {
        console.log('hola');
        const connection = await pool.getConnection();
        // Realiza la lógica de inserción en la base de datos utilizando connection.query
        // ...

        res.send('Registro insertado con éxito');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.get('/', (req, res) => {
    res.send('Hola');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
