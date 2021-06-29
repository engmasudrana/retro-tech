import React from 'react';
import ui from '../../images/auth.svg'
import { Link } from 'react-router-dom';




const Login = () => {
    return (
        <div className="container p-8">
            <h1 className="text-center mb-10 text-3xl font-bold text-indigo-600 shadow-sm py-4 rounded bg-white">Admin Login</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2  p-10 bg-white shadow rounded">
                <div className="p-10">
                    <form class="px-8 pt-6 pb-8 mb-4 shadow rounded">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />

                        </div>
                        <div class="flex items-center justify-between">
                            <Link to="/admin"><button className="login-btn">Login</button></Link>

                            <a class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>

                <div className="shadow rounded">
                    <img src={ui} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;