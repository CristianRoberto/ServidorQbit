const { Router } = require('express');
const router = Router();
const { defectoUsers , getProcesosQbit
} = require('../controllers/index.controller');

//router 
router.get('/', defectoUsers);
router.get('/procesosQbit', getProcesosQbit);


module.exports = router;