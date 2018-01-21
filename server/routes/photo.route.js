const pool = require('../modules/pool.module');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hit /photos');
    const queryString = 'SELECT * FROM likes';
    pool.query(queryString)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});

module.exports = router;