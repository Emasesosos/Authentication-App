import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptionsProfile } from './OptionsProfile';
import { Footer } from './Footer';
import { getOptionsProfileFalse } from '../../redux/actions/profile';

const PersonalInfoEdicion = () => {

    const [image, setImage] = useState({
        imageUrl: 'https://res.cloudinary.com/emasesosos/image/upload/v1610838658/addImage_siw6ys.png'
    });

    const dispatch = useDispatch();

    const  { name, bio, phone, email, password, optionProfile }  = useSelector(state => state.profileInfo);

    useEffect(() => {
        dispatch(getOptionsProfileFalse());
    }, [dispatch]);

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
                            // onSubmit={ handleRegister }
                        >
                            <div className="edicion__img">
                                <div className="custom-file">
                                    <i className="material-icons md-dark md-inactive registro__email-icon" style={{color: "white", fontSize: "20px"}}>camera_alt</i>
                                    <img src={image.imageUrl} alt=""/>
                                    <input 
                                        type="file" 
                                        name="image" 
                                        className="custom-file-input" 
                                        id="inputGroupFile01"
                                        // value={ image }
                                        // onChange={ handleInputChange }
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
                                    // value={ name }
                                    // onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Bio</label>
                                <textarea 
                                    // value={bio} 
                                    // onChange={this.handleChange} 
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
                                    // value={ phone }
                                    // onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email..."
                                    name="email"
                                    className="edicion__control"
                                    // value={ email }
                                    // onChange={ handleInputChange }
                                />
                            </div>
                            <div className="edicion__group">
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your New Password..."
                                    name="phone"
                                    className="edicion__control"
                                    // value={ password }
                                    // onChange={ handleInputChange }
                                />
                            </div>
                            <div className="">
                                <input 
                                    type="submit" 
                                    className="edicion__btn" 
                                    value="Save" />
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
