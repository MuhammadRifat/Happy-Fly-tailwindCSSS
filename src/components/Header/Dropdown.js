import React from 'react';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 bg-yellow-500 px-1' : 'hidden'} onClick={toggle}>
            <a href="#" className="p-4">Home</a>
            <a href="#" className="p-4">About</a>
            <a href="#" className="p-4">Contact</a>
            <a href="#" className="p-4">Blogs</a>
        </div>
    );
};

export default Dropdown;