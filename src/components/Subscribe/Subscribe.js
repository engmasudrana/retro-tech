import React from 'react';

const Subscribe = () => {
    return (
        <div className="container text-center mt-10">
            <div className="bg-white shadow p-20 rounded-2xl">
                <h3 className="xs:text-2xl sm:text-3xl text-gray-700 mb-5">Subscribe to our Newsletter!</h3>
                <p className="text-gray-400 mb-5">We'll send you the best of our blog just once a month. We promise.</p>
                <input type="search" placeholder="Email Address" className="bg-gray-200 p-2 rounded xs:w-66 sm:w-80 focus:outline-none" /> <br /> <br />
                <a className="btn" href="">Subscribe</a>
            </div>
        </div>
    );
};

export default Subscribe;