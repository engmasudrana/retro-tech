import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-white shadow-2xl mt-36 p-16">
            <div className="container">
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="">
                        <h1 className="text-3xl font-bold text-indigo-600 mb-5">Retro-Tech</h1>
                        <p className="text-gray-600">© 2021, All Rights Reserved.</p>
                        <h6 className="text-gray-500">Design & Develop By</h6>
                        <a className="footer-des hover:text-indigo-600 medium" href="https://mranainfo.com/" target="_blank">Masud Rana</a>
                    </div>

                    <div className="">
                        <h3 className="footer-title">Quick Links</h3>
                        <p className="footer-des">Advertise with us</p>
                        <p className="footer-des">About us</p>
                        <p className="footer-des">Contact us</p>
                    </div>

                    <div className="">
                        <h3 className="footer-title">Legal Stuff</h3>
                        <p className="footer-des">Privacy Notice</p>
                        <p className="footer-des">Cookie Policy</p>
                        <p className="footer-des">Terms Of Use</p>
                    </div>

                    <div className="">
                        <h3 className="footer-title">Social Media</h3>
                        <p className="footer-des"><FontAwesomeIcon className="aboutIcon" icon={faGithub} /> Github</p>
                        <p className="footer-des"><FontAwesomeIcon className="aboutIcon" icon={faTwitter} /> Twitter</p>
                        <p className="footer-des"><FontAwesomeIcon className="aboutIcon" icon={faInstagram} /> instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;