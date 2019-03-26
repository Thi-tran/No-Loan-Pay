import React, {  } from 'react';

const LoginPage = (props) => {
    return (
        <div className="App">

            <div className="header">
                <h1>No Loan Pay</h1>
            </div>                
            
            <button className="btn btn-primary" onClick={props.login}>Login with Google</button>
        </div>
    );
}

export default LoginPage;