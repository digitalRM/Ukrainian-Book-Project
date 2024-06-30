'use client'
import React from 'react'
import { Hedvig_Letters_Sans } from 'next/font/google'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { MailIcon } from 'lucide-react';

const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })


export default function Section4() {
  const { scrollYProgress } = useScroll();
  const pathLength3 = useTransform(scrollYProgress, [0.7, 0.89], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.9, 0.97], [0, 1]);
  
  return (
    <div className='w-screen bg-[#f3f1e9] overflow-hidden '>
      <div className='w-screen h-full relative'>
        <motion.svg className='absolute lg:flex hidden right-0 -mt-[3px]' width="699" height="282" viewBox="0 0 699 282" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        d="M418 2C418 179 480 164.5 698.5 164.5"
        stroke="#211206"
        strokeWidth="54"
        style={{
          pathLength: pathLength3,
          strokeDashoffset: pathLength3,
          strokeDasharray: pathLength3,
        }}
        />
        </motion.svg>
      

     
<div id="contact" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[590px] lg:mx-0">
          <h2 className="text-2xl font-bold text-yellow-950 sm:text-4xl">Contact Us</h2>
          <span className={hedvigLettersSans.className}>
            <p className="mt-6 text-md sm:text-lg sm:leading-8 text-yellow-950/80">
              Have a question or want to learn more about our project? Send us a message and we'll get back to you as soon as possible.
            </p>
          </span>
        </div>

        <form className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 max-w-[590px] lg:max-w-full mx-auto" method='Post' action='https://docs.google.com/forms/d/e/1FAIpQLSfeyzGJ818-RLEU8zi0lKjhPD9EMewWYijq5BW_uusUmBuXnA/formResponse'>
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-yellow-950">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="entry.137060741"
                id="name"
                autoComplete="name"
                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-yellow-950">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="entry.802603831"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-yellow-950">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="entry.895958623"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md p-4 bg-[#fffef9] font-sans"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-950 hover:bg-yellow-950/80 focus:outline-none focus:ring-2  transition-all focus:ring-offset-2 focus:ring-yellow-950"
            >
              Send
            </button>
          </div>
        </form>
        
      </div>
    </div>
    </div>
    </div>
  )
}
