import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gradient-to-r from-sky-300 to-indigo-400 text-base-content p-4 text-center">
            <aside>
                <p className='text-black'>
                    &copy; {new Date().getFullYear()} - All rights reserved by{' '}
                    <span className="font-semibold">ANAM Portfolio Ltd</span>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
