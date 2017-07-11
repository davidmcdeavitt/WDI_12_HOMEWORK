CREATE TABLE dishes(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT
);

INSERT INTO dishes(name, image_url) VALUES ('pudding', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/');

CREATE TABLE comments(
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);
