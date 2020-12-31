import React from 'react';
import { Link } from 'react-router-dom';
import DevChallenges from '../Svg/DevChallenges';

const PersonalInfo = () => {
    return (
        <div className="personalInfo_container">

            <header className="personalInfo__header">
                <DevChallenges />
                <p>Imagen</p>
            </header>

            <main className="personalInfo__main">
                <div className="personalInfo__title">
                    <h2>Personal info</h2>
                    <p>Basic info, like your name and photo</p>
                </div>
                <div className="personalInfo__profile">
                    <div className="personalInfo__columnInfo">
                        <div className="personalInfo__informacion">
                            <div className="personalInfo__row profile-container">
                                <div className="profile">
                                    <h4>Profile</h4>
                                    <p>Some Info may be visible to other people</p>
                                </div>
                                <div className="btn_edit">
                                    <Link to="/edit">
                                        Edit
                                    </Link>
                                </div>
                            </div>
                            <div className="personalInfo__row photo-container">
                                <div className="photo">
                                    <h4>PHOTO</h4>
                                </div>
                                <div className="img">
                                    <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "white", fontSize: "30px"}}>camera_alt</i>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="personalInfo__row name-container"></div>
                            <div className="personalInfo__row bio-container"></div>
                            <div className="personalInfo__row phone-container"></div>
                            <div className="personalInfo__row email-container"></div>
                            <div className="personalInfo__row password-container"></div>
                        </div>
                        <div className="footer__footer">
                            <a href="https://github.com/Emasesosos">@Emasesosos</a>
                            <a href="https://devchallenges.io/">devchallenges.io</a>
                        </div>
                    </div>
                </div>
            </main> 

        </div>
    );
};

export default PersonalInfo;
