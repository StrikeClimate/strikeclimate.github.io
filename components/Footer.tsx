import { footerSocials } from '@/constants';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-secondary '>
            <div className='p-6 container lg:max-w-[1280px] flex flex-col-reverse lg:flex-row items-center justify-between gap-6'>
                <div>
                    <h2 className='text-white'>
                        &copy;{currentYear} StrikeClimate, All Rights Reserved.
                    </h2>
                </div>
                <div className="inline-flex items-center gap-3">
                    <div>
                        <h2 className='text-white'>Follow us:</h2>
                    </div>
                    <div className="flex gap-4">
                    {footerSocials.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank" className="">
                            <item.icon className='text-primary hover:text-white text-[20px] md:text-md' />
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer