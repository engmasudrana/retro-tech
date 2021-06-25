import React from 'react';

const Header = () => {
    return (
        <div className="sticky top-0">
            <div className="bg-white">
                <div className="container flex">
                    <h1 className="flex items-center text-3xl font-bold text-indigo-600">Retro-Tech</h1>
                    <ul className="items-center flex gap-8  ml-auto py-5 cursor-pointer">
                        <li className="hover:text-gray-600"><a href=""></a>Home</li>
                        <li className="hover:text-gray-600"><a href=""></a>About</li>
                        <li className="hover:text-gray-600"><a href=""></a>Contact</li>
                        <a className="btn" href="">Admin</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;