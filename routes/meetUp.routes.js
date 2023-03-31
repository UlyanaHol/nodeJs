const Router = require('express');
const router = new Router();
const meetUpController = require('../controller/meetup.controller');

router.post('/meetup', meetUpController.createMeetup);
router.get('/meetup', meetUpController.showMeetups);
router.get('/meetup/:id', meetUpController.getMeetupById);
router.put('/meetup/:id', meetUpController.updateMeetup);
router.delete('/meetUp/:id', meetUpController.deleteMeetup);

module.exports = router;