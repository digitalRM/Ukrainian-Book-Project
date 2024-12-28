import React from "react";
import Image from "next/image";
import { Hedvig_Letters_Sans } from "next/font/google";
import { ArrowUpRightSquareIcon, ClockIcon } from "lucide-react";

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Publications() {
  return (
    <div id="publications" className="w-screen bg-[#211206] overflow-hidden ">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-left text-left">
            <h2
              id="details-heading"
              className="text-2xl font-bold text-[#f3f1e9]/90 sm:text-4xl"
            >
              What we've worked on.
            </h2>
            <p className="mt-3 max-w-2xl text-md font-thin text-[#b3b2a8]">
              <span className={hedvigLettersSans.className}>
                We are still in the early stages of what we want to accomplish
                with our project in the long term. These publications help show
                our early findings
              </span>
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 grid-rows-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <a href="https://public.tableau.com/app/profile/r.m2481/viz/LocationsofUkrainian-languagebooksbasedonOCLCdata-August2024/Sheet1">
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg h-[330.41px]">
                <img
                  src="./viz.png"
                  alt="Vizualization of Ukrainian language materials in libraries across the United States."
                  className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                />
              </div>
              <p className="mt-8 text-base text-[#b3b2a8]">
                <span className={hedvigLettersSans.className}>
                  Our primary data source was OCLC, a global library
                  organization that compiles standardized library catalog and
                  holding data for its members. We used it to obtain catalog
                  records for books in the Ukrainian language, library holdings
                  data for the books, and library type and location data
                  (geographic coordinates). We used Tableau software to create
                  the visualization. Note that holding data does not guarantee
                  that books are available to the public for reading or
                  checkout.
                </span>
              </p>
              <span className="mt-4 block text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 w-fit">
                <span className={hedvigLettersSans.className}>
                  Explore Visualization{" "}
                </span>
                <ArrowUpRightSquareIcon
                  aria-hidden="true"
                  className="inline"
                  size={16}
                />
              </span>
            </a>
            <a href="/publications/mapping-ukrainian-collections-in-us-public-libraries">
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg h-[330.41px]">
                <img
                  src="./poster.png"
                  alt="Poster highlighting early findings about the availability of Ukrainian language books in libraries across the United States."
                  className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                />
              </div>
              <p className="mt-8 text-base text-[#b3b2a8]">
                <span className={hedvigLettersSans.className}>
                  This poster highlights our early findings about the
                  availability of Ukrainian language books in libraries across
                  the United States. Presented at the 2024 Washington State
                  University Academic Showcase and the 2024 WSU Everett Research
                  Showcase.
                </span>
              </p>
              <span className="mt-4 block text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 w-fit">
                <span className={hedvigLettersSans.className}>
                  View Poster{" "}
                </span>
                <ArrowUpRightSquareIcon
                  aria-hidden="true"
                  className="inline"
                  size={16}
                />
              </span>
            </a>
            <a href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg h-[330.41px]">
                <img
                  src="./ach.png"
                  alt="Poster highlighting early findings about the availability of Ukrainian language books in libraries across the United States."
                  className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                />
              </div>
              <p className="mt-8 text-base text-[#b3b2a8]">
                <span className={hedvigLettersSans.className}>
                  This poster highlights our early findings about the
                  availability of Ukrainian language books in libraries across
                  the United States. Presented at the 2024 Washington State
                  University Academic Showcase and the 2024 WSU Everett Research
                  Showcase.
                </span>
              </p>
              <span className="mt-4 block text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 w-fit">
                <span className={hedvigLettersSans.className}>
                  View Poster{" "}
                </span>
                <ArrowUpRightSquareIcon
                  aria-hidden="true"
                  className="inline"
                  size={16}
                />
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}