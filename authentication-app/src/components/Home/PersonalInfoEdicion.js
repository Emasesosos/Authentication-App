import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import useForm from '../../hooks/useForm';
import { Header } from './Header';
import { OptionsProfile } from './OptionsProfile';
import { Footer } from './Footer';
import { getData, getOptionsProfileFalse, updateProfile } from '../../redux/actions/profile';


const PersonalInfoEdicion = () => {

    const dispatch = useDispatch();

    const  { uid }  = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getData(uid));
    }, [dispatch, uid]);

    const  { imageUrl, name, bio, phone, email,  optionProfile }  = useSelector(state => state.profileInfo);

    useEffect(() => {
        dispatch(getOptionsProfileFalse());
    }, [dispatch]);

    const initialForm = {
        name,
        bio,
        phone,
        email,
        password: '',
    };

    const [ formValues, handleInputChange ] = useForm(initialForm);

    // let history = useHistory();

    const handleEditUser = async (e) => {
        e.preventDefault();

        if(formValues.password.length < 6) {
            return Swal.fire('Error', 'La contraseña debe de ser de al menos 6 caracteres', 'error');
        }

        const url = `http://localhost:4000/api/user/${uid}`;
        const token = localStorage.getItem('token') || '';
        console.log('Edicion Url: ', url);

        let formDataImage = new FormData();
        const fileField = document.querySelector("input[type='file']");

        formDataImage.append('imageUrl', fileField.files[0]);
        const estatusImage = formDataImage.getAll('imageUrl');

        let formDataFinal = new FormData();

        if(estatusImage[0] === "undefined") {
            formDataFinal.append('imageUrl', imageUrl);
        } else {
            formDataFinal.append('imageUrl', fileField.files[0]);
        }

        formDataFinal.append('name', formValues.name);
        formDataFinal.append('bio', formValues.bio);
        formDataFinal.append('phone', formValues.phone);
        formDataFinal.append('email', formValues.email);
        formDataFinal.append('password', formValues.password);

        console.log(formDataFinal.getAll('imageUrl'));

        const resp = await fetch(url, {
            body: formDataFinal,
            method: 'PUT',
            headers: {
                'x-token': token
            }
        });

        const body = await resp.json();
        console.log('body: ', body);

        // dispatch(updateProfile(formData, formValues.uid));
        // // history.push('/');
    };

    return (

        <div className="edicion__container">

            <Header />

            { optionProfile && <OptionsProfile /> }

            <main className="caja0">

                <div className="caja1">

                    <div className="caja2">
                        <div className="edicion__back">
                            <Link to="/">
                                <i className="material-icons md-dark md-inactive" style={{color: "#2D9CDB", fontSize: "26px"}}>keyboard_arrow_left</i>
                                Back
                            </Link>
                        </div>
                    </div>

                    <div className="caja3">

                        <div className="edicion__title">
                            <h2>Change Info</h2>
                            <p>Changes will be reflected to every services</p>
                        </div>

                        <form
                            onSubmit={ handleEditUser }
                        >
                            <div className="edicion__img">
                                <div className="custom-file">
                                    <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "white", fontSize: "20px"}}>camera_alt</i>
                                    <img src={ imageUrl } alt=""/>
                                    <input 
                                        type="file" 
                                        name="imageUrl" 
                                        className="custom-file-input" 
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="edicion__img-text">
                                    <p>Change Photo</p>
                                </div>
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name..."
                                    name="name"
                                    className="edicion__control"
                                    value={ formValues.name }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Bio</label>
                                <textarea 
                                    value={ formValues.bio } 
                                    onChange={ handleInputChange } 
                                    placeholder="Enter Your Bio..."
                                    name="bio"
                                    className="edicion__textarea"
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Phone</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Phone..."
                                    name="phone"
                                    className="edicion__control"
                                    value={ formValues.phone }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email..."
                                    name="email"
                                    className="edicion__control"
                                    value={ formValues.email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your New Password..."
                                    name="password"
                                    className="edicion__control"
                                    value={ formValues.password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="">
                                <input 
                                    type="submit" 
                                    className="edicion__btn" 
                                    value="Save" 
                                />
                            </div>
                        </form>

                    </div>

                    <Footer/>

                </div>

            </main>

        </div>

    );

};

export default PersonalInfoEdicion;
