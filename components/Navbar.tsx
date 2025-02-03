"use client"

import { navigation } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import { Button } from './ui/button';
import { GoArrowUpRight } from 'react-icons/go';
import ThemeSwitch from './ThemeSwitch';


import { useTheme } from 'next-themes';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const { theme } = useTheme();

    return (
        <header className='sticky inset-x-0 top-0 z-50'>
            <nav className='dark:bg-primary bg-white flex items-center justify-between p-5 xl:px-36 border-b border-b-white/10'>
                <div className="flex lg:flex-1">
                    <Link href="/" className=''>
                        {theme === 'dark' ? (
                            < Image
                                src="/images/mstile-new-white.png"
                                alt="Logo"
                                width={180}
                                height={100}
                                className=''
                            />
                        ) : (
                            < Image
                                src="/images/mstile-new.png"
                                alt="Logo"
                                width={180}
                                height={100}
                                className=''
                            />
                        )
                        }
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    {/* Button to open mobile menu on small screens */}
                    <div className='mr-1'>
                        <ThemeSwitch />
                    </div>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MdMenu aria-hidden="true" className="h-6 w-6 text-secondary" />
                    </button>

                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {/* Navigation links for large screens */}
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className=' font-light  leading-6 '
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='items-center hidden lg:flex lg:flex-1 lg:justify-end'>
                    <div className='mr-3'>
                        <ThemeSwitch />
                    </div>

                    <div className="">

                        <Button asChild className='button-main'>
                            <Link href="#contact">
                                <span className="blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"></span>
                                Contact Us<GoArrowUpRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu dialog */}
            <div className=''>
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-secondary bg-opacity-70 z-40"
                        onClick={toggleMenu}
                    />
                )}
                <ul
                    className={`fixed inset-y-0 right-0 bg-white dark:bg-primary text-secondary dark:text-white flex flex-col w-[75%] space-y-16 h-screen items-center z-50 transition-transform duration-700 ease-in-out
                    ${mobileMenuOpen ? '-translate-x-0' : 'translate-x-full'} md:hidden py-32 px-12`}

                >
                    <button onClick={toggleMenu} className="absolute top-5 left-4 focus:outline-none">
                        <MdOutlineClose className="text-xl" />
                    </button>

                    {navigation.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="group"
                                onClick={toggleMenu}
                            >
                                <Link
                                    href={item.href}
                                    className=''
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                    <Button asChild className='button-main'>
                        <Link href="#contact">
                            <span className="blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"></span>
                            Contact Us<GoArrowUpRight />
                        </Link>
                    </Button>

                </ul>
            </div>
        </header>
    )
}

export default Navbar