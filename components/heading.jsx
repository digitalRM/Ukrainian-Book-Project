'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ArrowUpRight, ArrowUpRightSquare, ArrowUpRightSquareIcon, Book, LibrarySquareIcon, Menu, SquareAsteriskIcon, SquareUserRoundIcon, X } from 'lucide-react'



const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Members', href: '#members' },
  { name: 'Publications', href: '#' },
]


export default function Heading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="px-6 sm:px-8 scroll-smooth">
      <nav className="mx-auto flex lg:max-w-7xl md:max-w-2xl items-center justify-between sm:py-12 py-6 sm:px-8 " aria-label="Global">
        <a href="" className="-m-1.5 p-1.5">
          <span className="sr-only">WSU - Ukrainian Book Project</span>
          <h1 className="text-2xl font-bold text-yellow-950  group "><span className=''><span className='sm:contents hidden'>WSU - </span><span className=' group-hover:text-blue-600 transition-all'>Ukrainian</span> <span className='group-hover:text-yellow-400 transition-all'>Book</span> Project</span></h1>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            <a href='/' className="text-md font-semibold tracking-wide leading-6 text-yellow-950">
                <span>
                  Home <SquareAsteriskIcon className='inline' size={16} />           
                </span>
            </a>
            <a href='#members' className="text-md font-semibold tracking-wide leading-6 scroll-smooth text-yellow-950">
                <span>
                Members <SquareUserRoundIcon className='inline' size={16} />           
                </span>
            </a>
            <a href='/' className="text-md font-semibold tracking-wide leading-6 text-yellow-950">
                <span>
                Publications <LibrarySquareIcon className='inline' size={16} />           
                </span>
            </a>
            <a href='/' className="text-md font-semibold tracking-wide leading-6 text-yellow-950">
                <span>
                  Tools <ArrowUpRightSquareIcon className='inline' size={16} />           
                </span>
            </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
