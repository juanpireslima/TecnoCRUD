const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tecnologia = require('./routes/tecnologia.route')
const app = express();

// Connecting DB
let url = 'mongodb+srv://TecnoCRUD:<Password>@cluster0.m3ulr.mongodb.net/TecnoCRUD'
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));


// Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/tecnologia', tecnologia)

const port = 3333;
app.listen(port, console.log(`Server on na porta: ${port}`))