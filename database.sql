create TABLE meetup(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    descr VARCHAR(255),
    tags VARCHAR(30)[],
    timeAndLocation VARCHAR(255)
);