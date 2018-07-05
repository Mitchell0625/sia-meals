module.exports = {
  getMeals: (req, res, next) => {
    const db = req.app.get("db");

    db.getMeals()
      .then(food => res.status(200).json(food))
      .catch(err => console.log(err));
  }
};
