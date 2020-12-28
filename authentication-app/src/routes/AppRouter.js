import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Registro from '../components/Registro';
import Login from '../components/Login';
import PersonalInfo from '../components/Home/PersonalInfo';
import PersonalInfoEdicion from '../components/Home/PersonalInfoEdicion';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/registro" component={ Registro } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/" component={ PersonalInfo } />
                    <Route exact path="/edit" component={ PersonalInfoEdicion } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;