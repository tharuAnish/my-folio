import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden")

  const menuItems = [
    {
      title: "Home",
      key: "/",
      id: "1",
    },
    {
      title: "Projects",
      key: "/projects",
      id: "2",
    },
    {
      title: "AboutMe",
      key: "/about",
      id: "3",
    },
    {
      title: "Contact",
      key: "/contact",
      id: "4",
    },
  ]

  const pathName = window.location.pathname

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg 
            ${showMenu == "" && "md:flex-col"} `}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <a href="/">
              <img
                src="./TA-logo.png"
                alt="logo"
                className="w-12 ml-3 opacity-90"
              />
            </a>
          </div>

          <FaBars
            onClick={() => {
              if (showMenu == "md:hidden") {
                setShowMenu("")
              } else {
                setShowMenu("md:hidden")
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer mr-4 text-3xl"
          />
        </div>

        <div className="flex md:hidden ">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`list-none mx-5 p-1 hover:text-secondary ease-in duration-100 ${
                  item.key == pathName &&
                  "bg-white  text-black rounded-full px-3 ring-white border-2 border-primary ring-inset-3  ring-2"
                } `}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}
        </div>

        <div
          className={`mt-5 md:flex items-start justify-start flex-col w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`list-none  py-1 ${
                  item.key == pathName && "bg-white text-black rounded-md px-5"
                } `}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
