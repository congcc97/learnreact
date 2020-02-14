import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Content/Dashboard";
import Table from "../Components/Content/Table";
import User from "../Components/Content/User";
import Typography from "../Components/Content/Typography";
import Icons from "../Components/Content/Icons";
import Maps from "../Components/Content/Maps";
import RTL from "../Components/Content/RTL";
import Upgrade from "../Components/Content/Upgrade";
import Notifications from "../Components/Content/Notifications";

class DirectURL extends Component {
  render() {
    console.log(this.props.dataUser);
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/user" component={User} />
        <Route path="/table" component={Table} />
        <Route path="/typography" component={Typography} />
        <Route path="/icons" component={Icons} />
        <Route path="/maps" component={Maps} />
        <Route path="/rtl" component={RTL} />
        <Route path="/upgrade" component={Upgrade} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    );
  }
}

export default DirectURL;
