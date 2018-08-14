import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import SignIn from "./components/SigninUp/SignIn";
import Editor from './components/Admin/Editor';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={SignIn} />
    <Route path='/edit' component={Editor} />
  </Switch>
);

