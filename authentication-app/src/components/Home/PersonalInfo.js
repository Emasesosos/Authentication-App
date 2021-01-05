import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { OptionsProfile } from './OptionsProfile';

const PersonalInfo = () => {

    const  { name, bio, phone, email, password }  = useSelector(state => state.profileInfo);

    return (
        <div className="personalInfo_container">

            <Header />

            { true === true ? <OptionsProfile /> : null }
            
            <main className="personalInfo__main">
                <div className="personalInfo__title">
                    <h2>Personal info</h2>
                    <p>Basic info, like your name and photo</p>
                </div>

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
                            <div className="img-container">
                                <div className="img">
                                    <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "white", fontSize: "30px"}}>camera_alt</i>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="personalInfo__row name-container">
                            <div className="name">
                                <h4>NAME</h4>
                            </div>
                            <div className="names">
                                <p>Emmanuel Martínez</p>
                            </div>
                        </div>
                        <div className="personalInfo__row bio-container">
                            <div className="bio">
                                <h4>BIO</h4>
                            </div>
                            <div className="bios">
                                <p>I am a software developer and a big fan of devchallenges...</p>
                            </div>
                        </div>
                        <div className="personalInfo__row phone-container">
                            <div className="phone">
                                <h4>PHONE</h4>
                            </div>
                            <div className="phones">
                                <p>908249274292</p>
                            </div>
                        </div>
                        <div className="personalInfo__row email-container">
                            <div className="email">
                                <h4>EMAIL</h4>
                            </div>
                            <div className="emails">
                                <p>emasesosos@gmail.com</p>
                            </div>
                        </div>
                        <div className="personalInfo__row password-container">
                            <div className="password">
                                <h4>PASSWORD</h4>
                            </div>
                            <div className="passwords">
                                <p>************</p>
                            </div>
                        </div>
                        <Footer />
                    </div>                        
                </div>
            </main> 

            
        </div>
    );
};

export default PersonalInfo;
