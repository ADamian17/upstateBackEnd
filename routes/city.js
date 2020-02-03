const express = require('express');
const router = express.Router()
const ctrl = require('../controllers');


// City Routes
router.get('/', ctrl.city.allCities); // Esta es la routa para ver todas las ciudades




module.exports = router