const Router = require('express');
const router = new Router();
const passport = require('passport');
const meetUpController = require('../controller/meetup.controller');

router.post('/meetups', meetUpController.createMeetup);
router.get('/meetups', meetUpController.showMeetups);
router.get('/meetups/:id', meetUpController.getMeetupById);
router.put('/meetups/:id', meetUpController.updateMeetup);
router.delete('/meetups/:id', meetUpController.deleteMeetup);
router.get('/meetups/register/:id', passport.authenticate('jwt', {session: false}), meetUpController.registration);

module.exports = router;