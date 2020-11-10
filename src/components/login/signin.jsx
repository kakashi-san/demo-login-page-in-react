import React, { Component } from 'react';

export class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form className ="form" action="#">
                    <h1 className="form-title">Welcome Back!</h1>

                    <input type="email" placeholder="Email Id" />
                    <input type="password" placeholder="Passkey" />

                    <button className="form-button">sign in</button>
                    <a className="find-password" href="#"></a>
                </form>
            </div>
        );
    }
}

