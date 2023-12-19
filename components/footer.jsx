'use client'
import React from 'react'
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from 'next/font/google'
import {  ArrowDownSquareIcon, ArrowLeftSquareIcon, ArrowRightSquareIcon, ArrowUpSquareIcon } from 'lucide-react'
const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })
const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'], weight: ['400'] })

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className={hedvigLettersSans.className} aria-labelledby="footer-heading">
      <div className='bg-[#211206] '>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:py-24 lg:px-8 lg:py-32  ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4 xl:col-span-1">          
            <a href="" className="">
              <span className="sr-only">WSU - Ukrainian Book Project</span>
              <h1 className="text-2xl font-bold text-[#f3f1e9]/90 h-fit w-fit  group "><span className={hedvigLettersSerif.className}><span className='sm:contents hidden font-bold'>WSU - </span><span className='font-bold group-hover:text-blue-600 transition-all'>Ukrainian</span> <span className='group-hover:text-yellow-400 font-bold transition-all'>Book</span><span className='font-bold'> Project</span></span></h1>
            </a>
            <p className="mt-8 text-[#b3b2a8] xl:mt-2 max-w-3xl">
              <span className={hedvigLettersSans.className}>
              Researching and developing tools to ensure the global availability of Ukrainian book catalog records.
              </span>
            </p>
            <ArrowLeftSquareIcon ria-hidden="true" className='inline stroke-[#f3f1e9]/90' size={18} />  
            <ArrowUpSquareIcon ria-hidden="true" className='inline stroke-[#f3f1e9]/90' size={18} />
            <ArrowDownSquareIcon ria-hidden="true" className='inline stroke-[#f3f1e9]/90' size={18} />
            <ArrowRightSquareIcon ria-hidden="true" className='inline stroke-[#f3f1e9]/90' size={18} />

            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid-cols-2 md:gap-8 hidden lg:contents">
                <div>
                  
                </div>
                <div className="mt-10 md:mt-0 hidden lg:contents">
                  
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-[#f3f1e9]/90 lg:text-right">Company</h3>
                  <ul role="list" className="mt-6 space-y-4 lg:text-right">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-[#b3b2a8]  hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-[#f3f1e9]/90 lg:text-right">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4 lg:text-right">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-[#b3b2a8] hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[#f3f1e9]/20 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-xs leading-5 text-[#f3f1e9]/90 md:order-1 mt-0">
              &copy; 2024 WSU - Ukrainian Book Project. All Rights Reserved.
            </p>
            <p className="text-xs leading-5 text-[#f3f1e9]/90 md:order-1 mt-8 sm:mt-0">
              Site by <a href='https://www.linkedin.com/in/ruslan-muk' className='text-[#f3f1e9] hover:text-[#f3f1e9]/70 transition-all'>Ruslan Mukhamedvaleev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
