import React from "react";
import Layout from "../components/Layout";

function About() {
    return (
        <Layout>
            <div>
                <div>
                    <div className="h-screen">
                        <div className="h-3/4 bg-theme pt-20 md:mt-5">
                            <lottie-player
                                src="https://assets9.lottiefiles.com/packages/lf20_ne6kcqfz.json"
                                background="transparent "
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        {/* <hr className="color-black" /> */}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path
                                    fill="#1D2228"
                                    fill-opacity="1"
                                    d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,229.3C672,235,768,181,864,154.7C960,128,1056,128,1152,154.7C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className=" text-center font-semibold bg-primary mx-20 p-12 text-white rounded-tl-full rounded-br-full
                            md:mx-5 md:my-2 md:p-10 mt-32 mb-10"
                    >
                        <h2 className="text-5xl md:text-xl ">
                            "Life begins at the end <br />
                            of your comfort zone"
                        </h2>
                    </div>
                </div>

                <div className="">
                    <div className="text-center font-mont">
                        <h3 className="text-3xl font-extrabold text-theme m-3">About Me</h3>
                        <p className="text-opacity-70 text-gray-800 m-2">Why Choose Me?</p>
                        <hr className=" border border-theme w-32 border-2 m-3 mx-auto" />
                    </div>

                    <div className="flex w-2/3  justify-center my-10 mx-auto shadow-lg shadow-[#C5C7C9]">
                        <div className="w-2/4 mr-auto">
                            <img src="./about-anish.webp" alt="My photo" />
                        </div>
                        <div className="w-6/12 p-8 text-sm font-mont text-gray-800">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis incidunt non ad impedit, blanditiis obcaecati, quas
                                sunt magnam nulla neque fuga consectetur illo fugit est ab vitae
                                repellendus aperiam doloribus itaque nihil natus earum unde?
                                Nulla id iure consequuntur. Quasi.
                            </p>
                            <div className="my-10">
                                <p className="text-base text-black-800">Here are a Few Highlights:</p>
                                <div>
                                    <ul class="list-disc marker:text-theme my-2 mx-5">
                                        <li>The first item</li>
                                        <li>The second item</li>
                                        <li>The third item</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
