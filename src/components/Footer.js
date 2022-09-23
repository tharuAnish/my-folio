import React from "react";
import {
    FaLinkedin,
    FaGithub,
    FaMailBulk,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
function Footer() {
    return (
        <div className="bg-theme w-screen flex justify-center">
            <div className="md:w-full w-1/2">
                <div className=" p-10 font-mont text-center">
                    <p className="text-gray-50 pb-5">Designed and Developed By</p>

                    <div className="h-1 border-2 border-white border-dotted"></div>

                    <div className="flex text-white w-full justify-between py-3">
                        <a
                            className="hover:text-[#0077b5] hover:scale-125 ease-in duration-100"
                            href="https://www.linkedin.com/in/tharuanish"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            className="hover:text-white hover:scale-125 ease-in duration-100 "
                            href="https://github.com/tharuAnish"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="hover:text-[#EA4335] hover:scale-125 ease-in duration-100 "
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=namoanishtharu@gmail.com"
                            target="_blank"
                        >
                            <FaMailBulk />
                        </a>
                        <a
                            className="hover:text-[#1DA1F2] hover:scale-125 ease-in duration-100 "
                            href="https://twitter.com/anish_namo"
                            target="_blank"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className="hover:text-[#e1306c] hover:scale-125 ease-in duration-100 "
                            href="https://www.instagram.com/namo_anish"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="hover:text-[#4267B2] hover:scale-125 ease-in duration-100 "
                            href="https://www.facebook.com/anish.nammochhiyatharu"
                            target="_blank"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                    <div className="h-1 border-2 border-gray-50 border-dotted"></div>

                    <p className="text-gray-50 mt-5 mb-2">Anish Tharu</p>
                    <p className="text-gray-50">Copyright &copy; 2022 - All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
