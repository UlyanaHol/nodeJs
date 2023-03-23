const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});

//получение списка всех митапов
app.get('/', (req, res) => {
    meetups.forEach(meetup => {
        res.send(meetup.show());
    });
});

//получение элемента по id
app.get('/:id', (req, res) => {
    meetups.forEach(el => {
        if (el.id == req.params.id) {
            res.send(el);
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