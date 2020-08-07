const express  = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User')


router.post('/register',(req,res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body

    if (password !== confirm_password){
        return res.status(400).json({
            mesg: "Las constraseñas no coinciden"
        });
    }
    //solo un email
    User.findOne({
        username:username
    }).then (user =>{
        if(user){
            return res.status(400).json({
                msg: "ya existe ese user name"
            });
        }
    })
    User.findOne({
        email:email
    }).then (user =>{
        if(user){
            return res.status(400).json({
                msg: "ya existe ese email"
            });
        }
    })
    //agregamos al usuario
    let newUser = new User({
        name,
        username,
        password,
        email
    })
})