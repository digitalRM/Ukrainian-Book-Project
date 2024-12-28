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
  title: "Locations of Ukrainian-language books based on OCLC data",
  description:
    "Research on mapping Ukrainian language books across American public libraries using OCLC data to create an interactive visualization of library holdings.",
  openGraph: {
    title: "Locations of Ukrainian-language books based on OCLC data",
    description:
      "We sought to create an interactive map of Ukrainian books across American public libraries. Our primary data source for this project was OCLC, a global library organization that compiles standardized library catalogs and holding data for its members. We used it to obtain catalog records for books in the Ukrainian language, library holdings data for the books, and library type and location data (geographic coordinates). We used Tableau software to create the visualization. Note that holding data does not guarantee that books are available to the public for reading or checkout. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    type: "article",
    authors: ["Ruslan Mukhamedvaleev", "Emily Cukier", "Gabriella Reznowski"],
    publishedTime: "2024-08-20",
    modifiedTime: "2024-08-20",
  },
  authors: [
    { name: "Ruslan Mukhamedvaleev", url: "https://libraries.wsu.edu/" },
    { name: "Emily Cukier", url: "https://libraries.wsu.edu/" },
    { name: "Gabriella Reznowski", url: "https://libraries.wsu.edu/" },
  ],
  keywords: [
    "Ukrainian language books",
    "OCLC data",
    "library holdings",
    "data visualization",
    "public libraries",
    "academic libraries",
    "collection development",
    "library science research",
    "Ukrainian collections",
  ],
  other: {
    citation_title: "Locations of Ukrainian-language books based on OCLC data",
    citation_author: [
      "Ruslan Mukhamedvaleev",
      "Emily Cukier",
      "Gabriella Reznowski",
    ],
    citation_publication_date: "2024-08-20",
    citation_journal_title: "Ukrainian Book Project",
    citation_author_institution: [
      "Kamiak High School",
      "WSU Libraries",
      "WSU Libraries",
    ],
    citation_abstract:
      "We sought to create an interactive map of Ukrainian books across American public libraries. Our primary data source for this project was OCLC, a global library organization that compiles standardized library catalogs and holding data for its members. We used it to obtain catalog records for books in the Ukrainian language, library holdings data for the books, and library type and location data (geographic coordinates). We used Tableau software to create the visualization. Note that holding data does not guarantee that books are available to the public for reading or checkout. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    citation_keywords:
      "Ukrainian language books, OCLC data, library holdings, data visualization",
    citation_language: "en",
    citation_fulltext_html_url:
      "https://www.ukrainianbookproject.com/publications/locations-of-ukrainian-language-books-based-on-oclc-data",
    "dc.title": "Locations of Ukrainian-language books based on OCLC data",
    "dc.creator": [
      "Ruslan Mukhamedvaleev",
      "Emily Cukier",
      "Gabriella Reznowski",
    ],
    "dc.date": "2024-08-20",
    "dc.publisher": "Ukrainian Book Project",
    "dc.type": "Research Article",
    "dc.format": "text/html",
    "dc.language": "en",
    "dc.rights": "All rights reserved",
    "article:published_time": "2024-08-20",
    "article:modified_time": "2024-08-20",
    "article:section": "Research",
    "article:tag": "Ukrainian Collections",
  },
};

export default function LocationsOfUkrainianBooks() {
  return (
    <>
      <Heading />

      <main className="w-screen bg-[#f3f1e9] overflow-hidden">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <header className="mb-16 text-center">
              <span className={hedvigLettersSans.className}>
                <p className="mb-2 text-center text-sm text-yellow-950">
                  <time dateTime="2024-08-20">Published: 2024-08-20</time>
                  <time dateTime="2024-08-20">Last updated: 2024-08-20</time>
                </p>
              </span>
              <h1 className="text-3xl font-bold mx-auto text-pretty max-w-xl text-yellow-950 sm:text-4xl mb-6">
                Locations of Ukrainian-language books based on OCLC data
              </h1>
              <div className="flex flex-col items-center gap-4">
                <div className="text-sm text-yellow-950">
                  <span className={hedvigLettersSans.className}>
                    <p className="mb-1">Authors:</p>
                    <ul className="list-none flex flex-wrap mx-auto gap-2">
                      <li className="text-center">
                        <span itemProp="author">Ruslan Mukhamedvaleev</span>
                        <sup>1</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Emily Cukier</span>
                        <sup>2</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Gabriella Reznowski</span>
                        <sup>2</sup>
                      </li>
                    </ul>
                    <div className="mt-4 text-xs text-center mx-auto gap-2">
                      <p>
                        <sup>1</sup>
                        <span itemProp="sourceOrganization">
                          Kamiak High School
                        </span>
                      </p>
                      <p>
                        <sup>2</sup>
                        <span itemProp="sourceOrganization">WSU Libraries</span>
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </header>

            <article
              className="prose prose-lg max-w-none"
              itemScope
              itemType="http://schema.org/ScholarlyArticle"
            >
              <div className="text-yellow-950/80">
                <span className={hedvigLettersSans.className}>
                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Abstract
                    </h2>
                    <div itemProp="abstract">
                      <p className="mb-8">
                        We sought to create an interactive map of Ukrainian
                        books across American public libraries. Our primary data
                        source for this project was OCLC, a global library
                        organization that compiles standardized library catalogs
                        and holding data for its members. We used it to obtain
                        catalog records for books in the Ukrainian language,
                        library holdings data for the books, and library type
                        and location data (geographic coordinates).
                      </p>
                      <p className="mb-8">
                        We used Tableau software to create the visualization.
                        Note that holding data does not guarantee that books are
                        available to the public for reading or checkout. We hope
                        this map will be useful for improving the state of
                        Ukrainian language collections to serve communities in
                        the United States.
                      </p>
                    </div>
                  </section>

                  <section>
                    <a
                      href="https://public.tableau.com/app/profile/r.m2481/viz/LocationsofUkrainian-languagebooksbasedonOCLCdata-August2024/Sheet1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                        Interactive Visualization
                        <ArrowUpRightSquareIcon
                          aria-hidden="true"
                          className="inline ml-1"
                          strokeWidth={1.5}
                          size={20}
                        />
                      </h2>
                    </a>

                    <a
                      href="https://public.tableau.com/app/profile/r.m2481/viz/LocationsofUkrainian-languagebooksbasedonOCLCdata-August2024/Sheet1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8">
                        <iframe
                          title="Interactive Map of Ukrainian Language Books based on OCLC data"
                          src="https://public.tableau.com/views/LocationsofUkrainian-languagebooksbasedonOCLCdata-August2024/Sheet1?:showVizHome=no&:embed=true"
                          width="100%"
                          height="600"
                          frameBorder="0"
                          className="rounded-lg border border-yellow-950/50"
                          allow="fullscreen"
                        />
                      </figure>
                    </a>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Acknowledgments
                    </h2>
                    <ul className="list-disc pl-6 mb-8">
                      <li>
                        Sergey Lapin, Vice Chancellor for Research, WSU Everett
                        and Associate Director of Data Analytics
                      </li>
                      <li>WSU Libraries</li>
                      <li>OCLC</li>
                    </ul>
                  </section>
                </span>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
