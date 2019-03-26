import React from 'react';
import {NavLink} from 'react-router-dom'
import { UserContext } from '../App'
const Header = () => {
    const onClickButton = (e) => {
        e.preventDefault();
    }
    return (
        <UserContext.Consumer>    
        {({user, logout}) => 
            <div className="App"> 
                <div className="header justify-content-between d-flex">
                    <h1>No Loan Pay</h1>
                    <button onClick={logout} className="btn btn-light">Log Out</button>
                </div>

                <h5 className="text-center">Manage {user.displayName}'s loan</h5>
                <NavLink to="/" activeClassName="is-active" exact={true}><button type="button" className="btn btn-primary mx-1">My Current Loan</button></NavLink> 
                <NavLink to="/add" ><button type="button" className="btn btn-info mx-1">Add New Loan</button></NavLink> 
            </div>
        }
        </UserContext.Consumer>
    )
}

export default Header;