import React from 'react';

export const OptionsProfile = () => {

    return (

        <div className="optionsProfile__container">
            <div className="optionsProfile__myProfile">
                <div className="optionsProfile__account-circle">
                    <i className="material-icons md-dark md-inactive" style={{color: "#4F4F4F", fontSize: "16.67px"}}>account_circle</i>
                </div>
                <p>My Profile</p>
            </div>
            <hr/>
            <div className="optionsProfile__logout">
                <div className="optionsProfile__exit-to-app">
                    <i className="material-icons md-dark md-inactive" style={{color: "red", fontSize: "15px"}}>exit_to_app</i>
                </div>
                <p>Logout</p>
            </div>
        </div>

    );

};
