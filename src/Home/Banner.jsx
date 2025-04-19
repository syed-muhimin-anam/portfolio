import React from 'react';
import bannerImg from '../assets/image/banner.png'
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Banner = () => {
    const handleResume = () =>{
        Swal.fire({
            title: "Sorry!",
            text: "My Resume is not available yet!",
            icon: "error"
          });
    }
    return (
        <div className="hero bg-base-200  mt-16 lg:mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Fade duration={3000}>
                    <img
                        src={bannerImg}
                        className="max-w-full lg:max-w-lg rounded-3xl shadow-2xl" />
                </Fade>

                <div className="text-center lg:text-left lg:ml-10">
                    <TypeAnimation
                        sequence={[
                            'Hi everyone. I am Muhimin Anam....',
                            4000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        speed={39}
                        className="text-blue-600"
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">A Full Stack Developer. <br /> Based in Bangladesh.</h1>
                    <p className="py-6 text-sm sm:text-base lg:text-lg">
                        I am a frontend and backend web developer. I am passionate about creating websites that not only meet functional requirements but also delight users and evoke emotional attachment.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-x-4 mb-4">
                        <span className="text-xl">Find me on:</span>
                        <a className='text-3xl sm:text-4xl text-blue-500' href="https://www.facebook.com/syedmuhimin.anam/" target='_blank'>
                            <FaFacebook />
                        </a>
                        <a className='text-3xl sm:text-4xl text-red-500' href="https://www.instagram.com/syedmuhiminanam/?hl=en" target='_blank'>
                            <FaInstagram />
                        </a>
                        <a className='text-3xl sm:text-4xl text-white' href="https://github.com/syed-muhimin-anam" target='_blank'>
                            <FaGithub />
                        </a>
                        <a className='text-3xl sm:text-4xl text-white' href="https://www.linkedin.com/in/syed-muhimin-anam/" target='_blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <button onClick={handleResume} className="btn bg-blue-700 text-white mt-5 px-8 py-3 text-sm sm:text-base">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
