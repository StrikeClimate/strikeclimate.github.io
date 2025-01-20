import React from 'react'
import SlideIn from "@/components/motion/SlideIn";
import Image from 'next/image';

const About = () => {
    return (
        <section id='about' className='py-12 lg:py-24 bg-[#E9E9E9]/30'>
            <SlideIn direction='bottom'>
                <div className='container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 lg:gap-16 items-center'>
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/about.png"
                            width={600}
                            height={300}
                            alt="About Image"
                            className="object-cover object-center "
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className='text-4xl font-semibold text-secondary'>
                            About <span className='text-primary'>Us</span>
                        </h2>
                        <p className='text-md tex mt-4'>
                            At <span className='text-primary font-bold'>StrikeClimate</span>,
                            we are on a mission to empower individuals and communities
                            in the fight against environmental threats. As a research and product-driven
                            company, we develop cutting-edge applications and devices designed to mitigate
                            environmental hazards. Leveraging a wealth of data on disaster prediction and
                            prevention, we strive to anticipate and address future challenges proactively.
                            Our commitment to sustainability goes beyond mere rhetoric; we actively work
                            towards achieving a net zero-carbon environment through the innovative use of
                            technology. By harnessing the power of digital solutions, we aim to not only
                            minimize our ecological footprint but also inspire others to adopt sustainable
                            practices. At <span className='text-primary font-bold'>StrikeClimate</span>, we believe that by combining scientific research
                            with technological innovation, we can create a healthier and more resilient planet
                            for future generations. <br /> Join us in our journey towards a sustainable future.
                        </p>
                    </div>



                </div>
            </SlideIn>

        </section>
    )
}

export default About