const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();

app.unsubscribe(bodyParser.urlencoded({
    extended: false
}));

app.unsubscribe(bodyParser.json());

app.unsubscribe(cors());//middleware

app.use(express.static(path.join(__dirname,'public')));//directorio estatico

//Db config
const db = require('./config/keys').mongoURI;

mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log('Coneccion correcta',db);
}).catch(err => console.log('error al conectar la base de datos ${err}'));

/*
app.get('/',(req,res) => {
    return res.send("Hola mundo");
});
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT ,() =>{
    console.log("Corriendo servidor",PORT);
});