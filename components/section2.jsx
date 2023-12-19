import React from 'react'
import { Hedvig_Letters_Sans } from 'next/font/google'
import Image from 'next/image'

const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1682686580950-960d1d513532?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'John Doe',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1701906268448-6c559049e58a?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Johnny Appleseed',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1701743807130-f5ee32ab3a73?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jane Red',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Section2() {
  return (
    <div className='w-screen bg-[#f3f1e9] overflow-hidden '>
<div id="members" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold text-yellow-950 sm:text-4xl">Who we are.</h2>
          <span className={hedvigLettersSans.className}>
            <p className="mt-6 text-md sm:text-lg leading-8 text-yellow-950/80">
            
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
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
                <svg style={{ position: 'absolute', top: '0', left: '0' }}>
                  <defs>
                    <clipPath id="clippy">
                      <path d="M0 16C0 7.16344 7.16344 0 16 0H216.5C225.337 0 232.5 7.16344 232.5 16V31.5C232.5 40.3366 239.663 47.5 248.5 47.5H264C272.837 47.5 280 54.6634 280 63.5V265C280 273.837 272.837 281 264 281H68C59.1634 281 52 273.837 52 265V245C52 236.163 44.8366 229 36 229H16C7.16344 229 0 221.837 0 213V16Z"/>
                    </clipPath>
                  </defs>
                </svg>
                <Image className="aspect-[2/2]  hover:rounded-[48px] bg-clip-content w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all" style={{ clipPath: 'url(#clippy)' }} width={280} height={280} src={person.imageUrl} alt="" />
              </div>
              <Image className="sm:hidden hover:rounded-[48px] aspect-[2/2] bg-clip-content w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all" width={280} height={280} src={person.imageUrl} alt="" />
              <span className={hedvigLettersSans.className}><h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-yellow-950">{person.name}</h3></span>
              <span className={hedvigLettersSans.className}><p className="text-base leading-7 text-yellow-950/60">{person.role}</p></span>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.linkedinUrl} className="text-yellow-950/60 hover:text-yellow-950/80">
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
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}
