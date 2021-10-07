const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Debe ingresar un nombre.').bail()
    .isAlpha().withMessage('Debe contener solo letras'),

    check('email')
    .notEmpty().withMessage('Debe ingresar un email.'),

    check('color')
    .notEmpty().withMessage('Debe seleccionar un color.'),

    check('edad')
    .notEmpty().withMessage('Debe ingresar la edad.').bail()
    .isNumeric().withMessage('Debe ser un numero'),
    

]