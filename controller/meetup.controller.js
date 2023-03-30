const db = require('../db.js');

class MeetUpController {
    async createMeetup(req, res) {
        const {title, descr, tags, timeAndLocation} = req.body;
        console.log(title, descr, tags, timeAndLocation);
        const newMeetUp = await db.query("INSERT INTO meetup {title, descr, tags, timeAndLocation} VALUES {$1, $2, $3, $4} RETURNING *", [title, descr, tags, timeAndLocation]);
        res.json(ok);
    }
}

module.exports = new MeetUpController();