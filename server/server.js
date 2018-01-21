const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const photoRoute = require('./routes/photo.route.js');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/photo', photoRoute);

app.listen(PORT, () => {
    console.log('listening on', PORT);
});