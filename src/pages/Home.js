import React from "react"
import Layout from "../components/Layout"
import { Link } from "react-router-dom"
import { FaDownload } from "react-icons/fa"
import {
  FaReact,
  FaJsSquare,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
  FaLinux,
  FaFigma,
} from "react-icons/fa"
import { IoLogoPwa } from "react-icons/io5"

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

            <div className="md:mx-auto">
              {/* <div className='flex  text-white '>
                <p className='rotate-90 absolute origin-top-left'>FOLLOW ME</p>
                <div className=''>
                  <a
                    className='hover:text-[#0077b5] hover:scale-125 ease-in duration-100'
                    href='https://www.linkedin.com/in/tharuanish'
                    target='_blank'
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div> */}

              <img
                className="w-3/4 mx-auto object-center;"
                src="./Developer.svg"
                alt="dev svg"
              />
            </div>

            <div className="mx-auto md:-mt-14">
              <div>
                <div className="font-bold text-white md:px-2 md:mb-5 border-l-4 flex-col ">
                  <h1 className="text-6xl md:text-3xl m-2">
                    Hi , I am <b className="text-secondary">ANISH</b>
                  </h1>
                  <hr className="m-2 w-3/4" />
                  <h1 className="text-3xl md:text-xl m-2">
                    ReactJS <b className="text-red-500">Developer</b>
                  </h1>
                </div>
                <p className="text-opacity-70 text-gray-200 m-4 text-lg md:mb-5">
                  Welcome to my portfolio
                </p>
                <div className="flex mt-5 w-full">
                  <Link
                    className=" text-white font-bold py-3 m-2 px-10 md:px-3 rounded-full shadow-lg hover:scale-105 ease-in-out duration-100 
                                     bg-secondary text-white md:text-sm"
                    to="/contact"
                  >
                    Hire Me
                  </Link>
                  <a
                    className=" flex  static  font-bold py-3 m-2 px-5 rounded-full md:px-3 md:text-sm shadow-lg hover:scale-105 ease-in-out duration-100 
                                                text-white focus:ring-secondary ring-2 ring-secondary ring-inset "
                    href="https://drive.google.com/file/d/1QIVI-NxvUXMx4H0aP8MTSpGmBq5zCnhC/view?usp=sharing"
                    target="_blank"
                  >
                    Get Resume
                    <FaDownload className="mx-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* technology secction */}
        {/* <div className="flex justify-center"> */}
        <div className="my-10 ">
          <div className="mb-8">
            <h2 className="text-4xl md:text-3xl   text-center mt-8 mb-6  font-extrabold text-theme md:w-11/12 mx-auto">
              Technologies I USE
            </h2>
            <hr className=" border border-theme w-40 border-2 m-3 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-3 w-9/12  mx-auto">
            <FaReact
              size={100}
              color="cyan"
              className="w-full text-center  mt-12 animate-pulse"
            />
            <FaJsSquare
              size={100}
              color="yellow"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaNodeJs
              size={100}
              color="green"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaCss3
              size={100}
              color="#2965f1"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaHtml5
              size={100}
              color="orange"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaBootstrap
              size={100}
              color="#563d7c"
              className="w-full text-center mt-12 animate-pulse"
            />
            <IoLogoPwa
              size={100}
              color="#4338ca"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaLinux
              size={100}
              color="black"
              className="w-full text-center mt-12 animate-pulse"
            />
            <FaFigma
              size={100}
              color="#ff7262"
              className="w-full text-center mt-12 animate-pulse"
            />
          </div>
        </div>

        {/* Highlight section */}
        <div className="my-20 snap-mandatory ">
          <div className="text-white text-center h-40 md:h-52 bg-primary py-10 ">
            <h2 className="font-bold text-3xl md:text-2xl md:w-11/12 mx-auto">
              Yes, You are right, I am a ReactJS Developer
            </h2>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-16 rounded-lg hover:bg-gray-700 hover:text-white duration-500">
            <div className="h-96">
              <img
                className="h-full mx-auto"
                src="./react_dev.png"
                alt="react dev"
              />
            </div>
            <p className="text-l mb-5 text-semibold  md:px-5 px-14 pb-10 text-center">
              ReactJS is a simple, feature rich, component based JavaScript UI
              library. It can be used to develop small applications as well as
              big, complex applications. ReactJS provides minimal and solid
              feature set to kick-start a web application.
            </p>
          </div>
        </div>

        {/* DevStack section */}
        <div className="my-20 ">
          <div className="text-white text-center h-40 bg-secondary py-10">
            <h2 className="font-bold text-3xl">My Dev Stack</h2>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-16 rounded-lg hover:bg-gray-700 hover:text-white duration-500">
            <div className="h-80">
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
      </div>
    </Layout>
  )
}

export default Home
