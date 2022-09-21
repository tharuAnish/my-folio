import React from "react";
import { FaLinkedin, FaGithub, FaMailBulk, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
function Footer() {
    return (
        <div className="bg-theme w-screen flex justify-center">
            <div className="md:w-full w-1/2">
                <div className=" p-10 font-mont text-center">
                    <p className="text-gray-50 pb-5">Designed and Developed By</p>

                    <div className="h-1 border-2 border-white border-dotted"></div>

                    <div className="flex text-white w-full justify-between py-3">
                        <a href="https://www.linkedin.com/in/tharuanish" target="_blank"><FaLinkedin /></a>
                        <a href="https://github.com/tharuAnish" target="_blank"><FaGithub /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=namoanishtharu@gmail.com" target="_blank"><FaMailBulk /></a>
                        <a href="https://twitter.com/anish_namo" target="_blank"><FaTwitter /></a>
                        <a href="https://www.instagram.com/namo_anish" target="_blank"><FaInstagram /></a>
                        <a href="https://www.facebook.com/anish.nammochhiyatharu" target="_blank"><FaFacebook /></a>
                    </div>

                    <div className="h-1 border-2 border-gray-50 border-dotted"></div>

                    <p className="text-gray-50 mt-5">Anish Tharu</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
