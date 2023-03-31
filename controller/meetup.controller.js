const db = require('../db.js');

class MeetUpController {
    async createMeetup(req, res) {
        const {title, descr, tags, timeAndLocation} = req.body;
        console.log(title, descr, tags, timeAndLocation);
        const newMeetUp = await db.query("INSERT INTO meetup (title, descr, tags, timeAndLocation) VALUES ($1, $2, $3, $4) RETURNING id", [title, descr, tags, timeAndLocation]);
        let m = new MeetUp(newMeetUp.rows[0].id, title, descr, tags, timeAndLocation);
        res.json(m);
    }

    async showMeetups(req, res) {
        const meetups = await db.query('SELECT * FROM meetup');
        res.json(meetups.rows);
    }

    async getMeetupById(req, res) {
        const id = req.params.id;
        const meetup = await db.query('SELECT * FROM meetup WHERE id = $1', [id]);
        res.json(meetup.rows[0]);
    }

    async updateMeetup(req, res) {
        const {title, descr, tags, timeAndLocation} = req.body;
        const meetup = await db.query('UPDATE meetup set title = $1, descr = $2, tags = $3, timeAndLocation = $4 WHERE id = $5 RETURNING *', [title, descr, tags, timeAndLocation, req.params.id]);
        res.json(meetup.rows[0]);
    }

    async deleteMeetup(req, res) {
        const id = req.params.id;
        const meetup = await db.query('DELETE FROM meetup WHERE id = $1', [id]);
        res.json(meetup.rows[0]);
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