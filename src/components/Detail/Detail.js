import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {

    const [postDetail, setPostDetail] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://young-inlet-95957.herokuapp.com/post/${id}`)
            .then(res => res.json())
            .then(data => setPostDetail(data[0]))
    }, [])


    return (
        <div className="container pt-28">
            <div className="shadow p-10 rounded bg-white">
                <img className="w-full h-96 rounded" src={postDetail.image} alt="" />
                <h2 className="text-4xl py-10 text-gray-600">{postDetail.title}</h2>
                <p className="text-gray-500 leading-8 font-thin ">{postDetail.content}</p>

                <div className="mt-6">
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

export default Detail;