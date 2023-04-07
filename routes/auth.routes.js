const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller');

router.post('/registration', authController.registration);
router.get('/login', authController.login);
router.get('/users', authController.getUsers);

module.exports = router;