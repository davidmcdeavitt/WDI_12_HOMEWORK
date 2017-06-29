-- CREATE TABLE movies(
--   id SERIAL4 PRIMARY KEY,
--   title VARCHAR(400),
--   image_url TEXT,
--   Plot  VARCHAR(400)
-- );
changed to

CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  year VARCHAR(400),
  actors VARCHAR(400),
  plot VARCHAR(400),
  poster VARCHAR(400),
  imdbRating  VARCHAR(400)
);
