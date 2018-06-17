require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const port = 4000;

const app = express();
app.use(json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
