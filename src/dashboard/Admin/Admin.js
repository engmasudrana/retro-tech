import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="flex shadow-sm container mt-4 rounded bg-white">
            <h1 className="flex py-5 items-center text-3xl font-bold text-indigo-600">Dashboard</h1>
            <ul className="items-center flex gap-8 m-auto py-5 cursor-pointer">
                <Link to="/"><li className="hover:text-indigo-600"><a href=""></a>Go Home</li></Link>
                <Link to="/addBlog"><li className="hover:text-indigo-600"><a href=""></a>Add Post</li></Link>
                <Link to="/managePost"><li className="hover:text-indigo-600"><a href=""></a>Manage Post</li></Link>
            </ul>
            <Link to="/" className="py-5"><a className="btn" href="">SignOut</a></Link>
        </div>
    );
};

export default Admin;