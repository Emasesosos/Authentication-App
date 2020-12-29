import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/devchallenges.svg';
import google from './../assets/Google.svg';
import facebook from './../assets/Facebook.svg';
import twitter from './../assets/Twitter.svg';
import github from './../assets/Github.svg';

const Registro = () => {
    return (
        <div className="registro__container">
            <div className="registro__center">
                <div className="registro__img">
                    <img src={logo} alt={logo}/>
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
                    <div className="registro_iconos-sn">
                        <div className="registro__icono sn-google">
                            <img src={google} alt="icono-google"/>
                        </div>
                        <div className="registro__icono sn-facebook">
                            <img src={facebook} alt="icono-facebook"/>
                        </div>
                        <div className="registro__icono sn-twitter">
                            <img src={twitter} alt="icono-twitter"/>
                        </div>
                        <div className="registro__icono sn-github">
                            <img src={github} alt="icono-github"/>
                        </div>
                    </div>
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
        </div>
    );
};

export default Registro;
