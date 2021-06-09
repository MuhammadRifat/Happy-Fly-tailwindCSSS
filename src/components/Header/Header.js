import React from 'react';

const Header = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-red-500 text-white relative shadow-md font-mono" role="navigation">
            <h1 className="ml-5 font-bold text-3xl">Happy Fly</h1>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden text-xl">
                <a href="#" className="p-4">Home</a>
                <a href="#" className="p-4">About</a>
                <a href="#" className="p-4">Contact</a>
                <a href="#" className="p-4">Blogs</a>
            </div>
        </nav>
    );
};

export default Header;