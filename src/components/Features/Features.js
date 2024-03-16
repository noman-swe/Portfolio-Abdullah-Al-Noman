import React from 'react';
import Title from '../SharedLayouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';


const Features = () => {
    return (
        <section id='features' className='w-full  py-20 flex flex-col border-b-[1px] border-b-black'>
            <Title title="Features" des="What i do"></Title>
            {/*  */}
            
            <div className='grid grid-cols-3 gap-20'>
                <Card
                    title="Business Sratagy"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<FaBars />}
                />
                <Card
                    title="App Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<AiFillAppstore />}
                />
                <Card
                    title="Seo Optimisation"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<SiProgress />}
                />
                <Card
                    title="Mobile Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<FaMobile />}
                />

                <Card
                    title="UX Design"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<SiAntdesign />}
                />
                <Card
                    title="Hosting Website"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur numquam cupiditate odit hic! Id!"
                    icon={<FaGlobe />}
                />
               
            </div>
        </section>
    );
};

export default Features;