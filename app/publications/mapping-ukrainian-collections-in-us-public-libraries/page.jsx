import React from "react";
import { Hedvig_Letters_Sans } from "next/font/google";
import Heading from "@/components/heading";
import Footer from "@/components/footer";

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Mapping Ukrainian Collections in US Public Libraries",
  description:
    "Research on mapping the availability of Ukrainian language book collections across U.S. libraries, creating interactive tools to connect communities to Ukrainian reading material.",
  openGraph: {
    title: "Mapping Ukrainian Collections in US Public Libraries",
    description:
      "Over 270,000 Ukrainians have come to the United States since the February 24th, 2022, full-scale military invasion of Ukraine by the Russian Federation.1 This has raised demand for Ukrainian language materials that some public libraries have struggled to meet.  In order to facilitate the acquisition pipeline for libraries developing new Ukrainian language collections, we sought to identify libraries with strong existing collections, as well as those libraries that may need assistance with building these collections. We used OCLC data on Ukrainian language titles and their holding libraries. Two Washington State high school students with data science skills assisted us in the process, creating an interactive map showing the location of Ukrainian books in American libraries. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    type: "article",
    authors: [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
      "Anika Krishnan",
    ],
    publishedTime: "2024-05-04",
    modifiedTime: "2024-05-04",
  },
  authors: [
    { name: "Emily Cukier", url: "https://libraries.wsu.edu/" },
    { name: "Ruslan Mukhamedvaleev", url: "https://libraries.wsu.edu/" },
    { name: "Gabriella Reznowski", url: "https://libraries.wsu.edu/" },
    { name: "Anika Krishnan" },
  ],
  keywords: [
    "Ukrainian collections",
    "library holdings",
    "OCLC data",
    "Ukrainian language books",
    "public libraries",
    "academic libraries",
    "collection development",
    "data visualization",
    "library science research",
  ],
  other: {
    citation_title: "Mapping Ukrainian Collections in US Public Libraries",
    citation_author: [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
      "Anika Krishnan",
    ],
    citation_publication_date: "2024-05-04",
    citation_journal_title: "Ukrainian Book Project",
    citation_author_institution: [
      "WSU Libraries",
      "Kamiak High School",
      "WSU Libraries",
      "The Overlake School",
    ],
    citation_abstract:
      "Over 270,000 Ukrainians have come to the United States since the February 24th, 2022, full-scale military invasion of Ukraine by the Russian Federation.1 This has raised demand for Ukrainian language materials that some public libraries have struggled to meet.  In order to facilitate the acquisition pipeline for libraries developing new Ukrainian language collections, we sought to identify libraries with strong existing collections, as well as those libraries that may need assistance with building these collections. We used OCLC data on Ukrainian language titles and their holding libraries. Two Washington State high school students with data science skills assisted us in the process, creating an interactive map showing the location of Ukrainian books in American libraries. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    citation_keywords:
      "Ukrainian collections, library holdings, OCLC data, Ukrainian language books",
    citation_language: "en",
    citation_fulltext_html_url:
      "https://www.ukrainianbookproject.com/publications/mapping-ukrainian-collections-in-us-public-libraries",
    "dc.title": "Mapping Ukrainian Collections in US Public Libraries",
    "dc.creator": [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
      "Anika Krishnan",
    ],
    "dc.date": "2024-05-04",
    "dc.publisher": "Ukrainian Book Project",
    "dc.type": "Research Article",
    "dc.format": "text/html",
    "dc.language": "en",
    "dc.rights": "All rights reserved",
    "article:published_time": "2024-05-04",
    "article:modified_time": "2024-05-04",
    "article:section": "Research",
    "article:tag": "Ukrainian Collections",
  },
};

