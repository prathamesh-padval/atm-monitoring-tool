import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/common/Login";
import Dashboard from "./components/admin/Dashboard";
import BankDashboard from "./components/bank/BankDashboard";
import AtmList from "./components/atm/AtmList";
import AtmDetails from "./components/atm/AtmDetails";
import BankList from "./components/bank/BankList";
import AddAtm from "./components/atm/AddAtm";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        
        <Route exact path="/banks" component={ BankList } />
        <Route exact path="/bankdetails" component={BankDashboard} />

        <Route exact path="/atms" component={AtmList } />
        <Route exact path="/atmdetails" component={ AtmDetails } />
        <Route exact path="/atm/add" component={ AddAtm } />
      </Switch>
    </main>
  );
}
