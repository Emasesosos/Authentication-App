import React from 'react';
import { Link } from 'react-router-dom';
import DevChallenges from '../Svg/DevChallenges';

const PersonalInfo = () => {
    return (
        <div className="personalInfo_container">

            <div className="caja1">
                <DevChallenges />
                <p>Imagen</p>
            </div>

            <div className="caja2">
                <div className="caja3">
                    Caja 3
                </div>
                <div className="caja4">
                    <div className="caja5">
                        <div className="caja6">
                            <div className="cajas">
                                <div className="profile">
                                    <h4>Profile</h4>
                                    <p>Some Info may be visible to other people</p>
                                </div>
                                <div className="edit">
                                    <Link to="/edit">
                                        Edit
                                    </Link>
                                </div>
                            </div>
                            <div className="cajas"></div>
                            <div className="cajas"></div>
                            <div className="cajas"></div>
                            <div className="cajas"></div>
                            <div className="cajas"></div>
                            <div className="cajas"></div>
                        </div>
                        <div className="footer__footer">
                            <a href="https://github.com/Emasesosos">@Emasesosos</a>
                            <a href="https://devchallenges.io/">devchallenges.io</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        
            {/* 

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

            */}

        </div>
    );
};

export default PersonalInfo;
