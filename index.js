//логика приложения, без базы данных пока
let meetups = [];
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

meetups.push(new MeetUp(1, 'аолптлвал', 'адаплвд', ['cool', 'super'], '13.06.2023'));
meetups[0].show();