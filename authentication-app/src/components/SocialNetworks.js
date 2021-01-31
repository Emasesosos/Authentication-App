import React from 'react';
import { useDispatch } from 'react-redux';
import { searchUserSn } from '../redux/actions/auth-sn';
// import { Facebook } from './Svg/Facebook';
// import { Github } from './Svg/Github';
import { Google } from './Svg/Google';
// import { Twitter } from './Svg/Twitter';

const SocialNetworks = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        dispatch(searchUserSn());
    };

    return (

        <div className="socialNet__iconos-sn">
            <div 
                className="socialNet__google"
                onClick= { handleGoogleLogin }
            >
                <Google />
            </div>
            {/* <div className="socialNet__facebook">
                <Facebook />
            </div>
            <div className="socialNet__twitter">
                <Twitter />
            </div>
            <div className="socialNet__github">
                <Github />
            </div>             */}
        </div>

    );

};

export default SocialNetworks;