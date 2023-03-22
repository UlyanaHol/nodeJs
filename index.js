const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});

app.get('/', (req, res) => {
    res.end(meetups[0].show());
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