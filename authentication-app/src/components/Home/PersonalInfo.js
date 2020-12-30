import React from 'react';
import DevChallenges from '../Svg/DevChallenges';

const PersonalInfo = () => {
    return (
        <div className="personalInfo_container">
            <header className="header__container">
                <DevChallenges />
                <p>Imagen</p>
            </header>
            <main className="personalInfo__main">
                <div className="personalInfo__title">
                    <h2>Personal info</h2>
                    <p>Basic info, like your name and photo</p>
                </div>
                <div className="personalInfo__profile">
                    <div className="table">Table</div>
                </div>
            </main>

        </div>
    );
};

export default PersonalInfo;
