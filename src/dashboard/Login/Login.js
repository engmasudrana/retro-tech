import React from 'react';
import ui from '../../images/auth.svg'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = data => {

        fetch('https://young-inlet-95957.herokuapp.com/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.status === true) {
                    history.push('/admin')
                }
                else {
                    alert('Invalid username or Password')
                }
            })
    }


    return (
        <div className="container p-8">
            <h1 className="text-center mb-10 text-3xl font-bold text-indigo-600 shadow-sm py-4 rounded bg-white">Admin Login</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2  p-10 bg-white shadow rounded">
                <div className="p-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 shadow rounded">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" {...register("email")} /> <br />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" {...register("password")} /> <br />
                        </div>

                        <div className="flex items-center justify-between">
                            <input className="login-btn cursor-pointer" type="submit" />
                            <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-blue-800" href="#">Forgot Password?</a>
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