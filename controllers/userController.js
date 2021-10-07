const fs = require('fs');
const path = require('path');


const {validationResult} = require('express-validator');
module.exports = {
    login:(req,res) => {
        var color = "background-color: red;";
        res.render("login",{
            color : color,
        });
    },
    processLogin: (req,res) =>{
        // return res.send(req.body);
        let errors = validationResult(req);
        console.log(req.body);
        if(errors.isEmpty()){
            const{nombre,email,color,edad,recordarcolor} = req.body;
            if(color == "blue"){
                colornuevo = "background-color:#055ABF;"
            }
            if(color == "green"){
                colornuevo = "background-color:#128404;"
            }
            if(color == "red"){
                colornuevo = "background-color:#A51104;"
            }
            req.session.user = {
                nombre: nombre,
                email: email,
                color: color,
                edad: edad,
                colornuevo: colornuevo
            }
            console.log(colornuevo);
            console.log(req.session.user);
            if(recordarcolor){
                console.log("entro a la cookie");
                res.cookie('sessionesycookies', req.session.user,{
                    maxAge: 150000 // duracion de la cookie 5 min
                })
            }
            console.log("-------------");
            console.log(req.session.user);
            res.render("login",{
                usuario: req.session.user
            });
        }else{
            console.log(errors);
            return res.render("login",{
                errores: errors.mapped(),
             })
        }
    },
    vistaBienvenido: (req,res) =>{
        console.log(req.session.user)
        res.render("vistaBienvenido",{
            usuario: req.session.user
        })
    },
    cerrarSession: (req,res) =>{
        req.session.destroy(); //destruye la sesion
        res.cookie('sessionesycookies',null,{maxAge: -1}) // destruye la cookie
        return res.redirect("/users/login");
    }
}