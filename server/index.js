require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const port = 4000;

//controllers
const uc = require('./controllers/userController');
const ec = require('./controllers/editController');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

AWS.config.update({
  accessKeyId: process.env.MY_ACCESS_ID_AWS,
  secretAccessKey: process.env.MY_SECRET_ACCESS_AWS
});

AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.BUCKET_NAME,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

//routers
const restRouter = express.Router();
const userRouter = express.Router();

app.use('/api', restRouter);
restRouter.use('/user', userRouter);

//user
userRouter.route('/').get(uc.loginUser);

//editing
restRouter.get('/getImages', ec.getImages);
restRouter.get('/getSliderImages', ec.getSliderImages);
restRouter.get('/getAbout', ec.getAbout);
restRouter.put('/updateSliderImage', ec.updateSliderImage);
restRouter.post('/addImage', ec.addImage);
restRouter.put(`/updateAbout/:id`, ec.updateAbout);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