export default function MappingUkrainianCollections() {
  return (
    <>
      <Heading />

      <main className="w-screen bg-[#f3f1e9] overflow-hidden">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <header className="mb-16 text-center">
              <span className={hedvigLettersSans.className}>
                <p className="mb-2 text-center text-sm text-yellow-950">
                  <time dateTime="2024-05-04">Published: 2024-05-04</time>
                  <time dateTime="2024-05-04">Last updated: 2024-05-04</time>
                </p>
              </span>
              <h1 className="text-3xl font-bold mx-auto text-pretty max-w-xl text-yellow-950 sm:text-4xl mb-6">
                Mapping Ukrainian Collections in US Public Libraries
              </h1>
              <div className="flex flex-col items-center gap-4">
                <div className="text-sm text-yellow-950">
                  <span className={hedvigLettersSans.className}>
                    <p className="mb-1">Authors:</p>
                    <ul className="list-none flex flex-wrap mx-auto gap-2">
                      <li className="text-center">
                        <span itemProp="author">Emily Cukier</span>
                        <sup>1</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Ruslan Mukhamedvaleev</span>
                        <sup>2</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Gabriella Reznowski</span>
                        <sup>1</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Anika Krishnan</span>
                        <sup>3</sup>
                      </li>
                    </ul>
                    <div className="mt-4 text-xs text-center mx-auto gap-2">
                      <p>
                        <sup>1</sup>
                        <span itemProp="sourceOrganization">WSU Libraries</span>
                      </p>
                      <p>
                        <sup>2</sup>
                        <span itemProp="sourceOrganization">
                          Kamiak High School
                        </span>
                      </p>
                      <p>
                        <sup>3</sup>
                        <span itemProp="sourceOrganization">
                          The Overlake School
                        </span>
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
                        Over 270,000 Ukrainians have come to the United States
                        since the February 24th, 2022, full-scale military
                        invasion of Ukraine by the Russian Federation.
                        <sup>1</sup> This has raised demand for Ukrainian
                        language materials that some public libraries have
                        struggled to meet.
                      </p>
                      <p className="mb-8">
                        In order to facilitate the acquisition pipeline for
                        libraries developing new Ukrainian language collections,
                        we sought to identify libraries with strong existing
                        collections, as well as those libraries that may need
                        assistance with building these collections. We used OCLC
                        data on Ukrainian language titles and their holding
                        libraries. Two Washington State high school students
                        with data science skills assisted us in the process,
                        creating an interactive map showing the location of
                        Ukrainian books in American libraries. We hope this map
                        will be useful for improving the state of Ukrainian
                        language collections to serve communities in the United
                        States.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Objectives
                    </h2>
                    <ul className="list-disc pl-6 mb-8">
                      <li>
                        Map the availability of Ukrainian language book
                        collections across U.S. libraries
                      </li>
                      <li>
                        Create an interactive tool to connect communities to
                        Ukrainian reading material
                      </li>
                      <li>
                        Identify libraries with sizable Ukrainian language
                        collections for further research
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Methods
                    </h2>
                    <div itemProp="methodology">
                      <p className="mb-8">
                        Ukrainian-language books were identified by creating an
                        OCLC WorldShare query collection using the query
                        la="ukr", resulting in a total of over 800,000 records
                        retrieved on May 5, 2023. We used MarcEdit to extract
                        and compile each book's OCLC number from the System
                        Control field (035 $a) and convert the resulting list to
                        .tsv format.
                      </p>
                      <p className="mb-8">
                        We used R to retrieve holdings data for each OCLC number
                        from the WorldCat Search API, and counted each mention
                        of an institution.
                      </p>
                      <p className="mb-8">
                        Next, we used a Python script to retrieve location and
                        institution type information from the WorldCat Registry
                        API and used this new dataset to generate the
                        interactive visualization using Tableau.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Figure 1. Interactive map of Ukrainian language book
                      holdings by library
                    </h2>

                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <iframe
                        title="Interactive Map of Ukrainian Language Book Collections in US Public Libraries"
                        src="https://public.tableau.com/views/LocationsofUkrainian-languagebooksbasedonOCLCdata-August2024/Sheet1?:showVizHome=no&:embed=true"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        allow="fullscreen"
                        aria-label="Interactive visualization showing the geographic distribution of Ukrainian language books across libraries in the United States"
                        className="rounded-lg border border-yellow-950/50"
                      />
                    </figure>

                    <p className="mb-8">
                      The [map] above gives an overall picture of the state of
                      Ukrainian book collecting in the US. Academic library
                      collections are by far the biggest. Harvard University has
                      the largest collection at 123,446 items. Among the largest
                      non-academic collections identified through our research
                      are the Library of Congress (74,414), Google (47,560), and
                      East View Information Services (27,690), a vendor with
                      headquarters in Moscow (Russia) and the US, which sells
                      cataloging records to libraries through approval plans.
                      Large collections are concentrated in the Eastern and
                      Midwestern US, with other substantial collections at the
                      University of Alberta (66,244), University of Manitoba
                      (49,737), and Stanford University (64,930).
                    </p>
                    <p className="mb-8">
                      Note that holding numbers are determined by OCLC records
                      and will not reflect books not registered to a library in
                      OCLC. Also, a holding record does not guarantee a book is
                      publicly available.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Figure 2. Largest public library Ukrainian collections
                    </h2>

                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <img
                        src="/ukrainian-collections-public-libraries-data.png"
                        alt="Bar chart showing the largest public library Ukrainian collections"
                        className="rounded-lg border border-yellow-950/50"
                      />
                    </figure>

                    <p className="mb-8">
                      According to the data retrieved from OCLC, the largest
                      Ukrainian book collections are in the New York Public
                      Library System, Cleveland Public Library, and Toronto
                      Public Library. These numbers may not reflect materials
                      currently available through the library's catalog, but are
                      still indicative of the scale of Ukrainian collections at
                      the library. Large collections in smaller cities may
                      reflect nearby Ukrainian communities.<sup>2</sup>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Discussion
                    </h2>
                    <div itemProp="discussionText">
                      <p className="mb-8">
                        This map represents our initial step for identifying
                        Ukrainian language collections in US libraries. The
                        project itself is indicative of a mutually beneficial
                        collaboration between WSU faculty and Washington State
                        high school students with advanced data science skills.
                        It provided the students a mentorship opportunity and an
                        opportunity to engage in academic research.
                      </p>
                      <p className="mb-8">
                        While we hope this map will be of assistance to anyone
                        looking to find Ukrainian language books, we are still
                        working to remove non-book items (such as serials or
                        archival materials) from the data set. Still, the map
                        may be a helpful starting point to find local libraries
                        with rich Ukrainian collections.
                      </p>
                      <p className="mb-8">
                        Our next steps will be to continue cleaning and refining
                        the data set, compare our data to library catalogs, and
                        to investigate representation of different books and
                        book types (e.g. nonfiction, adult fiction, children's
                        fiction) in publicly accessible collections.
                      </p>
                      <p className="mb-8">
                        We will use this data to design a survey of collection
                        and acquisition strategies at institutions discovered
                        through the visualization to identify challenges and
                        success stories in meeting the reading needs of
                        Ukrainian language communities.
                      </p>
                    </div>
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
                      <li>Ukrainian Association of Washington State</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Research Poster
                    </h2>
                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <a
                        href="https://www.figma.com/design/a587LZy952mJq3tZyj4hvF/Mapping-Ukrainian-collections-in-U.S.-public-libraries%E2%80%8B?t=u9HDGqKSQNFUXLFr-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/poster-map.png"
                          alt="Research poster for Mapping Ukrainian Collections in US Public Libraries"
                          className="rounded-lg border border-yellow-950/50"
                        />
                      </a>
                    </figure>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      References
                    </h2>
                    <ol className="list-decimal pl-6 mb-8" itemProp="citation">
                      <li className="mb-4">
                        Department of Homeland Security. (2023, February 24).
                        Statement from Secretary Mayorkas on the Anniversary of
                        Russia's Unprovoked Invasion of Ukraine.
                        <a
                          href="https://www.dhs.gov/news/2023/02/24/statement-secretary-mayorkas-anniversary-russias-unprovoked-invasion-ukraine"
                          className="text-yellow-950 hover:text-yellow-950/70 ml-1"
                          rel="noopener noreferrer"
                        >
                          https://www.dhs.gov/news/2023/02/24/statement-secretary-mayorkas-anniversary-russias-unprovoked-invasion-ukraine
                        </a>
                      </li>
                      <li className="mb-4">
                        Tucker, N. (2023, February 8). NLS Shares Ukrainian
                        Books to Aid War Refugees. Library of Congress Blogs.
                        <a
                          href="https://blogs.loc.gov/loc/2023/02/nls-shares-ukrainian-books-to-aid-war-refugees"
                          className="text-yellow-950 hover:text-yellow-950/70 ml-1"
                          rel="noopener noreferrer"
                        >
                          https://blogs.loc.gov/loc/2023/02/nls-shares-ukrainian-books-to-aid-war-refugees
                        </a>
                      </li>
                    </ol>
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
