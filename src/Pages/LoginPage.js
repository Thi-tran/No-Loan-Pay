import React, { Component } from 'react';
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="App">

                <div className="header">
                    <h1>No Loan Pay</h1>
                </div>                
                
                <button className="btn btn-primary" onClick={this.props.login}>Login with Google</button>
            </div>
        );
    }
}

export default LoginPage;