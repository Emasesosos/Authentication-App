import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData, getOptionsProfileFalse } from '../../redux/actions/profile';
import { Spinner } from '../loading/Spinner';
import { Footer } from './Footer';
import { Header } from './Header';
import { OptionsProfile } from './OptionsProfile';

const PersonalInfo = () => {

    const dispatch = useDispatch();

    const  { uid }  = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOptionsProfileFalse());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getData(uid));
    }, [dispatch, uid]);

    const  { imageUrl, name, bio, phone, email, optionProfile, updateProfile }  = useSelector(state => state.profileInfo);

    return (
        <div className="personalInfo_container">

            <Header />

            { optionProfile && <OptionsProfile /> }

            { updateProfile && <Spinner /> }
            
            { !updateProfile && 

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
                                        <img src={ imageUrl } alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="personalInfo__row name-container">
                                <div className="name">
                                    <h4>NAME</h4>
                                </div>
                                <div className="names">
                                    <p>{ name }</p>
                                </div>
                            </div>
                            <div className="personalInfo__row bio-container">
                                <div className="bio">
                                    <h4>BIO</h4>
                                </div>
                                <div className="bios">
                                    <p>{ bio }</p>
                                </div>
                            </div>
                            <div className="personalInfo__row phone-container">
                                <div className="phone">
                                    <h4>PHONE</h4>
                                </div>
                                <div className="phones">
                                    <p>{ phone }</p>
                                </div>
                            </div>
                            <div className="personalInfo__row email-container">
                                <div className="email">
                                    <h4>EMAIL</h4>
                                </div>
                                <div className="emails">
                                    <p>{ email }</p>
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

            }

        </div>

    );
    
};

export default PersonalInfo;
