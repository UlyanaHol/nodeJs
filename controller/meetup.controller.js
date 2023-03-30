const db = require('../db.js');

class MeetUpController {
    async createMeetup(req, res) {
        const {title, descr, tags, timeAndLocation} = req.body;
        console.log(title, descr, tags, timeAndLocation);
        const newMeetUp = await db.query("INSERT INTO meetup (title, descr, tags, timeAndLocation) VALUES ($1, $2, $3, $4) RETURNING id", [title, descr, tags, timeAndLocation]);
        let m = new MeetUp(newMeetUp.rows[0].id, title, descr, tags, timeAndLocation);
        res.json(m);
    }
}

class MeetUp {
    //конструктор
    constructor(id, title, description, tags, timeAndLocation) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.timeAndLocation = timeAndLocation;
    }
}

module.exports = new MeetUpController();