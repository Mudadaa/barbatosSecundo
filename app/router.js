const express = require('express');
const router = express.Router();

//on importe le controller
const mainController = require('./mainController');

//page d'accueil
router.get('/', mainController.HomePage);
//page d'outils qui détailles les logiciels/techniques utilisées
router.get('/outils.ejs', mainController.ToolsPage);
//on exporte le router
module.exports = router;
