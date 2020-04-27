import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/common/Login";
import Dashboard from "./components/admin/Dashboard";
import BankList from "./components/bank/BankList";
import AtmList from './components/atm/AtmList';
import AtmDetails from "./components/atm/AtmDetails";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/bankList" component={BankList} />
        <Route exact path="/atmList" component={AtmList} />
        <Route exact path="/atmDetails" component={AtmDetails} />
      </Switch>
    </main>
  );
}
