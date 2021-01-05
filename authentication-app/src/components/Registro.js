import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';
import { getData } from '../redux/actions/profile';
import DevChallenges from './Svg/DevChallenges';
import SocialNetworks from './SocialNetworks';

const Registro = () => {

    const dispatch = useDispatch();

    const initialForm = {
        email: 'correo@correo.com',
        password: '123456',
    };

    const [ formValues, handleInputChange ] = useForm(initialForm);

    const { email, password } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(formValues);
        if(password.length < 6) {
            return Swal.fire('Error', 'La contraseña debe de ser de al menos 6 caracteres', 'error');
        }
        console.log(formValues);
        dispatch(getData(email, password));
    };

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
                        onSubmit={ handleRegister }
                    >
                        <div className="registro__email">
                            <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "#828282"}}>email</i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="email"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="registro__password">
                            <i className="material-icons md-dark md-inactive registro__password-icon" style={{color: "#828282"}}>https</i>
                            <input
                                type="password"
                                placeholder="Password" 
                                name="password"
                                className="password"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="">
                            <input 
                                type="submit" 
                                className="registro__btn" 
                                value="Start coding now" 
                            />
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