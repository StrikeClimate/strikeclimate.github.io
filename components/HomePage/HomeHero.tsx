import React from 'react';
import SlideIn from '@/components/motion/SlideIn';
import HeroComponent from '@/components/HeroComponent';
import { HomeHero as HomeHeroData } from '@/constants'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const HomeHero = () => {
    return (
        <div>
            <HeroComponent
                id="/"
                height="80vh"
                bgImage="/images/lake-2.jpg"
                gradientClass="bg-gradient-to-r from-primary to-transparent"
            >
                <div className="">
                    <div>
                        <SlideIn direction='bottom'>
                            {HomeHeroData.map((item, index) => (
                                <div key={index} className='max-w-xl space-y-2 md:space-y-4'>
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
            </HeroComponent>


        </div>
    );
};

export default HomeHero;
