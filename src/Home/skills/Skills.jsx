import React from 'react';
import Marquee from 'react-fast-marquee';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import tailwind from '../../assets/skills/tailwind.png';
import js from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import mongo from '../../assets/skills/Screenshot_2025-01-04_184210-removebg-preview.png';
import firebase from '../../assets/skills/firebase.png';

const Skills = () => {
    return (
    <div className="py-16 bg-gradient-to-r" id='skills'>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">My Skills</h1>
            <p className="text-xl text-center mb-8">I am proficient in the following technologies:</p>
            
            <Marquee speed={100} className="space-x-8">
                <div className="flex items-stretch justify-center space-x-10 ">
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4 " src={html} alt="HTML" />
                        <h2 className="text-lg font-semibold text-blue-600">HTML</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="100" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>100%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={css} alt="CSS" />
                        <h2 className="text-lg font-semibold text-blue-600">CSS</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="100" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>100%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={tailwind} alt="Tailwind" />
                        <h2 className="text-lg font-semibold text-blue-600">Tailwind</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="100" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>100%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={js} alt="JavaScript" />
                        <h2 className="text-lg font-semibold text-blue-600">JavaScript</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="90" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>90%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={react} alt="React" />
                        <h2 className="text-lg font-semibold text-blue-600">React</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="80" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>80%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={firebase} alt="Firebase" />
                        <h2 className="text-lg font-semibold text-blue-600">Firebase</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="90" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>90%</p>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg ">
                        <img className="w-32 md:w-52 lg:w-72 mx-auto mb-4" src={mongo} alt="MongoDB" />
                        <h2 className="text-lg font-semibold text-blue-600">MongoDB</h2>
                        <h1 className='text-blue-700 text-lg'>0 <progress className="progress progress-info w-20 md:w-32 lg:w-56" value="90" max="100"></progress> 100</h1>
                        <p className='text-2xl text-blue-700 font-bold'>90%</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;
