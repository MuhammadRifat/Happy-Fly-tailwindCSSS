import React from 'react';

const Footer = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-red-500 lg:px-36 mt-12 text-white">
            <div className="p-4">
                <h1 className="text-xl my-5">LINKS</h1>
                <a href="#">FAQ</a><br/>
                <a href="#">Help</a><br/>
                <a href="#">Support</a><br/>
            </div>

            <div className="p-4">
                <h1 className="text-xl my-5">LEGAL</h1>
                <a href="#">Terms</a><br/>
                <a href="#">Privacy</a><br/>
            </div>

            <div className="p-4">
                <h1 className="text-xl my-5">SOCIAL</h1>
                <a href="#">Facebook</a><br/>
                <a href="#">LinkedIn</a><br/>
                <a href="#">Twitter</a><br/>
            </div>

            <div className="p-4">
                <h1 className="text-xl my-5">COMPANY</h1>
                <a href="#">Official Blog</a><br/>
                <a href="#">About us</a><br/>
                <a href="#">Contact</a><br/>
            </div>
        </div>
    );
};

export default Footer;