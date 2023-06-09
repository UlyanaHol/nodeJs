const db = require('../db.js');

class MeetUpController {
    async createMeetup(req, res) {
        const {title, descr, tags, timeAndDate, place} = req.body;
        const newMeetUp = await db.query("INSERT INTO meetups (title, descr, tags, timeAndDate, place) VALUES ($1, $2, $3, $4, $5) RETURNING id", [title, descr, tags, timeAndDate, place]);
        let m = new MeetUp(newMeetUp.rows[0].id, title, descr, tags, timeAndDate, place);
        res.status(200);
        res.json(m);
    }

    async showMeetups(req, res) {
        const meetups = await db.query('SELECT * FROM meetups');
        res.status(200);
        res.json(meetups.rows);
    }

    async getMeetupById(req, res) {
        const id = req.params.id;
        const meetup = await db.query('SELECT * FROM meetups WHERE id = $1', [id]);
        res.status(200);
        res.json(meetup.rows[0]);
    }

    async updateMeetup(req, res) {
        const {title, descr, tags, timeAndDate, place} = req.body;
        const meetup = await db.query('UPDATE meetups set title = $1, descr = $2, tags = $3, timeAndDate = $4, place = $5 WHERE id = $6 RETURNING *', [title, descr, tags, timeAndDate, place, req.params.id]);
        res.status(201);
        res.json(meetup.rows[0]);
    }

    async deleteMeetup(req, res) {
        const id = req.params.id;
        const meetup = await db.query('DELETE FROM meetups WHERE id = $1', [id]);
        res.status(200);
        res.json(meetup.rows[0]);
    }

    async registration(req, res) {
        const id_meetup = req.params.id;
        const id_user = req.user.id;
        const reg = await db.query('INSERT INTO participants (user_id, meetup_id) VALUES ($1, $2) RETURNING *', [id_user, id_meetup]);
        res.send({message: 'Successful'});
    }
}

class MeetUp {
    //конструктор
    constructor(id, title, description, tags, timeAndDate, place) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.timeAndDate = timeAndDate;
        this.place = place;
    }
}

module.exports = new MeetUpController();