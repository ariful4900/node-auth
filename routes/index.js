const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController');

/* GET home page. */
router.get('/',  appController.root)
// router.get('/',appController.head,  appController.root)
router.post('/about', appController.about )

module.exports = router;
