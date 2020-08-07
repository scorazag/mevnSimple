const moongose = require('mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = moongose.model('users',UserSchema)//asigamanos el schema al docmuento users en Mongo