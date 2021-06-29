import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const { image, title, _id } = props.postData
    return (
        <div>
            <div className="shadow p-2 bg-white rounded-lg">
                <img className="rounded h-60" src={image} alt="" />
                <div className="p-5 py-5">
                    <Link to={"/detail/" + _id}><h3 className="text-2xl text-gray-800 mb-8 uppercase hover:text-blue-700">{title}</h3></Link>
                    <img className="w-11 rounded-full" src="https://mranainfo.com/static/media/mrana.17d883a1.jpg" alt="" />
                    <div className="ml-16 -mt-11">
                        <h6 className="text-sm font-medium text-gray-500">Masud Rana</h6>
                        <span className="text-gray-500 text-sm">29 July 2021</span>
                        <span className="ml-2 text-gray-500 text-sm">  <FontAwesomeIcon className="text-indigo-500" icon={faClock} /> 10.59 min</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;