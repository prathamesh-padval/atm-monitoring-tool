import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/common/Login";
import Dashboard from "./components/admin/Dashboard";
import BankList from "./components/bank/BankList";
import AtmList from './components/atm/AtmList';

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/bankList" component={BankList} />
        <Route exact path="/atmList" component={AtmList} />
      </Switch>
    </main>
  );
}
