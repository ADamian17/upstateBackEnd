const express = require('express');
const router = express.Router()
const ctrl = require('../controllers');


// City Routes
router.get('/', ctrl.city.index); // Esta es la routa para ver todas las ciudades




module.exports = router