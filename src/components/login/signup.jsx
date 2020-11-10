import React, { Component } from 'react';

export class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="form" action="#">
                    <h1 className="form-title">Hello, Friend!</h1>

                    <input type="text" placeholder="" />
                    <input type="email" placeholder="" />
                    <input type="password" placeholder="" />
                    <button className="form-button">sign up</button>
                </form>
            </div>
        );
    }
}

// export default Login;