const express = require('express')
const app = express();
const path = require('path');
const { get } = require('http');

//settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'public', 'views'))
app.set('view engine', 'ejs')

//middlewares

//routes
app.get('/', (req, res) => {
    res.render('index', { tittle: 'Website'})
})

//Listenign the server
app.listen(app.get('port'), ()  => {
    console.log('Server on port 3000'.red)
})