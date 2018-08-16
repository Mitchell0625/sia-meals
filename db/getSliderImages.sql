SELECT s.name, m.id, m.url from sliderImages s
JOIN mealImages m ON s.sliderMealImages = m.id;