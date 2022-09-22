import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import {
    FaReact,
    FaJsSquare,
    FaCss3,
    FaHtml5,
    FaNodeJs,
    FaBootstrap,
} from "react-icons/fa";

function Home() {
    return (
        <Layout>
            <div>
                {/* Intro section */}
                <div className="h-screen bg-theme">
                    <div
                        className="grid md:grid-cols-1 grid-cols-2 h-screen items-center 
                     mx-10  bg-theme"
                    >
                        {/* border-4 md:border-0 border-white transform rotate-12 md:rotate-0 */}

                        <div className="mx-auto">
                            <div className="font-bold text-white md:px-5 border-l-4 flex-col">
                                <h1 className="text-6xl md:text-4xl m-2">
                                    Hi , I am <b className="text-secondary">ANISH</b>
                                </h1>
                                <hr className="m-2 w-3/4" />
                                <h1 className="text-3xl md:text-xl m-2">
                                    ReactJS <b className="text-red-500">Developer</b>
                                </h1>
                            </div>

                            <div className="flex mt-10">
                                <Link
                                    className=" text-white font-bold py-3 m-2 px-10 rounded-full  focus:ring-secondary ring-2 ring-secondary ring-inset  shadow-lg hover:scale-105 ease-in duration-100"
                                    to="/contact"
                                >
                                    Hire Me
                                </Link>
                                <a className=" flex  static bg-secondary text-white font-bold py-3 m-2 px-5 rounded-full  shadow-lg hover:scale-105 ease-in duration-100"
                                    href="https://drive.google.com/file/d/1ZarF1tZiUdr3MSME3sf5sTfK55_2UV-t/view?usp=sharing"
                                    target="_blank"
                                >
                                    Get Resume
                                    <FaDownload className="mx-2" />
                                </a>
                            </div>
                        </div>
                        <div className="h-1/2">
                            <lottie-player
                                src="https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                </div>

                {/* technology secction */}
                {/* <div className="flex justify-center"> */}
                <div className="mt-20">
                    <h2 className="text-4xl text-blue-800 font-bold text-center my-8">
                        Technologies I USE
                    </h2>
                    <div className="grid md:grid-cols-1 grid-cols-3 w-9/12  mx-auto">
                        <FaReact
                            size={120}
                            color="cyan"
                            className="w-full text-center  mt-12 animate-bounce"
                        />
                        <FaJsSquare
                            size={120}
                            color="yellow"
                            className="w-full text-center mt-12 animate-bounce"
                        />
                        <FaNodeJs
                            size={120}
                            color="green"
                            className="w-full text-center mt-12 animate-bounce"
                        />
                        <FaCss3
                            size={120}
                            color="blue"
                            className="w-full text-center mt-12 animate-bounce"
                        />
                        <FaHtml5
                            size={120}
                            color="orange"
                            className="w-full text-center mt-12 animate-bounce"
                        />
                        <FaBootstrap
                            size={120}
                            color="blue"
                            className="w-full text-center mt-12 animate-bounce"
                        />
                    </div>
                </div>

                {/* Highlight section */}
                <div className="my-20 ">
                    <div className="text-white text-center h-52 bg-primary py-10">
                        <h2 className="font-bold text-3xl">
                            Yes, You are right, I am a ReactJS Developer
                        </h2>
                    </div>
                    <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
                        <div className="h-96">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_sSF6EG.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10 text-center">
                            ReactJS is a simple, feature rich, component based JavaScript UI
                            library. It can be used to develop small applications as well as
                            big, complex applications. ReactJS provides minimal and solid
                            feature set to kick-start a web application.
                        </p>
                    </div>
                </div>

                {/* DevStack section */}
                <div className="my-20 ">
                    <div className="text-white text-center h-52 bg-secondary py-10">
                        <h2 className="font-bold text-3xl">My Dev Stack</h2>
                    </div>
                    <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
                        <div className="h-96">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_vybwn7df.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className="grid md:grid-cols-1 grid-cols-3 pr-10 pl-10 pb-10">
                            <div className="md:text-center">
                                <h3 className="text-xl font-bold">Front End</h3>
                                <hr />
                                <p className="font-semibold m-2">HTML/CSS</p>
                                <p className="font-semibold m-2">Javascript</p>
                                <p className="font-semibold m-2">ReactJs</p>
                            </div>
                            <div className="md:text-center md:mt-5 text-center">
                                <h3 className="text-xl font-bold">UI/UX</h3>
                                <hr />
                                <p className="font-semibold m-2">Material UI</p>
                                <p className="font-semibold m-2">Tailwind</p>
                                <p className="font-semibold m-2">Bootstrap</p>
                            </div>
                            <div className="md:text-center md:mt-5 text-right">
                                <h3 className="text-xl font-bold">Backend and DB</h3>
                                <hr />
                                <p className="font-semibold m-2">Node JS</p>
                                <p className="font-semibold m-2">Mongo DB</p>
                                <p className="font-semibold m-2">NoSQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dev info */}
                <div>
                    <h2 className="text-3xl text-gray-500 text-center font-bold">
                        Who is Anish
                    </h2>
                    <div className="h-screen relative text-gray-600 ">
                        <div className="h-full">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_dcatp5cr.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold ">Hi, Hello, Namaste ...</h3>
                            <hr />
                            <pre className="text-xl md:text-sm my-5 font-mont">
                                {JSON.stringify(
                                    {
                                        name: "Anish Tharu",
                                        from: "Nepal",
                                        age: "null",
                                        gender: "Male",
                                    },
                                    null,
                                    2
                                )}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
