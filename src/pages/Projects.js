import React from "react";
import Layout from "../components/Layout";
import projectData from "../resources/project";

function projects() {
    return (
        <Layout >
            <div className="mt-20 md:mt-5 ">
                <div className="h-screen">
                    <div className="h-3/4 ">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_ygiuluqn.json"
                            background="transparent "
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <p className="text-xl font-semibold text-center mx-5">
                        Good ideas are not adopted automatically. They must be driven into
                        practice with courageous patience
                    </p>
                    <h3 className="text-4xl font-bold text-center mt-5">Because</h3>
                </div>
                <div
                    className=" text-center font-semibold bg-primary mx-20 p-12 text-white rounded-tl-full rounded-br-full
                md:mx-5 md:my-2 md:p-10"
                >
                    <h2 className="text-5xl md:text-2xl ">THE GAME IS ... <br />CONSISTANCY</h2>

                </div>
            </div>

            <div className=" grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5 mb-10">
                {projectData.map((project) => {
                    return (
                        <div>
                            <div className="relative px-5 py-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400  opacity-80">
                                <img
                                    src={project.image}
                                    alt="project svg"
                                    className="w-full h-48 "
                                />

                                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                                    <h3 className="text-3xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <button className="border-2 rounded border white py-2 px-5 hover:bg-green-500 mt-5 text-white" onClick={() => { project.link }}>
                                        <a href={project.link} target="_blank">DEMO</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export default projects;
