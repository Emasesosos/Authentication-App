import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import PersonalInfo from '../components/Home/PersonalInfo';
import PersonalInfoEdicion from '../components/Home/PersonalInfoEdicion';
import { Spinner } from '../components/loading/Spinner';
import { startChecking } from '../redux/actions/auth';




const AppRouter = () => {

    const dispatch = useDispatch(); 
    const { checking, uid }= useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if(checking) {
        return (<Spinner />);
    }

    return (
        <Router>
            <div className="appRouter__container">
                <Switch>
                    {/*
                    <Route exact path="/registro" component={ Registro } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/" component={ PersonalInfo } />
                    <Route exact path="/edit" component={ PersonalInfoEdicion } />
                    <Redirect to="/" />
                    */}

                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ !!uid }
                    />
                    
                    <PrivateRoute
                        exact
                        path="/" 
                        component={ PersonalInfo }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/edit" 
                        component={ PersonalInfoEdicion }
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;