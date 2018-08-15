module.exports = {
  getImages: (req, res) => {
    const db = req.app.get('db');

    db.getImages()
      .then(images => res.status(200).json(images))
      .catch(err => console.log(err));
  }
};
