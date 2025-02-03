
import { Hero } from '@/constants'
import React from 'react'
import { Button } from './ui/button'
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import SlideIn from "@/components/motion/SlideIn";


const Herosection = () => {
    return (
        <section id='/' className='flex h-[80vh] w-full bg-hero bg-cover bg-center relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary max-md:to-black/40 '>
                <div className="container mx-auto md:max-w-[1280px] flex flex-row h-full justify-between items-center z-30">
                    <div>
                        <SlideIn direction='bottom'>
                            {Hero.map((item, index) => (
                                <div key={index} className='max-w-xl space-y-2 md:space-y-4 '>
                                    <h2 className='text-white text-2xl font-medium lg:text-4xl'>{item.text}</h2>
                                    <h5 className='text-white max-w-lg'>{item.subText}</h5>
                                </div>
                            ))}
                        </SlideIn>
                        <SlideIn direction='left'>
                            <Button asChild className='button-main mt-7'>
                                <Link href="#contact">
                                    <span className="blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"></span>
                                    Contact Us<GoArrowUpRight />
                                </Link>
                            </Button>
                        </SlideIn>
                    </div>
                    <div className='justify-end pr-12 pt-16'>
                        <SlideIn direction='top'>
                            <div className=' bg-[#E9E9E9]/40 bg- p-4 max-w-sm space-y-2 rounded-lg shadow-2xl border max-md:hidden items-end'>
                                <h2 className='text-xl font-medium max-w-sm text-secondary/90'>
                                    Innovative Solutions <br /> for Sustainable Energy Development
                                </h2>
                                <p className='text-secondary/70 max-w-lg'>
                                    We deliver innovative solutions that advance sustainability 
                                    and promote clean energy for a greener future.
                                </p>
                                <Button variant="outline" size="icon" className='bg-secondary text-primary rounded-full border-none text-lg font-bold'>
                                    <GoArrowUpRight />
                                </Button>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection