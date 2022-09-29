import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen   mt-10 md:mt-20">
            <div className="h-3/4 text-theme  pt-20 md:mt-5 w-4/5  mx-auto my-auto mb-auto">
              <h2 className="text-3xl  text-center font-bold ">Who is Anish</h2>
              <hr className=" border border-gray-500 w-40 border-2 m-3 mx-auto" />
              <img
                className="mx-auto h-5/6 md:h-2/3  relative "
                src="./brush_stroke_paint.webp"
                alt="blob"
              />
              <div className=" absolute mx-auto inset-0 flex flex-col items-center justify-center  w-2/6  rounded-[12px] mt-16 md:-mt-10">
                <h3 className="text-2xl text-center font-bold ">
                  Hi, Hello, Namaste ...
                </h3>
                <hr />
                <pre className="text-xl md:text-sm my-5 font-mont">
                  {JSON.stringify(
                    {
                      name: "Anish Tharu",
                      gender: "Male",
                      from: "Nepal",
                      planet: "Earth",
                      species: "Human Being",
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
            {/* <hr className="color-black" /> */}
          </div>
          <div
            className=" text-center font-semibold bg-primary mx-20 p-12 text-white rounded-tl-full rounded-br-full
                            md:mx-5  md:p-10  mb-10 md:-mt-72 z-20"
          >
            <h2 className="text-4xl md:text-xl ">
              "Life begins at the end <br />
              of your comfort zone"
            </h2>
          </div>
        </div>

        <div>
          <div className="text-center font-mont">
            <h3 className="text-3xl font-extrabold text-theme m-3">About Me</h3>
            <p className="text-opacity-70 text-gray-800 m-2">Why Choose Me?</p>
            <hr className=" border border-theme w-40 border-2 m-3 mx-auto" />
          </div>

          <div className="flex md:flex-col w-2/3  justify-center my-10 mx-auto shadow-lg shadow-[#C5C7C9]">
            <div className="w-2/4 mr-auto md:w-fit">
              <img src="./about-anish.webp" alt="Anish photo" />
            </div>
            <div className="w-6/12 p-8 md:w-fit  text-sm font-mont text-gray-800  text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis incidunt non ad impedit, blanditiis obcaecati, quas
                sunt magnam nulla neque fuga consectetur illo fugit est ab vitae
                repellendus aperiam doloribus itaque nihil natus earum unde?
                Nulla id iure consequuntur. Quasi.
              </p>
              <div className="my-10">
                <p className="text-base text-black-800 text-left">
                  Here are a Few Highlights:
                </p>
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
