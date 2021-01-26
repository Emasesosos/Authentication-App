import React from 'react';
import { useDispatch } from 'react-redux';
import { searchUserSn } from '../redux/actions/auth-sn';
import { Facebook } from './Svg/Facebook';
import { Github } from './Svg/Github';
import { Google } from './Svg/Google';
import { Twitter } from './Svg/Twitter';

const SocialNetworks = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        const socialNetwork = 'google';
        dispatch(searchUserSn(socialNetwork));
    };

    const handleTwitterLogin = () => {
        const socialNetwork = 'twitter';
        dispatch(searchUserSn(socialNetwork));
    };

    return (

        <div className="socialNet__iconos-sn">
            <div 
                className="socialNet__google"
                onClick= { handleGoogleLogin }
            >
                <Google />
            </div>
            <div className="socialNet__facebook">
                <Facebook />
            </div>
            <div 
                className="socialNet__twitter"
                onClick= { handleTwitterLogin }
            >
                <Twitter />
            </div>
            <div className="socialNet__github">
                <Github />
            </div>            
        </div>

    );

};

export default SocialNetworks;