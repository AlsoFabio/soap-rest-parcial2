const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar la carpeta 'public' como carpeta estática
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
