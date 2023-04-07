create TABLE meetups (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    descr VARCHAR(255),
    tags VARCHAR(30)[],
    timeAndDate TIMESTAMP(6),
    place VARCHAR(255)
);

create TABLE users (
    id SERIAL PRIMARY KEY,
    loginUser VARCHAR(255),
    meetup_id INTEGER,
    FOREIGN KEY (meetup_id) REFERENCES meetups (id)
);