import React from 'react';

import shooting1 from '../../assets/about me/shooting-rifle.jpg';
import shooting2 from '../../assets/about me/national.jpg';
import shooting3 from '../../assets/about me/medal.jpg';
import drawing from '../../assets/about me/art.jpg';
import photography from '../../assets/about me/photography1.jpg';
import photography2 from '../../assets/about me/photography2.jpg';
import photography3 from '../../assets/about me/photography3.jpg';
import travel from '../../assets/about me/hills.jpg';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const handleImage = (image) => {
        Swal.fire({
            imageUrl: image,
            imageWidth: '80%',
            showCloseButton: true,
            showConfirmButton: false,
            imageAlt: "Custom image",
            customClass: {
                popup: 'p-0 bg-transparent shadow-xl',
                closeButton: 'absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 focus:ring-2 focus:ring-red-300'
            },
            buttonsStyling: false
        });
    };

    const imageData = [
        { src: shooting1, alt: 'Anam practicing shooting', caption: 'My 10m air rifle.' },
        { src: shooting2, alt: 'National competition', caption: 'National shooting competition.' },
        { src: shooting3, alt: 'Medal achievement', caption: 'Achieving silver medal in national games.' },
        { src: drawing, alt: 'Art by Anam', caption: 'One of my art pieces.' },
        { src: photography, alt: 'Nature photography', caption: 'My nature photography.' },
        { src: photography3, alt: 'Insect photography', caption: 'My insect photography.' },
        { src: photography2, alt: 'Creative photography', caption: 'My creative photography.' },
        { src: travel, alt: 'Chandranath hill', caption: 'At the top of Chandranath Hill.' },
    ];

    return (
        <div className="py-10">
            <h1 className="text-5xl text-blue-600 font-bold text-center mb-8">About Me</h1>

            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-lg leading-relaxed">
                    <p className="mb-6">
                        Hi! My name is Anam. I'm 24 years old and from Bangladesh. I'm a passionate MERN Stack web developer.
                        My journey in web development began in 2021, but I had to pause my learning for a while.
                        In 2024, I resumed with full dedication and a strong desire to master programming.
                        For me, programming is not just a profession; it’s a challenging, creative, and fulfilling passion.
                    </p>
                    <p className="mb-6">
                        Beyond programming, I’m a professional athlete specializing in shooting sports. I studied at BKSP
                        and have competed at the national level, winning several medals. Besides sports, I have a natural talent for drawing and
                        have participated in numerous art competitions. Mobile photography is another hobby I deeply enjoy, and I love capturing the beauty of everyday life.
                        I’m also an adventurer at heart and enjoy traveling and exploring new places.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl text-center text-blue-500 font-semibold mb-6">A Glimpse of My World</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                            {imageData.map((item, index) => (
                                 <motion.div
                                 key={index}
                                 className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                                 onClick={() => handleImage(item.src)}
                                 initial={{ opacity: 0, y: 100 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: false }}
                                 transition={{ duration: 0.8 }}
                             >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-48 object-cover transition-transform transform  bg-black opacity-60  hover:scale-110"
                                    />
                               
                                   <p className="absolute bottom-4 left-4 text-white text-xl font-bold">{item.caption}</p>
                                   </motion.div>
                            ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
