import React from 'react';
import { Link } from 'react-router-dom';
import DevChallenges from './Svg/DevChallenges';
import SocialNetworks from './SocialNetworks';

const Login = () => {

    return (
        <div className="login__container">

            <div className="login__login">

                <div className="login__center">

                    <DevChallenges />
                    <div className="login__titles">
                        <h3>Login</h3>
                    </div>

                    <form
                        // //onSubmit={ handleLogin }
                    >
                        <div className="login__email">
                            <i className="material-icons md-dark md-inactive login__email-icon" style={{color: "#828282"}}>email</i>
                            <input 
                                type="email"
                                className="email"
                                placeholder="Email"
                                name="email"
                                // //value={ email }
                                // //onChange={ handleInputChange }
                            />
                        </div>
                        <div className="login__password">
                            <i className="material-icons md-dark md-inactive login__password-icon" style={{color: "#828282"}}>https</i>
                            <input
                                type="password"
                                className="password"
                                placeholder="Password"
                                name="password"
                                // //value={ password }
                                // //onChange={ handleInputChange }
                            />
                        </div>
                        <div className="">
                            <input 
                                type="submit"
                                className="login__btn"
                                value="Login" 
                            />
                        </div>
                    </form>

                    <div className="login__social-networks">
                        
                        <span>or continue with these social profile</span>
                        <SocialNetworks />
                        <div className="login__register">
                            <span>Don´t have an account yet?</span>
                            <Link 
                                // to="/auth/login"
                                to="/registro"
                                className=""
                            >
                                Register
                            </Link>
                        </div>

                    </div>
                    
                </div>

            </div>

            {/* <div className="footer__footer">
                <a href="https://github.com/Emasesosos">@Emasesosos</a>
                <a href="https://devchallenges.io/">devchallenges.io</a>
            </div> */}

        </div>

    );

};

export default Login;
