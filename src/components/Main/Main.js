import React from 'react';

const Main = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-8 font-bold">Overview</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40">
                <div>
                    <h1 className="text-3xl text-24 text-gray-500 font-bold my-5">Lorem ipsum dolor sit amet</h1>
                    <p className="text-gray-600 my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda velit beatae temporibus ipsum quaerat dolores, soluta blanditiis suscipit possimus.</p>
                    <p>Images from: <a href="#" className="text-blue-400 underline">Link</a></p>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZQ/MW-HE536_airpla_20190225131547_ZQ.jpg?uuid=5fa81d1a-3929-11e9-9462-ac162d7bc1f7" alt="" className="rounded-2xl w-2/3" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40 my-24">
                <div className="flex justify-center items-center">
                    <img src="https://img.freepik.com/free-vector/global-network-connection-world-map-digital-background_1017-23322.jpg?size=626&ext=jpg" alt="" className="rounded-2xl w-2/3" />
                </div>
                <div>
                    <h1 className="text-3xl text-24 text-gray-500 font-bold my-5">Lorem ipsum dolor sit amet</h1>
                    <p className="text-gray-600 my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda velit beatae temporibus ipsum quaerat dolores, soluta blanditiis suscipit possimus.</p>
                    <p>Images from: <a href="#" className="text-blue-400 underline">Link</a></p>
                </div>
            </div>
        </div>
    );
};

export default Main;