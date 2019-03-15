import React, { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" autofocus="autofocus" />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required" />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="remember-me" />
                                            Remember Password
                                        </label>
                                    </div>
                                </div>
                                <button id="btnLogin" className="btn btn-primary btn-block">Login</button>
                            </form>
                            <div className="text-center">
                                <a className="d-block small mt-3" href="register.html">Register an Account</a>
                                <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
