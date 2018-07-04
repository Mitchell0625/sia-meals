INSERT INTO mealuser(name, email)
VALUES($1, $2)
RETURNING *;