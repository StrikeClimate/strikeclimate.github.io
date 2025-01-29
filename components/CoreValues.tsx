"use client"

import { CoreValue } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const CoreValues = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto md:max-w-[1280px]'>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Vertical Lines */}
              <div className="hidden md:block absolute inset-y-0 left-1/3 border-l border-primary" />
              <div className="hidden md:block absolute inset-y-0 left-2/3 border-l border-primary" />

              {/* Horizontal Lines */}
              <div className="absolute inset-x-0 top-1/3 md:hidden border-t border-primary" />
              <div className="absolute inset-x-0 top-2/3 md:hidden border-t border-primary" />
            </div>
            {CoreValue?.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className='mb-3 rounded-full p-3 bg-gradient-to-b from-primary to-black/40'>
                  <item.icon  className='text-4xl text-white'/>
                </div>
                <h3 className="text-center text-lg font-semibold mb-2 w-64 leading-tight text-primary">
                  {item.text}
                </h3>
                <p className="text-sm font-light text-center ">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CoreValues