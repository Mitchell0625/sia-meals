const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

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
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return res.status(200).send(data);
      } catch (error) {
        return res.status(400).send(error);
      }
    });
  },
  updateAbout: (req, res) => {
    const db = req.app.get('db');
    const { text } = req.body;

    db.updateAbout([text, req.params.id])
      .then(newText => res.status(200).json(newText))
      .catch(err => console.log(err));
  },
  getAbout: (req, res) => {
    const db = req.app.get('db');

    db.getAbout()
      .then(about => res.status(200).json(about))
      .catch(err => console.log(err));
  }
};
