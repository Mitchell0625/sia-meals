-- CREATE TABLE mealUser (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(200),
-- email VARCHAR(200))

CREATE TABLE mealImages (
    id SERIAL PRIMARY KEY,
    url TEXT
)

INSERT INTO mealImages (url) 
VALUES('https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd8da96be0724ab84e4147d428f6bba&auto=format&fit=crop&w=1038&q=80'), ('https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=621&q=80'), ('https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b54b672f6b83c7e9ccf289a0730e6f75&auto=format&fit=crop&w=1534&q=80')


CREATE TABLE sliderImages (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100),
    sliderMealImages INT REFERENCES mealImages(id));

INSERT INTO sliderImages (name, sliderMealImages)
VALUES ('image1',1), ('image2',2), ('image3',3) 

UPDATE sliderImages
SET sliderMealImages = 1
WHERE name = 'image1';

SELECT s.name, m.id, m.url from sliderImages s
JOIN mealImages m ON s.sliderMealImages = m.id;

