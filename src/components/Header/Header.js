import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className="bg-white fixed left-0 right-0">
            <div className={navbar ? 'navBackground' : ''}>
                <div className="container flex">
                    <Link to="/"><h1 className="flex py-5 items-center text-3xl font-bold text-indigo-600">Retro-Tech</h1></Link>
                    <ul className="items-center flex gap-8  ml-auto py-5 cursor-pointer">
                        <Link to="/"><li className="hover:text-gray-600"><a href=""></a>Home</li></Link>
                        <Link to="/coming"><li className="hover:text-gray-600"><a href=""></a>About</li></Link>
                        <Link to="/"><li className="hover:text-gray-600"><a href=""></a>Blog</li></Link>
                        <Link to="/coming"><li className="hover:text-gray-600"><a href=""></a>Contact</li></Link>
                        <Link to="/admin"><a className="btn" href="">Admin</a></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;