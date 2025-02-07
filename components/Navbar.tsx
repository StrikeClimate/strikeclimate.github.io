"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Button } from "./ui/button";
import { GoArrowUpRight } from "react-icons/go";
import ThemeSwitch from "./ThemeSwitch";

import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation"; // Safe for client-side routing in Next.js apps
import { cn } from "@/lib/utils";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();

    // State to handle the mobile menu toggle
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    // State to detect if the component is mounted (to ensure safe client rendering)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {

        return null;
    }

    // Utility function to check if the link is active
    const isActive = (href: string) => pathname === href;

    // Smooth scrolling function
    const handleScroll = (href: string) => {
        const sectionId = href.split("#")[1];
        if (pathname === "/") {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(href);
        }
    };

    return (
        <header className="sticky inset-x-0 top-0 z-50">
            <nav className="dark:bg-primary bg-white flex items-center justify-between p-5 xl:px-36 border-b border-b-white/10">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/">
                        {theme === "dark" ? (
                            <Image
                                src="/images/mstile-new-white.png"
                                alt="Logo"
                                width={180}
                                height={100}
                            />
                        ) : (
                            <Image
                                src="/images/mstile-new.png"
                                alt="Logo"
                                width={180}
                                height={100}
                            />
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <ThemeSwitch />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MdMenu aria-hidden="true" className="h-6 w-6 text-secondary" />
                    </button>
                </div>

                {/* Navigation Links for Desktop */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn('font-light  leading-6 ', { "text-primary dark:text-secondary": isActive(item.href), })}
                            onClick={() => handleScroll(item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Contact Button and Theme Switch */}
                <div className="items-center hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className='mr-3'>
                        <ThemeSwitch />
                    </div>
                    <Button asChild className="button-main">
                        <Link href="/#contact" onClick={() => handleScroll("/contact")}>
                            <span className="blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"></span>
                            Contact Us
                            <GoArrowUpRight />
                        </Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-secondary bg-opacity-70 z-40"
                    onClick={toggleMenu}
                />
            )}
            <ul
                className={`fixed inset-y-0 right-0 bg-white dark:bg-primary text-secondary dark:text-white flex flex-col w-[75%] space-y-16 h-screen items-center z-50 transition-transform duration-700 ease-in-out ${mobileMenuOpen ? "-translate-x-0" : "translate-x-full"
                    } md:hidden py-32 px-12`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-5 left-4 focus:outline-none"
                >
                    <MdOutlineClose className="text-xl" />
                </button>
                {navLinks.map((item, index) => (
                    <li key={index} className="group" onClick={toggleMenu}>
                        <Link
                            href={item.href}
                            onClick={() => handleScroll(item.href)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <Button asChild className="button-main" onClick={toggleMenu}>
                    <Link href="/#contact" onClick={() => handleScroll("/contact")}>
                        <span className="blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"></span>
                        Contact Us
                        <GoArrowUpRight />
                    </Link>
                </Button>
            </ul>
        </header>
    );
};

export default Navbar;
