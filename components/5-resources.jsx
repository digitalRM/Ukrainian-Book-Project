"use client";
import React from "react";
import { Hedvig_Letters_Sans } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRightSquare, ArrowUpRightSquare } from "lucide-react";

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const resources = [
  {
    name: "Bring Ukrainian Books To The Library",
    description: "The UNWLA is a non-profit organization that has been working to bring Ukrainian books to libraries in the United States.",
    url: "https://unwla.org/news/bring-ukrainian-book-to-the-library/",
  },
  {
    name: "Purchase Ukrainian Books",
    description: "Gabriella Reznowski, one of the leaders of this research project and a librarian at Washington State University, has compiled a list of Ukrainian books that can be purchased.",
    url: "https://libguides.libraries.wsu.edu/ld.php?content_id=74403322",
  },
  {
    name: "Ukrainian Libraries in Wartime",
    description: "This article from Library Journal discusses the impact of the war on Ukrainian libraries. It also shows why it is important to preserve Ukrainian books and records.",
    url: "https://www.libraryjournal.com/story/ukrainian-libraries-in-wartime",
  },
  {
    name: "UNWLA - Children's Book List",
    description: "The UNWLA has compiled a list of Ukrainian children's books that are available to read and for libraries to purchase.",
    url: "https://libguides.libraries.wsu.edu/ld.php?content_id=71193562",
  },
  {
    name: "WSU Library Guide",
    description: "Gabriella Reznowski has created a guide to help librarians and people learn more about supporting Ukrainian refugees through library collections.",
    url: "https://libguides.libraries.wsu.edu/c.php?g=1252934&p=9176202",
  },
  {
    name: "Ukrainian E-Books",
    description: "Over 9000+ Ukrainian e-books are available in Overdrive. You can search for books in Ukrainian and other languages.",
    url: "https://www.overdrive.com/search?f-languages=uk&autoLibrary=t&autoRegion=f&showAvailable=False",
  }
  
  

];

export default function Resources() {
  const { scrollYProgress } = useScroll();
  const pathLength3 = useTransform(scrollYProgress, [0.7, 0.89], [0, 1]);

  return (
    <div className="w-screen bg-[#f3f1e9] overflow-hidden ">
      <div className="w-screen h-full relative">
        <motion.svg
          className="absolute lg:flex hidden -right-0.5 -mt-[3px]"
          width="699"
          height="282"
          viewBox="0 0 699 282"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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

        <div id="resources" className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-[590px] lg:mx-0">
              <h2 className="text-2xl font-bold text-yellow-950 sm:text-4xl">
                Resources
              </h2>
              <span className={hedvigLettersSans.className}>
                <p className="mt-6 text-md sm:text-lg sm:leading-8 text-yellow-950/80">
                  The following resources are available to help you learn more
                  about other organizations and initiatives that are working to help Ukrainian refugees.
                </p>
              </span>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-4 mx-auto max-w-[590px] lg:max-w-full">
              {resources.map((resource) => (
                <a href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer">
                  <Card key={resource.name} className="bg-[#fffefa] border-[#dbd8d1] flex flex-col h-full justify-between">
                    <div>
                    <CardHeader>
                      <CardTitle className=" tracking-normal text-base sm:text-xl">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg">
                      <CardDescription><span className={hedvigLettersSans.className}>{resource.description}</span></CardDescription>
                    </CardContent>
                    </div>
                    <CardFooter className="mt-auto">
                      <p

                        className="text-yellow-950 font-semibold"
                      >
                        <span className={hedvigLettersSans.className}>
                        Learn More <ArrowUpRightSquare size={16} className="inline" />
                        </span>
                      </p>
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
