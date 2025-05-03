"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from "./NavLink"
import Image from 'next/image'
const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Header = () => {
    const  [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className='fixed top-0 left-0 right-0 z-101 bg-gradient-to-b from-[#202020]  to-[#12121200]' >
            <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
                <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'><Image src="/images/logo.png" width={100} height={100} alt='Logo.png'/> </Link>
                <div className='mobile-menu block md:hidden'>
                    {navbarOpen ? (
                        <button>Open</button>
                    ): (
                        <button>Close</button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header