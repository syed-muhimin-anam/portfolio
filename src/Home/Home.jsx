import React from 'react';
import Banner from './Banner';
import AboutMe from './about me/AboutMe';
import Skills from './skills/Skills';
import MyProjects from './projects/MyProjects';
import Contact from './contact/Contact';
import Education from './Education';

const Home = () => {
    return (
        <div className=''>


            <Banner></Banner>

            <AboutMe></AboutMe>

            <Skills></Skills>

           <div className='w-11/12 mx-auto'>
           <Education></Education>
           </div>

            <MyProjects></MyProjects>

            <Contact></Contact>

        </div>
    );
};

export default Home;