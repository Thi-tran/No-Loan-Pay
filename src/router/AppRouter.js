import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../component/Header';
import AddLoanPage from '../component/AddLoanPage';
import CurrentLoanPage from '../component/CurrentLoanPage';
import NotFoundPage from '../component/NotFoundPage';
const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={CurrentLoanPage} exact={true} />
                <Route path="/add" component={AddLoanPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;