const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise'); // Importa la biblioteca mysql2
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../config.js');

// Crea la conexión a la base de datos MySQL
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
});

// Definir tu función defectoUsers
const defectoUsers = async (req, res) => {
    res.send('Este es el metodo get por defecto!');
};

const getProcesosQbit = async (req, res) => {
  try {
      // Ejecuta la consulta SQL para obtener los usuarios
      const [rows, fields] = await pool.query('SELECT * FROM procesosQbit ORDER BY id ASC');
      // Envía los usuarios como respuesta
      res.status(200).json(rows);
      console.log(rows);
  } catch (error) {
      // En caso de error, envía un mensaje de error al cliente
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};








module.exports = {
    defectoUsers,
    getProcesosQbit,
};
