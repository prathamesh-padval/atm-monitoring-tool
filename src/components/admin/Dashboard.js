import React, { Component } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Admincontent from "./AdminContent";
import DashFooter from "../common/DashFooter";
import HeadNavFoot from "../HeadNavFoot";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Sidebar /> */}
        <HeadNavFoot />
        <Admincontent />
        {/* <DashFooter /> */}
      </div>
    );
  }
}
