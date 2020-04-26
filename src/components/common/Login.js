import React, { Component } from "react";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { authUrl } from "../../Constants";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  

  authenticate = () => {
    // const authJson = {
    //   username: this.state.username,
    //   password: this.state.password,
    // };

    // console.log(authJson)
    // Axios.request({
    //   method: "POST",
    //   data: authJson,
    //   url: authUrl
    // })
    // .then((response) => {
    //     console.log(response);
    //     localStorage.setItem("token",response.data.jwttoken);
    //     localStorage.setItem("logintime",response.data.loginTime);
    //     this.setState({ navigate: true });
    // })
    // .catch((err) =>{
    //     (console.log("Error Occurred. ",err))
    // });

    this.setState({ navigate: true });

  };

  render() {
    const { navigate } = this.state;

    // here is the important part
    if (navigate) {
      return <Redirect to="/dash" push={true} />;
    }

    return (
      <div className="prelogin-page">
        <div className="full-container">
          <div className="login-container">
            <div className="central-box">
              <div className="loginform-container ">
                <div className="login-form">
                  <div className="brand-logo">
                    <img src="../images/logo/kiya-logo.png" alt="logo" />
                  </div>
                  <div className="login-heading">
                    <h3>ATM Monitoring System</h3>
                  </div>
                  <div className="vspacer30"></div>
                  <div className="row">
                    <div className="col-12">
                      <div className="ux-component">
                        <label htmlFor="UserName">User Name</label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          onKeyUp={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="ux-component">
                        <label htmlFor="Password">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onKeyUp={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="vspacer10"></div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-footer">
                        <button
                          role="button"
                          className="button"
                          onClick={this.authenticate}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="vspacer10"></div>
                    <div className="col-12">
                      <div className="fgt-txt">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="vspacer50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
