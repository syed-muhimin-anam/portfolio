import { Fade } from 'react-awesome-reveal';
import project1 from '../assets/projects/projects1.jpeg';

const Details = () => {
    return (
        <div className='min-h-screen flex justify-center items-center mt-16'>
            <div className="rounded-lg overflow-hidden transition-transform space-y-7">
                <Fade>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center bg-gradient-to-r from-sky-200 to-indigo-300">
                        {/* Image Section */}
                        <figure className="p-6">
                            <img
                                className="w-full rounded-xl border-4 border-blue-200 shadow-md"
                                src={project1}
                                alt="Homepage of the Gadget Heaven project"
                            />
                            <div className='mt-5'>
                            <h3 className="text-blue-500 text-xl font-bold mb-2">
                                Project Link:{' '}
                                <a
                                    href="https://sm-anam-assgn8-b10-gadgetheaven.netlify.app/"
                                    className="text-black underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.Gadget-Heaven.com
                                </a>
                            </h3>
                            <h3 className="text-blue-500 text-xl font-bold mb-6">
                                GitHub Repository:{' '}
                                <a
                                    href="https://github.com/username/gadget-heaven"
                                    className="text-black underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Repository
                                </a>
                            </h3>
                            </div>
                        </figure>

                        {/* Content Section */}
                        <div className="col-span-2 p-6">
                            <h2 className="text-blue-600 text-3xl font-bold mb-4">
                                Gadget Heaven
                            </h2>
                            
                            <p className="text-gray-700 mb-4 leading-relaxed">
                            <span className='text-blue-500 text-xl font-bold'>Main Technology Stack:</span> {' '}
                            I use HTML5 and CSS3 to build well-structured, responsive web pages, with JavaScript (ES6+) for dynamic functionality. My frontend projects are built with ReactJS, using React Router for smooth navigation. For backend services, I rely on Firebase for authentication, hosting, and real-time data. I also use DaisyUI, a Tailwind CSS-based component library, to create clean and consistent user interfaces.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                            <span className='text-blue-500 text-xl font-bold'>Project Details:</span> {' '}
                               Gadget Heaven is a platform for discovering a wide range of
                                electrical gadgets. Users can browse products by category, view
                                detailed descriptions, and add items to their wishlist or cart.
                                Additionally, the dashboard enables users to manage their items
                                efficiently by viewing the total price and removing products as needed.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                            <span className='text-blue-500 text-xl font-bold'>Challenges Faced While Developing the Project:</span> {' '}
                            While working on the project, I occasionally found it challenging to implement exactly what I envisioned. At times, I forgot specific pieces of code or struggled to recall the right approach. Debugging errors also took longer than expected, especially when I got stuck and couldn’t immediately find a solution. Reaching the desired outcome sometimes felt difficult and required extra effort and research. Additionally, managing time effectively was another hurdle, as balancing multiple tasks while learning new concepts occasionally slowed down progress.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                            <span className='text-blue-500 text-xl font-bold'>Potential Improvements & Future Plans:</span> {' '}
                            In the future, I plan to enhance the frontend by improving animations, optimizing color combinations, and ensuring better responsiveness across all devices. I also aim to make the interface more user-friendly and intuitive, providing a smoother and more engaging experience for users.
                             </p>
                          
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Details;
