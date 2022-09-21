// import React from 'react'
// import Layout from '../components/Layout'

// function Contact() {
//     return (
//         <Layout>
//             <div>
//                 <div>
//                     <img className='mt-20 w-2/6  container mx-auto md:mt-24 sm:w-2/3' src="./contact.svg" alt="contact img" />
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Contact

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ec2tnv8",
                "template_aqvddqf",
                form.current,
                "mBDYSntl9rCva_8Ca"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Layout>
            <div>
                <div>
                    <img
                        className="mt-20 w-2/6  container mx-auto md:mt-24 sm:w-2/3"
                        src="./contact.svg"
                        alt="contact img"
                    />
                </div>
                <div className="bg-theme rounded-2xl flex flex-row md:flex-col w-2/3  justify-center mx-auto shadow-lg shadow-[#C5C7C9] text-white
                                p-5 m-8">
                    <div className="basis-2/5">
                        <p>Get In Touch</p>
                    </div>
                    <div className="basis-3/5 bg-gray-100 rounded-r-xl">
                        <form ref={form} onSubmit={sendEmail} className="p-4 pr-10">
                            {/* <label>Name</label> */}
                            <input placeholder="Your Name" type="text" name="user_name" className="block form-input  rounded-md w-full px-3 py-2 ml-2 my-5 " required />
                            {/* <label>Email</label> */}
                            <input placeholder="Your Email" type="email" name="user_email" className="block form-input w-full rounded-md px-3 py-2 m-2 my-5" required />
                            {/* <label>Message</label> */}
                            <textarea placeholder="Your Message" maxLength="500" rows="4" name="message" className="block form-input w-full rounded-md text-theme px-3 py-2 m-2 my-5" required />
                            <input className="bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
