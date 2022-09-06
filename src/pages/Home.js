import React from "react";
import Layout from "../components/Layout";
import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaBootstrap } from 'react-icons/fa'

function Home() {
    return (
        <Layout>
            <div>
                {/* Intro section */}
                <div className="h-screen bg-theme">
                    <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center 
                    border-4 md:border-0 mx-10 border-white transform rotate-12 md:rotate-0 bg-theme">
                        <div className="h-1/2">
                            <lottie-player
                                src="https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className="font-bold text-white md:px-5">
                            <h1 className="text-6xl md:text-4xl">
                                Hi , I am <b className="text-yellow-500">ANISH</b>
                            </h1>
                            <h1 className="text-3xl md:text-xl">
                                ReactJS <b className="text-red-500">Developer</b>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* technology secction */}
                {/* <div className="flex justify-center"> */}
                <div className="mt-20">
                    <h2 className="text-4xl text-blue-800 font-bold text-center my-8">Technologies I USE</h2>
                    <div className="grid md:grid-cols-1 grid-cols-3 w-9/12  mx-auto">
                        <FaReact size={120} color='cyan' className="w-full text-center m-7" />
                        <FaJsSquare size={120} color='yellow' className="w-full text-center m-7" />
                        <FaNodeJs size={120} color='green' className="w-full text-center m-7" />
                        <FaCss3 size={120} color='blue' className="w-full text-center m-7" />
                        <FaHtml5 size={120} color='orange' className="w-full text-center m-7" />
                        <FaBootstrap size={120} color='blue' className="w-full text-center m-7" />

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
