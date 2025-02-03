import { contactBox } from '@/constants'
import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'
import SlideIn from './motion/SlideIn'

const ContactUs = () => {

  return (
    <section id='contact' className='py-12 lg:py-24 '>
      <div className='container mx-auto md:max-w-[1280px] flex flex-col md:flex-row gap-12 md:gap-32 items-center w-full'>
        <div className='w-full lg:w-1/2'>
          <SlideIn direction='left'>
            <h2 className='text-4xl font-semibold text-secondary dark:text-white'>
              Contact<span className='text-primary'> Us</span>
            </h2>
            <p className="text-md tex mt-4 text-justify text-secondary dark:text-white max-w-lg">
              Utilize Our Expertise to Develop End Products Addressing
              Real-World Climate Challenges through  a research and
              product-driven processes,  that help humans combat
              environmental hazards
            </p>

            <div className="flex flex-col justify-center space-y-4 my-8 px-5 py-5 dark:bg-[#E9E9E9]/10 bg-[#E9E9E9]/30">
              {contactBox.map((item, index) => (
                <div
                  key={item.id}
                  className='flex gap-3 items-center'

                >
                  <Link key={index} href={item.link} target="_blank" className="">
                    <item.icon className='text-primary text-3xl md:text-md' />
                  </Link>
                  <div>
                    <h4 className='font-bold'>{item.heading}</h4>
                    <Link href={item.link}>
                      <p className=''>{item.contact}</p>
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        <div className='w-full lg:w-1/2'>
          <SlideIn direction='bottom'>
            <ContactForm />
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

export default ContactUs