import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SignIn from './components/SigninUp/SignIn';
import About from './components/About/About';
import Social from './components/Social/Social';
import Contact from './components/Contact/Contact';
import Editor from './components/Admin/Editor/Editor';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={SignIn} />
    <Route path="/about" component={About} />
    <Route path="/social" component={Social} />
    <Route path="/contact" component={Contact} />
    <Route path="/edit" component={Editor} />
  </Switch>
);
