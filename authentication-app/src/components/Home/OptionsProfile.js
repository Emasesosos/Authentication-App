import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { startLogout } from '../../redux/actions/auth';

export const OptionsProfile = () => {

    const dispatch = useDispatch();

    let history = useHistory();

    const handleMyProfile = () => {
        history.push('/');
    };

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (

        <div className="optionsProfile__container">
            <div 
                className="optionsProfile__myProfile"
                onClick={ handleMyProfile }
            >
                <div className="optionsProfile__account-circle">
                    <i className="material-icons md-dark md-inactive" style={{color: "#4F4F4F", fontSize: "16.67px"}}>account_circle</i>
                </div>
                <p>My Profile</p>
            </div>
            <hr/>
            <div 
                className="optionsProfile__logout"
                onClick={ handleLogout }
            >
                <div className="optionsProfile__exit-to-app">
                    <i className="material-icons md-dark md-inactive" style={{color: "red", fontSize: "15px"}}>exit_to_app</i>
                </div>
                <p>Logout</p>
            </div>
        </div>

    );

};
