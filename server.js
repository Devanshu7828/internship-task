require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts')
const path=require('path')
const bodyParser = require('body-parser')

// db
require('./db/db')

app.use(express.json())

// BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// STATIC FILIE
app.use(express.static(path.join(__dirname,'public')))
// VIEW ENGINE
app.use(expressLayout);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


// routes
app.use('/',require('./routes/stock'))
// app.use('/', require('./routes/admin_page'))

app.listen(PORT,()=>console.log('server up on port',PORT))