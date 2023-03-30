const Router = require('express');
const router = new Router();
const meetUpController = require('../controller/meetup.controller');

router.post('/meetup', meetUpController.createMeetup);
/*
router.get('/meetUp', meetUpController.createMeetup);
router.get('/meetUp', meetUpController.createMeetup);
router.put('/meetUp', meetUpController.createMeetup);
router.delete('/meetUp', meetUpController.createMeetup);
*/

module.exports = router;