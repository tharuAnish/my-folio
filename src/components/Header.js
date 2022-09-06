import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Header() {

    const [showMenu, setShowMenu] = useState('md:hidden')

    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },
        {
            title: 'Projects',
            key: '/projects'
        },
        {
            title: 'About',
            key: '/about'
        },
        {
            title: 'Contact',
            key: '/contact'
        },
    ];

    const pathName = window.location.pathname


    return (
        <div className="text-white font-mont fixed inset-0 z-50">
            <div className={`flex bg-theme justify-between items-center p-2 shadow-lg 
            ${showMenu == "" && "md:flex-col"
                } `}>

                <div className="flex justify-between items-center w-full">
                    <h1 className='text-4xl font-semibold'>Folio</h1>

                    <FaBars
                        onClick={() => {
                            if (showMenu == "md:hidden") {
                                setShowMenu("");
                            } else {
                                setShowMenu("md:hidden");
                            }
                        }}
                        className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
                    />
                </div>

                <div className='flex md:hidden '>
                    {menuItems.map((item) => {
                        return <li className={`list-none mx-5 p-1 ${item.key == pathName && 'bg-white text-black rounded-md'} `}>
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>
                    })}
                </div>


                <div className={`mt-5 md:flex items-start justify-start flex-col w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
                    {menuItems.map((item) => {
                        return <li className={`list-none  py-1 ${item.key == pathName && 'bg-white text-black rounded-md px-5'} `}>
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Header