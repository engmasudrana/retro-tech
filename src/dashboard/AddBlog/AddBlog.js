import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();

    const [imageLink, setImageLink] = useState(null)

    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb')
        imageData.append('image', event.target.files[0])

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageLink(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        if (imageLink !== null) {
            const postData = data;
            postData.image = imageLink;
            fetch('http://localhost:5000/addPost', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(postData)
            })
                .then(res => res.json())
                .then(data = alert('Post Added Successfully'))
        }
        else {
            alert('image is uploading , Please wait')
        }
    }

    return (
        <div className="container p-10">

            <div className="shadow bg-white p-10 rounded-md">
                <h1 className="text-center mb-10 text-3xl font-bold text-indigo-600">Add Post</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <input className="border rounded xs:w-66 sm:w-96 py-3 px-3 leading-tight focus:outline-none" placeholder="Post Title" {...register("title")} /> <br /><br />
                    <textarea className="border rounded xs:w-66 sm:w-96 py-3 px-3 leading-tight focus:outline-none" placeholder="Content" {...register("content")} /> <br />
                    <input className="w-96" type="file" name="image" onChange={handleImageUpload} /> <br /> <br />
                    <input className="btn cursor-pointer" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;