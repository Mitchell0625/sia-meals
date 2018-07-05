-- CREATE TABLE mealUser (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(200),
-- email VARCHAR(200))

-- CREATE TABLE food (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(200)
-- )

-- CREATE TABLE meals (
--     id SERIAL PRIMARY KEY,
--     type VARCHAR(200),
--     name TEXT,
--     foodid INT REFERENCES food(id),
--     diet VARCHAR(200)
-- )

-- INSERT INTO food (title)
-- VALUES('Southwest'), ('Fresh')

-- INSERT INTO meals (type, name, foodid, diet)
-- VALUES ('Breakfast', 'Smoothie Bowl', 2, 'vegan'),
-- ('Breakfast', 'Southwestern Omelette', 1, null),
-- ('Lunch', 'Black Bean Burger with Pickled Jalapenos', 1,'vegan'),
-- ('Lunch', 'Falafel Pita', 2, 'vegan'),
-- ('Dinner', 'Cauliflower Steaks', 2, 'vegan')