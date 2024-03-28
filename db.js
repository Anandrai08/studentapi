const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'yourpassword',
    port: 5442,
});

module.exports = pool;