import React, { Component } from 'react';
import "./components/login/App.css";
import {SignIn} from "./components/login/signin"
import {SignUp} from "./components/login/signup"
import {Overlay} from "./components/login/overlay"
// import {Header} from "./components/headnfoot/header"

class App extends Component {
  constructor() {
      // @ts-ignore
      super();
      this.handleClickSignUpButton = () => this.setState({
          rightPanelActive: true,
      });
      this.handleClickSignInButton = () => this.setState({
          rightPanelActive: false,
      });
      this.state = {
          rightPanelActive: false,
      };
  }
  render() {
      const { handleClickSignUpButton, handleClickSignInButton } = this;
      const { rightPanelActive } = this.state;
      return (
              React.createElement("div", { className: "App" },
              // React.createElement(Header, null),              
              React.createElement("div", { className: `container ${rightPanelActive ? `right-panel-active` : ``}`, id: "container" },
              React.createElement(SignIn, null),
              React.createElement(SignUp, null),
              React.createElement(Overlay, { handleClickSignInButton: handleClickSignInButton, handleClickSignUpButton: handleClickSignUpButton }))));
  }
}
export default App;

