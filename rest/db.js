const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'db', // Nombre del servicio en Docker Swarm
    user: 'root',
    password: 'root',
    database: 'personas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
module.exports = pool;