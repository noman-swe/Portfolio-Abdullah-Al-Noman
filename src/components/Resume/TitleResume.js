import React from 'react';

const TitleResume = ({ title, subTitle }) => {
    return (
        <div>
            <div className="py-12 font-titleFont gap-4">
                <p className='text-sm text-designColor tracking-[4px] uppercase'>{subTitle}</p>
                <h2 className='text-4xl font-bold capitalize'>{title}</h2>
            </div>
        </div>
    );
};

export default TitleResume;