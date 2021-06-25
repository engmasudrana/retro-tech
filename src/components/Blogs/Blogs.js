import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";

const blogData = [
    {
        image: 'https://flexiblog-beauty.netlify.app/static/e0c844791e42397951524105e4643eda/6b99c/image.webp',
        title: 'HThe Satin Skirt & How To Wear It All Year Round',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    },
    {
        image: 'https://flexiblog-beauty.netlify.app/static/f29ad0bb549b1256d29008cb79cfeb53/6b99c/image.webp',
        title: 'Three Organisation Methods To Try Today',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    },
    {
        image: 'https://flexiblog-beauty.netlify.app/static/cc916a4df2635d69ab8034d845cba0cc/6b99c/image.webp',
        title: 'The 2019 Reading List So Far & Top Summer Picks',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    },
    {
        image: 'https://flexiblog-beauty.netlify.app/static/e0c844791e42397951524105e4643eda/6b99c/image.webp',
        title: 'Here’s What I’ve Learnt Over The Past Seven Years',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    },
    {
        image: 'https://flexiblog-beauty.netlify.app/static/f29ad0bb549b1256d29008cb79cfeb53/6b99c/image.webp',
        title: 'Three Organisation Methods To Try Today',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    },
    {
        image: 'https://flexiblog-beauty.netlify.app/static/cc916a4df2635d69ab8034d845cba0cc/6b99c/image.webp',
        title: 'The 2019 Reading List So Far & Top Summer Picks',
        des: 'Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna.',
        date: 'April 16 2021',
        time: '10.59',
        admin: 'https://mranainfo.com/static/media/mrana.17d883a1.jpg',
        name: 'Masud Rana'
    }
]

const Blogs = () => {
    return (
        <div className="container">
            <h1 className="p-16 text-4xl text-center">Controversial News</h1>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    blogData.map(data =>
                        <div className="shadow p-2 bg-white rounded-lg">
                            <img className="rounded" src={data.image} alt="" />
                            <div className="p-5 py-5">
                                <h3 className="text-2xl text-gray-800 mb-8">{data.title}</h3>
                                <img className="w-11 rounded-full" src={data.admin} alt="" />
                                <div className="ml-16 -mt-11">
                                    <h6 className="text-sm font-medium text-gray-500">{data.name}</h6>
                                    <span className="text-gray-500 text-sm">{data.date}</span>
                                    <span className="ml-2 text-gray-500 text-sm">  <FontAwesomeIcon className="text-indigo-500" icon={faClock} />{data.time} min</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;