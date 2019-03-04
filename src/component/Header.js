import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => (
    <div> 
        <h1>No Loan Pay</h1>
        <h3>You will never pay shitty money anymore!</h3>

        <NavLink to="/" activeClassName="is-active" exact={true}><button type="button" className="btn btn-primary mx-1">My Current Loan</button></NavLink> 
        <NavLink to="/add" ><button type="button" className="btn btn-info mx-1">Add New Loan</button></NavLink> 
    </div>
)

export default Header;