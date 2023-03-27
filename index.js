const express = require('express');
const app = express();
const formidable = require('formidable');

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});

//получение списка всех митапов
app.get('/meetups', (req, res) => {
    res.send(meetups);
});

//получение элемента по id
app.get('/meetups/:id', (req, res) => {
    meetups.forEach(el => {
        if (el.id == req.params.id) {
            res.send(el);
        }
    });
});

//регистрация нового митапа
app.post('/meetups', (req, res) => {
    //req.body
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        let m = new MeetUp(fields.get(id));
        meetups.push(m);
        res.status(204);
        res.end();
    });
});

//изменение записи
app.put('/meetups/:id', (req, res) => {
    meetups.forEach(el => {
        if (el.id == req.params.id) {
            form.parse(req, (err, fields, files) => {
                el.title = fields.get('id').title;
                el.description = fields.get('id').description;
                el.tags = fields.get('id').tags;
                el.timeAndLocation = fields.get('id').timeAndLocation;
                res.status(201);
                res.end();
            });
        }
    });
});

app.delete('/meetups/:id', (req, res) => {
    meetups.forEach((el, index) => {
        if (el.id == req.params.id) {
            meetups.splice(index, 1);
            res.status(201);
            res.end();
        }
    });
});



//логика приложения, без базы данных пока
class MeetUp {
    //конструктор
    constructor(id, title, description, tags, timeAndLocation) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.timeAndLocation = timeAndLocation;
    }

    //вывод информации
    show() {
        console.log(this.id + " " + this.title + " " + this.description + " " + this.tags + " " + this.timeAndLocation);
    }

    //создание нового
    create(id, title, description, tags, timeAndLocation) {
        return new MeetUp(id, title, description, tags, timeAndLocation);
    }
}

let meetups = [new MeetUp(1, 'ksdfldkf', 'dnjksnjdkf', ['cool', 'super'], '13 Aug London'), new MeetUp(2, 'ksdfldkf', 'dnjksnjdkf', ['cool', 'super'], '13 Aug London')];