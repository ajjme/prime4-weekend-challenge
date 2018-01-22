const pool = require('../modules/pool.module');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hit /photos');
    const queryString = 'SELECT * FROM likes ORDER BY name';
    pool.query(queryString)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});
router.get('/likes', (req, res) => {
    console.log('hit /photos', req.query.name);
    const queryString = 'SELECT * FROM likes WHERE name = $1';
    pool.query(queryString, [req.query.name])
        .then(result => {
            res.send(result.rows);
            console.log('success', result.rows);
        })
        .catch(err => {
            res.sendStatus(500);
            console.log('error');
        });
});

// router.put('/', (req, res) => {
//     console.log('hit /photos');
//     const queryString = 'UPDATE likes SET WHERE';
//     pool.query(queryString)
//         .then(result => {
//             res.send(result.rows);
//         })
//         .catch(err => {
//             res.sendStatus(500);
//         });
// });

module.exports = router;