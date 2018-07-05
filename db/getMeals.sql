SELECT * FROM meals WHERE foodid IN (SELECT id from food ORDER BY id DESC LIMIT 7)
;