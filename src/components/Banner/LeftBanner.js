import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';


const LeftBanner = () => {
    
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Font-End Developer.", "Problem Solver."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })

    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal uppercase'>WELLcome TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    {" "}
                    Hi, I'm {' '}
                    <p className='text-designColor capitalize'>abdullah al noman</p>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a {" "}
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking='false'
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I use animation as a third dimension by which to simplify experiences and kuiding through each and every interaction. I'm not adding motion just to spruce things up, nut doing it in ways that.
                </p>
            </div>
            {/* banner footer */}
            <div className='banner-footer flex justify-between'>

                <div className='find-me-in'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find Me In</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaFacebookF />
                        </span>
                        <span className='bannerIcon'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>

                <div className='Skills'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Best Skill On</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiNextdotjs />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBanner;