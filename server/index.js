require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
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
