import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../component/Header';
import AddLoanPage from '../Pages/AddLoanPage';
import CurrentLoanPage from '../Pages/CurrentLoanPage';
import NotFoundPage from '../Pages/NotFoundPage';

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