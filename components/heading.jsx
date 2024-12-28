"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowDownSquare,
  ArrowUpRightSquareIcon,
  LibrarySquareIcon,
  Menu,
  SquareAsteriskIcon,
  SquareUserRoundIcon,
  X,
} from "lucide-react";

import { Dialog as Dia } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Hedvig_Letters_Sans, Lora } from "next/font/google";
import { ContactDialog } from "./ui/contact-dialog";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });
const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Heading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-6 sm:px-8 scroll-smooth">
      <nav
        className="mx-auto flex lg:max-w-7xl md:max-w-2xl items-center justify-between sm:py-12 py-6 xl:px-8 scroll-smooth"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">WSU - Ukrainian Book Project</span>
          <h1 className="text-2xl font-semibold text-yellow-950  group ">
            <span className="">
              <span className="sm:contents hidden"></span>
              <span className=" group-hover:text-blue-600 transition-all">
                Ukrainian
              </span>{" "}
              <span className="group-hover:text-yellow-400 transition-all">
                Book
              </span>{" "}
              Project
            </span>
          </h1>
          {/* <span className="sr-only">Ukranian Book Project</span>
          <h1 className="text-2xl font-bold text-yellow-950  group "><span className=''>Ukranian Book Project</span></h1> */}
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
          <a
            href="/"
            className="text-md font-semibold tracking-wide leading-6 text-yellow-950"
          >
            <span className={lora.className}>
              Home <SquareAsteriskIcon className="inline mb-0.5" size={16} />
            </span>
          </a>
          <a
            href="/#members"
            className="text-md font-semibold tracking-wide leading-6 scroll-smooth text-yellow-950"
          >
            <span className={lora.className}>
              Members{" "}
              <SquareUserRoundIcon className="inline mb-0.5" size={16} />
            </span>
          </a>
          <a
            href="/#publications"
            className="text-md font-semibold tracking-wide leading-6 text-yellow-950"
          >
            <span className={lora.className}>
              Publications{" "}
              <LibrarySquareIcon className="inline mb-0.5" size={16} />
            </span>
          </a>
          <ContactDialog />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 overflow-hidden z-10 w-full overflow-y-auto bg-[#f3f1e9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between overflow-hidden">
            <a href="" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">WSU - Ukrainian Book Project</span>
                <h1 className="text-2xl font-bold text-yellow-950  group "><span className=''><span className='lg:contents hidden'>WSU - </span><span className=' group-hover:text-blue-600 transition-all'>Ukrainian</span> <span className='group-hover:text-yellow-400 transition-all'>Book</span> Project</span></h1> */}
              <span className="sr-only">Ukranian Book Project</span>
              <h1 className="text-2xl font-bold text-yellow-950  group ">
                <span className="">Ukranian Book Project</span>
              </h1>
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
                <a
                  href="/"
                  className="text-md font-semibold tracking-wide leading-7 text-yellow-950 -mx-3 block rounded-lg px-3 py-2 text-base"
                >
                  <span>
                    <SquareAsteriskIcon className="inline mr-2" size={16} />{" "}
                    Home
                  </span>
                </a>
                <button type="button" onClick={() => setMobileMenuOpen(false)}>
                  <a
                    href="/#members"
                    className="text-md font-semibold tracking-wide leading-7 scroll-smooth text-yellow-950 -mx-3 block rounded-lg px-3 py-2 text-base"
                  >
                    <span>
                      <SquareUserRoundIcon className="inline mr-2" size={16} />{" "}
                      Members
                    </span>
                  </a>
                </button>
                <a
                  href="/#publications"
                  className="text-md font-semibold tracking-wide leading-7 text-yellow-950 -mx-3 block rounded-lg px-3 py-2 text-base"
                >
                  <span>
                    <LibrarySquareIcon className="inline mr-2" size={16} />{" "}
                    Publications
                  </span>
                </a>
                <a
                  href="/"
                  className="text-md font-semibold tracking-wide leading-7 text-yellow-950 -mx-3 block rounded-lg px-3 py-2 text-base"
                >
                  <span>
                    <ArrowUpRightSquareIcon className="inline mr-2" size={16} />{" "}
                    Tools
                  </span>
                </a>
                <ContactDialog className="mt-12" />
              </div>
            </div>
            <div className="mx-auto mt-0 flex max-w-xl sm:mt-24 lg:ml-4 lg:mr-0 lg:mt-0 overflow-visable lg:flex-none xl:ml-24">
              <div className="mt-14 flex justify-end gap-6 sm:-mt-24 sm:justify-start sm:pl-20 lg:-mt-24 lg:pl-0 z-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#5B3E24] object-cover shadow-lg overflow-hidden relative">
                      <div className=" absolute h-full w-9 bg-[#442914] left-0 top-0" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto rounded-xl rounded-l-none w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#624B39] object-cover shadow-lg">
                      <div className=" absolute h-full w-9 rounded-l-none bg-[#4A2F1A] left-0 top-0" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#6B5544] object-cover shadow-xl">
                      <div className=" absolute h-full w-9 bg-[#543B28] left-0 top-0" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-[#7D6A5A] object-cover shadow-xl">
                      <div className=" absolute h-full w-9 bg-[#644D3B] left-0 top-0" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
