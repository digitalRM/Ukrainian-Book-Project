import React from "react";
import { Hedvig_Letters_Sans } from "next/font/google";
import Heading from "@/components/heading";
import Footer from "@/components/footer";
import { ArrowUpRightSquareIcon } from "lucide-react";

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Publications | Ukrainian Book Project",
  description:
    "Research publications on Ukrainian language collections in US libraries, including interactive visualizations and data analysis of library holdings.",
};

export default function Publications() {
  const publications = [
    {
      title: "Mapping Ukrainian Collections in US Public Libraries",
      authors: [
        "Emily Cukier",
        "Ruslan Mukhamedvaleev",
        "Gabriella Reznowski",
        "Anika Krishnan",
      ],
      year: "2024",
      abstract:
        "Over 270,000 Ukrainians have come to the United States since the February 24th, 2022, full-scale military invasion of Ukraine by the Russian Federation. This has raised demand for Ukrainian language materials that some public libraries have struggled to meet. In order to facilitate the acquisition pipeline for libraries developing new Ukrainian language collections, we sought to identify libraries with strong existing collections, as well as those libraries that may need assistance with building these collections.",
      pdfUrl:
        "/publications/mapping-ukrainian-collections-in-us-public-libraries.pdf",
      htmlUrl:
        "/publications/mapping-ukrainian-collections-in-us-public-libraries",
      image: "/poster-map.png",
      imageAlt:
        "Research poster for Mapping Ukrainian Collections in US Public Libraries",
    },
    {
      title: "Exploring Ukrainian Language Collections in US Libraries",
      authors: ["Emily Cukier", "Ruslan Mukhamedvaleev", "Gabriella Reznowski"],
      year: "2024",
      abstract:
        "This research examines the landscape of Ukrainian language collections in US libraries, addressing the challenges of building these collections and supporting Ukrainian refugees through library services. The project uses bibliographic data at scale to map and analyze Ukrainian language holdings across US libraries.",
      pdfUrl:
        "/publications/exploring-ukrainian-language-collections-in-us-libraries.pdf",
      htmlUrl:
        "/publications/exploring-ukrainian-language-collections-in-us-libraries",
      image: "/ach.png",
      imageAlt:
        "Presentation at the Association for Computers and the Humanities 2024 conference",
    },
    {
      title: "Locations of Ukrainian-language books based on OCLC data",
      authors: ["Ruslan Mukhamedvaleev", "Emily Cukier", "Gabriella Reznowski"],
      year: "2024",
      abstract:
        "We sought to create an interactive map of Ukrainian books across American public libraries. Our primary data source for this project was OCLC, a global library organization that compiles standardized library catalogs and holding data for its members. We used it to obtain catalog records for books in the Ukrainian language, library holdings data for the books, and library type and location data (geographic coordinates).",
      pdfUrl:
        "/publications/locations-of-ukrainian-language-books-based-on-oclc-data.pdf",
      htmlUrl:
        "/publications/locations-of-ukrainian-language-books-based-on-oclc-data",
      image: "/viz.png",
      imageAlt:
        "Visualization of Ukrainian language materials in libraries across the United States",
    },
  ];

  return (
    <>
      <Heading />

      <main className="w-screen bg-[#211206] overflow-hidden">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-left text-left">
              <h1
                id="details-heading"
                className="text-2xl font-bold text-[#f3f1e9]/90 sm:text-4xl"
              >
                Publications
              </h1>
              <p className="mt-3 max-w-2xl text-md font-thin text-[#b3b2a8]">
                <span className={hedvigLettersSans.className}>
                  Research publications on Ukrainian language collections in US
                  libraries, including interactive visualizations and data
                  analysis of library holdings.
                </span>
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {publications.map((pub, index) => (
                <article
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
                >
                  <div className=" aspect-[14/9]  w-full overflow-hidden rounded-lg">
                    <a href={pub.htmlUrl}>
                      <img
                        src={pub.image}
                        alt={pub.imageAlt}
                        className="h-full w-full object-cover object-center grayscale hover:grayscale-0"
                      />
                    </a>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-[#f3f1e9]/90 mb-4">
                      {pub.title}
                    </h2>

                    <div className="text-sm text-[#b3b2a8] mb-4">
                      <span className={hedvigLettersSans.className}>
                        {pub.authors.join(",  ")} • {pub.year}
                      </span>
                    </div>

                    <p className="text-[#b3b2a8] mb-8">
                      <span className={hedvigLettersSans.className}>
                        {pub.abstract}
                      </span>
                    </p>

                    <div className="flex gap-6 mt-auto">
                      <a
                        href={pub.htmlUrl}
                        className="text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 inline-flex items-center"
                      >
                        <span className={hedvigLettersSans.className}>
                          Read Online{" "}
                        </span>
                        <ArrowUpRightSquareIcon className="ml-1" size={16} />
                      </a>
                      <a
                        href={pub.pdfUrl}
                        className="text-md font-semibold hover:text-[#f3f1e9]/70 text-[#f3f1e9]/90 inline-flex items-center"
                      >
                        <span className={hedvigLettersSans.className}>
                          View PDF{" "}
                        </span>
                        <ArrowUpRightSquareIcon className="ml-1" size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
