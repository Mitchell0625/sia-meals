module.exports = {
  createUser: (req, res, next) => {
    const db = req.app.get("db");

    db.addUser([req.body.name, req.body.email])
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => res.status(500).send(err));
  },
  loginUser: (req, res, next) => {
    const db = req.app.get("db");

    db.loginUser([req.body.email])
      .then(user => res.status(200).json(user))
      .catch(err => console.log(err));
  }
};
