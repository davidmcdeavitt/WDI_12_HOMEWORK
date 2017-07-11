CREATE TABLE dishes(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  url TEXT
);

INSERT INTO dishes(url)
VALUES ('pudding', 'http://www.omdbapi.com/?t=jaws&apikey=2f6435d9');
