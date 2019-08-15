const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
//const indexRouter = require('./src/routes/index')

// MIDDLEWARES

app.use('/assets', express.static(path.join(__dirname + '/src/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/api', indexRouter)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/public', 'index.html'))
})

db.sync({ force: false })
    .then(() => {
        app.listen(3000)
        console.log('Your server available at http://localhost:3000')
    })