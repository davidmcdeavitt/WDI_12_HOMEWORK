CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  url TEXT
);

INSERT INTO movies(url)
VALUES ('pudding', 'http://www.omdbapi.com/?t=jaws&apikey=2f6435d9');
