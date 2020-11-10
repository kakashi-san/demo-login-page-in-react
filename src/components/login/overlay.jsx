import React, { Component } from 'react';
export class Overlay extends Component {
    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this.props;
        return (React.createElement("div", { className: "overlay-container" },
            React.createElement("div", { className: "overlay" },
                React.createElement("div", { className: "overlay-panel overlay-left" },
                    React.createElement("h1", null, "Welcome Back!"),
                    React.createElement("p", { className: "overlay-description" },
                        "If you're already registered members, ",

                        "After logging in, you can use more services."),
                    React.createElement("button", { className: "ghost form-button", id: "signIn", onClick: handleClickSignInButton }, "Sign In")),
                React.createElement("div", { className: "overlay-panel overlay-right" },
                    React.createElement("h1", null, "Hello, Friend!"),
                    React.createElement("p", { className: "overlay-description" },
                        "Not a member yet, ",

                        "You can use more services after signing up."),
                    React.createElement("button", { className: "ghost form-button", id: "signUp", onClick: handleClickSignUpButton }, "Sign Up")))));
    }
}
// export default Overlay;
