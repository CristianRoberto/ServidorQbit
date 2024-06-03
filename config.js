// Definición de variables de configuración con valores predeterminados
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'Gilcespanta1994';
const DB_NAME = process.env.DB_NAME || 'Qbit';
const DB_PORT = process.env.DB_PORT || 3305;

// Exportación de las variables de configuración como un objeto
module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
};

