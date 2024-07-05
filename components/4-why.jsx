"use client";
import React, { useRef } from "react";
import { Hedvig_Letters_Sans } from "next/font/google";
import { useScroll } from "framer-motion";

const stats = [
  {
    label: "Refuges displaced from Ukraine since the 2022 invasion.",
    value: "6,500,000",
  },
  {
    label:
      "Ukrainian Refugees in the United States as of December 2023 via U4U.",
    value: "170,000",
  },
];

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Why() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll(targetRef);

  return (
    <div
      id="learn-more"
      className="w-screen bg-[#211206] overflow-hidden relative"
    >
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-left text-left">
            <h2
              id="details-heading"
              className="text-2xl font-bold text-[#f3f1e9]/90 sm:text-4xl"
            >
              Why we're doing this.
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-xl lg:flex-auto">
                <p className="text-lg leading-7 text-[#b3b2a8]/90">
                  <span className={hedvigLettersSans.className}>
                    The February 24th, 2022, full-scale military invasion of
                    Ukraine has displaced millions of people. The invasion
                    sparked a refugee crisis in Europe, with over 6 million
                    Ukrainian refugees fleeing Ukraine, according to data from
                    the United Nations Refugee Agency.
                  </span>
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p className="text-lg leading-7 text-[#b3b2a8]/90">
                    <span className={hedvigLettersSans.className}>
                      The United States responded to the Ukrainian refugee
                      crisis through the Uniting for Ukraine (U4U) initiative,
                      which has allowed temporary refuge to over 170,000
                      refugees from the war-torn region.
                    </span>
                  </p>
                  <p className="text-lg leading-7 mt-10 text-[#b3b2a8]/90">
                    <span className={hedvigLettersSans.className}>
                      Many libraries and librarians have struggled to respond to
                      requests from this newfound community because of
                      inadequate tools and a lack of experience with Cyrillic
                      script. In most libraries with systems serving extensive
                      Ukrainian communities, Ukrainian collections remain
                      minimal, but we want to help change that.
                    </span>
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-full space-y-8 xl:w-80 lg:mt-14">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4 w-full lg:max-w-72"
                    >
                      <span className={hedvigLettersSans.className}>
                        <dt className="text-base leading-7 text-[#f3f1e9]/70">
                          {stat.label}
                        </dt>
                      </span>
                      <dd className="text-5xl font-semibold text-[#f3f1e9]/90 ">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
