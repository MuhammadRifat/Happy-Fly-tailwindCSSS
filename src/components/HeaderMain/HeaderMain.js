import React from 'react';

const HeaderMain = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-red-500 lg:p-16">
            <div className="p-4">
                <div className="text-white my-24">
                    <p className="text-xl">What Business are you?</p>
                    <h1 className="text-5xl font-bold my-5">Main Hero Message to sell yourself!</h1>
                    <h4 className="text-2xl font-mono my-5">Sub-hero message, not too long and not too short. make if just right!</h4>
                    <button className="bg-white rounded-2xl text-black py-3 px-5 text-xl font-bold">Subscribe</button>
                </div>
            </div>
            <div className="p-4">
                <img src="https://www.tailwindtoolbox.com/templates/hero.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;