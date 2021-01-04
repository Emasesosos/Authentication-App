import React from 'react';
import { Link } from 'react-router-dom';
import DevChallenges from './Svg/DevChallenges';
import SocialNetworks from './SocialNetworks';

const Registro = () => {
    return (
        <div className="registro__container">
            <div className="registro__register">
                <div className="registro__center">
                    <div className="registro__logo">
                        <DevChallenges />
                    </div>
                    <div className="registro__titles">
                        <h3>Join thousands of learners from around the world</h3>
                        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                    </div>

                    <form
                        // onSubmit={ handleRegister }
                    >
                        <div className="registro__email">
                            <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "#828282"}}>email</i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="email"
                                // value={ email }
                                // onChange={ handleInputChange }
                            />
                        </div>
                        <div className="registro__password">
                            <i className="material-icons md-dark md-inactive registro__password-icon" style={{color: "#828282"}}>https</i>
                            <input
                                type="password"
                                placeholder="Password" 
                                name="password1"
                                className="password"
                                // value={ password1 }
                                // onChange={ handleInputChange }
                            />
                        </div>
                        <div className="">
                            <input 
                                type="submit" 
                                className="registro__btn" 
                                value="Start coding now" />
                        </div>
                    </form>

                    <div className="registro__social-networks">
                        <span>or continue with these social profile</span>
                        <SocialNetworks />
                        <div className="registro__login">
                            <span>Adready a member?</span>
                            <Link 
                                // to="/auth/login"
                                to="/login"
                                className=""
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
                <div className="footer__footer">
                    <a href="https://github.com/Emasesosos">@Emasesosos</a>
                    <a href="https://devchallenges.io/">devchallenges.io</a>
                </div>
            </div>
        </div>
    );
};

export default Registro;