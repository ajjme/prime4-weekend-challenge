const pg = require('pg');
const Pool = pg.Pool;

const config = {
    host: 'localhost',
    database: 'prime4_weekend_challenge',
    port: 5432,
    max: 5,
    idleTimeoutMillis: 5000
};

module.exports = new Pool(config);