const Router = require('express');
const router = new Router();
const meetUpController = require('../controller/meetup.controller');

router.post('/meetup', meetUpController.createMeetup);
router.get('/meetup', meetUpController.showMeetups);
router.get('/meetup/:id', meetUpController.getMeetupById);
/*
router.put('/meetUp', meetUpController.createMeetup);
router.delete('/meetUp', meetUpController.createMeetup);
*/

module.exports = router;