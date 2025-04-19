import React from 'react';
import project1 from '../../assets/projects/projects1.jpeg';
import project2 from '../../assets/projects/projects2.jpeg';
import project3 from '../../assets/projects/projects3.jpeg';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
        <div className="py-10" id='projects'>
            <h1 className="text-5xl text-blue-700 font-bold text-center mb-10">
                My Projects
            </h1>
            <div className="container mx-auto px-6">
                <div className="rounded-lg overflow-hidden transition-transform space-y-7">
                    <Fade direction="right" delay={100}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
                            {/* Project 1 */}
                            <div className="card card-compact bg-gradient-to-r from-sky-300 to-indigo-400 w-96 shadow-xl mx-auto">
                                <figure>
                                    <img
                                        src={project1}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Gadget Heaven</h2>
                                   
                                    <div className="card-actions ">
                                        <Link to={'/details'}><button className="btn btn-primary">View More</button></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="card card-compact bg-gradient-to-r from-sky-300 to-indigo-400 w-96 shadow-xl mx-auto">
                                <figure>
                                    <img
                                        src={project2}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Dream Sports Shop</h2>
                                   
                                    <div className="card-actions">
                                        <Link to={'/details2'}><button className="btn btn-primary">View More</button></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="card card-compact bg-gradient-to-r from-sky-300 to-indigo-400 w-96 shadow-xl mx-auto">
                                <figure>
                                    <img
                                        src={project3}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Peddy Store</h2>
                                   
                                    <div className="card-actions">
                                        <Link to={'/details3'}><button className="btn btn-primary">View More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
