module.exports = {
  getImages: (req, res) => {
    const db = req.app.get('db');

    db.getImages()
      .then(images => res.status(200).json(images))
      .catch(err => console.log(err));
  },
  getSliderImages: (req, res) => {
    const db = req.app.get('db');

    db.getSliderImages()
      .then(images => res.status(200).json(images))
      .catch(err => console.log(err));
  },
  updateSliderImage: (req, res) => {
    const db = req.app.get('db');
    const { sliderImage, id } = req.body;

    db.updateSliderImage([sliderImage, id])
      .then(image => res.status(200).json(image))
      .catch(err => console.log(err));
  },
  addImage: (req, res) => {
    const db = req.app.get('db');
    const { url } = req.body;

    db.addImage([url])
      .then(image => res.status(200).json(image))
      .catch(err => console.log(err));
  }
};
