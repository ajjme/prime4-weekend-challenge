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
            console.log('send success', result.rows);
        })
        .catch(err => {
            res.sendStatus(500);
            console.log('error');
        });
});
router.put('/likes', (req, res) => {
    console.log('hit /likes', req.body);
    const queryString = 'UPDATE likes SET likes = $1 WHERE name = $2';
    console.log('req.body', req.body);
    pool.query(queryString, [req.body.data.currentLikes, req.body.data.name])
        .then(result => {
            res.sendStatus(201);
            console.log('successful PUT');
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