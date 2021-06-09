import React from 'react';

const Pricing = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-16 font-bold">Pricing</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-40">
                <div className="text-center border rounded-md shadow-md mt-8 mx-1 p-2">
                    <h1 className="text-3xl text-24 text-gray-500 font-bold my-5">Free</h1>
                    <table className="w-full">
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                    </table>
                    <div>
                    <h1 className="font-bold my-5 text-gray-500"><span className="text-3xl">$0</span> for one user</h1>
                    <button className="bg-red-500 rounded-2xl text-white py-3 px-5 text-xl font-bold">Sign Up</button>
                    </div>
                </div>

                <div className="text-center border rounded-2xl shadow-2xl p-2">
                    <h1 className="text-3xl text-24 text-gray-500 font-bold my-5">Basic</h1>
                    <table className="w-full">
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                    </table>
                    <div>
                    <h1 className="font-bold my-5 text-gray-500"><span className="text-3xl">$99</span> for one user</h1>
                    <button className="bg-red-500 rounded-2xl text-white py-3 px-5 text-xl font-bold">Sign Up</button>
                    </div>
                </div>

                <div className="text-center border rounded-xl shadow-md mt-8 mx-1 p-2">
                    <h1 className="text-3xl text-24 text-gray-500 font-bold my-5">Pro</h1>
                    <table className="w-full">
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="p-3 text-gray-500">Thing</td>
                        </tr>
                    </table>
                    <div>
                    <h1 className="font-bold my-5 text-gray-500"><span className="text-3xl">$199</span> for one user</h1>
                    <button className="bg-red-500 rounded-2xl text-white py-3 px-5 text-xl font-bold">Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;