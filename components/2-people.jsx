'use client'
import React from 'react'
import { Hedvig_Letters_Sans } from 'next/font/google'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { MailIcon } from 'lucide-react';

const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })

const people = [
  {
    name: 'Gabriella Reznowski',
    role: 'Research Lead',
    imageUrl:
      '/people/gabriella.png',
    emailUrl: 'mailto:reznowski@wsu.edu',
    linkedinUrl: 'https://www.linkedin.com/in/gabriella-reznowski-84b013184/',
  },
  {
    name: 'Emily Cukier',
    role: 'Research Lead',
    imageUrl:
      '/people/emily.png',
    emailUrl: 'mailto:emily.cukier@wsu.edu',
    linkedinUrl: 'https://www.linkedin.com/in/emily-cukier/',
  },
  {
    name: 'Ruslan Mukhamedvaleev',
    role: 'Research Assistant',
    imageUrl:
      '/people/ruslan.jpeg',
    emailUrl: 'mailto:ruslanmukhamedvaleev@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/ruslan-muk/',
  },
]

export default function Section2() {
  const { scrollYProgress } = useScroll();
  const pathLength3 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  
  return (
    <div id="members" className='w-screen bg-[#f3f1e9] overflow-hidden '>
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

        <motion.svg className='absolute svg:flex -mr-3  hidden right-0 bottom-0 -mb-1' width="285" height="197" viewBox="0 0 285 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
          d="M285 27.001C182.001 26.9963 26.998 27 26.998 196.501"
          stroke="#211206"
          strokeWidth="54"
          style={{
            pathLength: pathLength2,
            strokeDashoffset: pathLength2,
            strokeDasharray: pathLength2,
          }}
          />
        </motion.svg>
      

     
<div id="members" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[590px] lg:mx-0">
          <h2 className="text-2xl font-bold text-yellow-950 sm:text-4xl">Who we are.</h2>
          <span className={hedvigLettersSans.className}>
            <p className="mt-6 text-md sm:text-lg sm:leading-8 text-yellow-950/80">
            
            Our priority is simple: help librarians and people across the United States access information about Ukrainian literature collections. 
            </p>
          </span>
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className='sm:contents hidden' style={{position: 'relative' }}>
                <svg style={{ position: 'absolute', top: '0', left: '0'}}>
                  <defs>
                    <clipPath id="clippy">
                      <path d="M0 16C0 7.16344 7.16344 0 16 0H216.5C225.337 0 232.5 7.16344 232.5 16V31.5C232.5 40.3366 239.663 47.5 248.5 47.5H264C272.837 47.5 280 54.6634 280 63.5V265C280 273.837 272.837 281 264 281H68C59.1634 281 52 273.837 52 265V245C52 236.163 44.8366 229 36 229H16C7.16344 229 0 221.837 0 213V16Z"/>
                    </clipPath>
                  </defs>
                </svg>
                <Image className="aspect-[2/2]  hover:rounded-[48px] bg-clip-content lg:hidden  xl:flex w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all" style={{ clipPath: 'url(#clippy)' }} width={280} height={280} src={person.imageUrl} alt={"Photo of " + person.name} />
              </div>
              <Image className="sm:hidden hover:rounded-[48px] aspect-[2/2] lg:flex xl:hidden bg-clip-content w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all" width={280} height={280} src={person.imageUrl} alt={"Photo of " + person.name} />
              <span className={hedvigLettersSans.className}><h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-yellow-950">{person.name}</h3></span>
              <span className={hedvigLettersSans.className}><p className="text-base leading-7 text-yellow-950/75">{person.role}</p></span>
              <ul role="list" className="mt-6 flex flex-row gap-x-2">
                <li>
                  <a href={person.linkedinUrl} className="text-yellow-950/70 hover:text-yellow-950/80">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.emailUrl} className="text-yellow-950/70 hover:text-yellow-950/80">
                    <span className="sr-only">Email</span>
                    <MailIcon strokeWidth={2.5} className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}
