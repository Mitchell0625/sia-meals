require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const port = 4000;

//controllers
const uc = require("./controllers/userController");
const mc = require("./controllers/mealsController");

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

//routers
const restRouter = express.Router();
const userRouter = express.Router();
const mealsRouter = express.Router();

app.use("/api", restRouter);
restRouter.use("/user", userRouter);
restRouter.use("/meals", mealsRouter);

userRouter
  .route("/")
  .get(uc.loginUser)
  .post(uc.createUser);

mealsRouter.route("/").get(mc.getMeals);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
