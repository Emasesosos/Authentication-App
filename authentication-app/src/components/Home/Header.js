import React from 'react';
import DevChallenges from '../Svg/DevChallenges';

export const Header = () => {

    return (

        <header className="header__container">
            
            <div className="header__logo">
                <DevChallenges />
            </div>
            
            <div className="personalInfo__estatus">
                <div className="personalInfo__small-image">
                    <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "white", fontSize: "18px"}}>camera_alt</i>
                    <img src="" alt=""/>
                </div>
                <div className="personalInfo__name">
                    <p>Emmanuel Martínez</p>
                </div>
                <div className="personalInfo__show">
                    <div className="personalInfo__arrow">
                        <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "black", fontSize: "15px"}}>expand_more</i>
                    </div>
                </div>
            </div>

        </header>

    );

};
