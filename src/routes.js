import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import SignIn from "./components/SigninUp/SignIn";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={SignIn} />
  </Switch>
);
//create route for about page ==> Header About(inside Main) Footer
