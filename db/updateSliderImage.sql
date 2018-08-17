UPDATE sliderImages
SET sliderMealImages = $1
WHERE id = $2
RETURNING *;