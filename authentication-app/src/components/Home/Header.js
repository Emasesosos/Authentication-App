import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOptionsProfileFalse, getOptionsProfileTrue } from '../../redux/actions/profile';
import DevChallenges from '../Svg/DevChallenges';

export const Header = () => {

    const [image, setImage] = useState({
        imageUrl: 'https://res.cloudinary.com/emasesosos/image/upload/v1610838658/addImage_siw6ys.png'
    });

    const dispatch = useDispatch();
    const  { optionProfile }  = useSelector(state => state.profileInfo);

    const [getClass, setGetClass] = useState('');

    const handleExpandOptions = () => {
        if(optionProfile === false) {
            dispatch(getOptionsProfileTrue());
        } else {
            dispatch(getOptionsProfileFalse());
        }
    };

    useEffect(() => {

        if(optionProfile) {
            setGetClass('giro_expand_more');
        } else {
            setGetClass('');
        }

    }, [optionProfile]);

    return (

        <header className="header__container">
            
            <div className="header__logo">
                <DevChallenges />
            </div>
            
            <div className="personalInfo__estatus">
                <div className="personalInfo__small-image">
                    <img src={image.imageUrl} alt=""/>
                </div>
                <div className="personalInfo__name">
                    <p>Emmanuel Martínez</p>
                </div>
                <div className="personalInfo__show">
                    <div 
                        className="personalInfo__arrow"
                        onClick={ handleExpandOptions }
                    >
                        <i className={`material-icons md-dark md-inactive registro__email-icon ${getClass}`} style={{color: "black", fontSize: "15px"}}>expand_more</i>
                    </div>
                </div>
            </div>

        </header>

    );

};
