import React from 'react';
import { bannerImg } from '../../assets/assetsIndex';

const RightBanner = () => {
    return (
        <div className='w-full lg:w-1/2 flex justify-center items-center relative'>
            <img className='w-[300px] lg:w-[500px] h-[400] lg:h-[680px] z-10' src={bannerImg} alt="" />

            <div className='absolute bottom-0 w-[300px] h-[300px] lg:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>

        </div>
    );
};

export default RightBanner;