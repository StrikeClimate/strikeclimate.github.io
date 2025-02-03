import React from 'react'
import SlideIn from './motion/SlideIn'
import { Button } from './ui/button'
import { GoArrowUpRight } from 'react-icons/go';

const AddOn = () => {
    return (
        <section className=' h-[90vh] w-full bg-add-on bg-cover bg-center relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-black/50  max-md:to-black/40 '>
                <div className="container mx-auto md:max-w-[1280px] flex flex-row h-full justify-between items-center z-30">

                    <div className='justify-end pr-12 pt-16'>
                        <SlideIn direction='top'>
                            <div className=' bg-[#E9E9E9]/40 bg- p-4 max-w-sm space-y-2 rounded-lg shadow-2xl border items-end'>
                                <h2 className='text-xl font-medium max-w-sm text-white'>
                                    Innovative Solutions <br /> for Sustainable Energy Development
                                </h2>
                                <p className='text-secondary/70 max-w-lg text-white'>
                                    StrikeClimate is a research and product-driven company, 
                                    building and creating applications and devices that help 
                                    humans combat environmental hazards.
                                </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Button variant="outline" size="icon" className='bg-primary text-secondary rounded-full border-none text-lg font-bold'>
                                    <GoArrowUpRight className='text-6xl font-bold'/>
                                    
                                </Button>

                            </div>
                        </SlideIn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddOn