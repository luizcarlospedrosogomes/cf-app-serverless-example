import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SettingsPage from "./settings";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter basename={'manager-email-ui'}>
      <Switch>           
        <Route exact path="/settings">
          <SettingsPage/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
