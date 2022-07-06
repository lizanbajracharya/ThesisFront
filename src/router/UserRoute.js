import React from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const UserRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoute;
