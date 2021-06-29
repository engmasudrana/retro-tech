import React, { useEffect, useState } from 'react';

const ManagePost = () => {

    const [managePost, setManagePost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => setManagePost(data))
    }, []);

    // delete Post
    const deletePost = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert('Delete Successfully');
            })
    }

    return (
        <div className="container">
            <table className="min-w-full divide-y divide-gray-200 mt-16 shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col" className="title">Name</th>
                        <th scope="col" className="title">Date & Time</th>
                        <th scope="col" className="title">Status</th>
                        <th scope="col" className="title">Post By</th>
                        <th scope="col" className="title">Edit & Delete</th>
                    </tr>
                </thead>
                {
                    managePost.map(data =>

                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={data.image} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm text-gray-500 lowercase">{data.title}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{data.date}</div>
                                    <div className="text-sm text-gray-500">{data.time}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {data.name}
                                    <div className="text-sm text-gray-500">Admin</div>
                                </td>

                                <td className="px-8 py-4 whitespace-nowrap ">
                                    <a href="#" className="edit-btn">Edit</a>
                                </td>
                                <td className="py-4 whitespace-nowrap ">
                                    <a href="#" onClick={() => deletePost(data._id)} className="delete-btn">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default ManagePost;