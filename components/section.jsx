import React from 'react'
import Image from 'next/image'
import { Hedvig_Letters_Sans } from 'next/font/google'
import { ArrowUpRightSquareIcon, ChevronRight, ChevronRightSquare, ChevronRightSquareIcon } from 'lucide-react'
const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })
export default function Section1() {
  return (
    <div className='w-screen bg-[#211206] overflow-hidden '>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-left text-left">
            <h2 id="details-heading" className="text-2xl font-bold text-[#f3f1e9]/90 sm:text-4xl">
              What we've worked on.
            </h2>
            <p className="mt-3 max-w-2xl text-md font-thin text-[#b3b2a8]"><span className={hedvigLettersSans.className}>
              Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
              all-day adventures, long shifts at work, and tough travel schedules.
              </span>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 grid-rows-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg h-[330.41px]">
                <img
                  src="./img1.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                />
              </div>
              <p className="mt-8 text-base text-[#b3b2a8]"><span className={hedvigLettersSans.className}>
                The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                combination of on-the-go treats that your heart desires. Yes, we did the math.
                </span>
              </p>
              <a href="#" className="mt-4 block text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 w-fit">
                <span className={hedvigLettersSans.className}>View Visualization </span><ArrowUpRightSquareIcon aria-hidden="true" className='inline' size={16} />  
              </a>
            </div>
            <div>
                
            <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg h-[330.41px]">
                <Image
                    src="/img2.png"
                    alt="Front zipper pouch with included key ring."
                    className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                    width={592}
                    height={330.41}

                />
            </div>
              <p className="mt-8 text-base text-[#b3b2a8]"><span className={hedvigLettersSans.className}>
                Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                for even the most unexpected snack attacks and sharing needs.
                </span>
              </p>
              <a href="#" className="mt-4 block text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 w-fit">
                <span className={hedvigLettersSans.className}>View Article </span><ArrowUpRightSquareIcon aria-hidden="true" className='inline' size={16} />  
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
