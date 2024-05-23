'use client'
import React from 'react'
import { useRef } from 'react'
import Heading from './heading'
import { motion, useScroll, useTransform } from "framer-motion"


import { Hedvig_Letters_Sans } from 'next/font/google'
const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })

export default function hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll(
    targetRef,
);

// start the translationY at zero pixels and then as you scroll down it will go to 500 pixels
const scale = useTransform(scrollYProgress, [0, 1], [0, 900]);
const scaleTest = useTransform(scrollYProgress, [0, 1], [0, -200]);
const scaleTest2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);
const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
  <div className="relative min-h-dvh isolate overflow-hidden">
    <Heading />
    <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40 lg:pt-12 2xl:pt-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-12 sm:mt-32 lg:mt-16 h-12">
          </div>
          <h1 className="mt-10 text-2xl font-semibold text-yellow-950 sm:text-5xl">
          Working to ensure availability of Ukrainian catalog records.
          </h1>
          <p className="mt-6 text-md sm:text-lg leading-8 text-yellow-950/80">
            <span className={hedvigLettersSans.className}>
            We are researching and developing tools to ensure global access to Ukrainian book catalog records. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </span>
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              
              className="rounded-md bg-yellow-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-950/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-yellow-950"
            ><span className={hedvigLettersSans.className}>
              View Findings
             </span>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-yellow-950">
            <span className={hedvigLettersSans.className}>
              Learn More</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-0 flex max-w-xl sm:mt-24 lg:ml-4 lg:mr-0 lg:mt-0 overflow-visable lg:flex-none xl:ml-24">
          <motion.div style={{ translateY: scale}} className="mt-14 flex justify-end gap-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:-mt-24 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-none lg:pt-80">
                  <motion.div style={{translateX: scaleTest, rotateZ: rotate}} whileTap={{ cursor: 'grabbing'}} drag dragSnapToOrigin dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}} className="relative hover:cursor-grab">
                      <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#5B3E24] object-cover shadow-lg overflow-hidden relative">
                      <div className=' absolute h-full w-9 bg-[#442914] left-0 top-0' />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div >
                  </div>
                  <div className="mr-auto rounded-xl rounded-l-none w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <motion.div style={{translateX: scaleTest, rotateZ: rotate}} drag whileTap={{ cursor: 'grabbing'}} dragSnapToOrigin dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}} className="relative cursor-grab">
                      <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#624B39] object-cover shadow-lg">
                       <div className=' absolute h-full w-9 rounded-l-none bg-[#4A2F1A] left-0 top-0' />

                        
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div >
                    <motion.div style={{translateX: scaleTest, rotateZ: rotate2}} drag whileTap={{ cursor: 'grabbing'}} dragSnapToOrigin dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}} className="relative cursor-grab">
                      <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#6B5544] object-cover shadow-xl">
                        <div className=' absolute h-full w-9 bg-[#543B28] left-0 top-0' />

                        
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div >
                  </div>
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last xl:order-none lg:pt-80">

                    <motion.div style={{translateX: scaleTest2, rotateZ: rotate2}} drag whileTap={{ cursor: 'grabbing'}} dragSnapToOrigin dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}} className="relative cursor-grab">
                       <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#7D6A5A] object-cover shadow-xl">
                        <div className=' absolute h-full w-9 bg-[#644D3B] left-0 top-0' />

                                                
                        </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div >
                  
                  </div>
          </motion.div >
            
        </div>
      </div>
    </div>
  )
}
