import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';


const Blogs = () => {

    const [postData, setPostData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => setPostData(data))
    },[])

    return (
        <div className="container mt-36 mb-36">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    postData.map(postData => <BlogCard postData={postData} key={postData._id}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;