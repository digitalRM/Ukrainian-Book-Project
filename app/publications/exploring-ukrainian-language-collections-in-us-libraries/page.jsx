import React from "react";
import { Hedvig_Letters_Sans } from "next/font/google";
import Heading from "@/components/heading";
import Footer from "@/components/footer";

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Exploring Ukrainian Language Collections in US Libraries",
  description:
    "An edited version of the presentation at the Association for Computers and the Humanities 2024 conference, examining Ukrainian language collections in US libraries and the challenges of building these collections. This research examines the landscape of Ukrainian language collections in US libraries, addressing the challenges of building these collections and supporting Ukrainian refugees through library services. The project uses bibliographic data at scale to map and analyze Ukrainian language holdings across US libraries.",
  openGraph: {
    title: "Exploring Ukrainian Language Collections in US Libraries",
    description:
      "This research examines the landscape of Ukrainian language collections in US libraries, addressing the challenges of building these collections and supporting Ukrainian refugees through library services. The project uses bibliographic data at scale to map and analyze Ukrainian language holdings across US libraries.",
    type: "article",
    authors: ["Emily Cukier", "Ruslan Mukhamedvaleev", "Gabriella Reznowski"],
    publishedTime: "2024-11-08",
    modifiedTime: "2024-12-28",
  },
  authors: [
    { name: "Emily Cukier", url: "https://libraries.wsu.edu/" },
    { name: "Ruslan Mukhamedvaleev", url: "https://libraries.wsu.edu/" },
    { name: "Gabriella Reznowski", url: "https://libraries.wsu.edu/" },
  ],
  keywords: [
    "Ukrainian collections",
    "library support",
    "Ukrainian refugees",
    "OCLC data",
    "bibliographic data",
    "cultural heritage",
    "library science",
    "data analysis",
    "collection development",
  ],
  other: {
    citation_title: "Exploring Ukrainian Language Collections in US Libraries",
    citation_author: [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
    ],
    citation_publication_date: "2024-11-08",
    citation_journal_title:
      "Association for Computers and the Humanities Conference",
    citation_author_institution: [
      "WSU Libraries",
      "Kamiak High School",
      "WSU Libraries",
    ],
    citation_abstract:
      "Russia began the invasion of Ukraine on February 24, 2022. This invasion does not just affect people and their sovereignty, but the entire Ukrainian culture is under attack: Russia's bombing targets specifically include Ukrainian libraries and other cultural heritage institutions.  Ukrainian advocacy groups have tried to encourage collecting at U.S. libraries but have been met with resistance, and continued efforts are slow. Many US libraries don't know where to order Ukrainian books, which ones to choose from, or how to catalog them, especially if they don't have Ukrainian speakers on staff.  This project aims to shed light on the landscape of collecting. It is the first step for us to identify and overcome barriers to building Ukrainian collections in US public libraries.",
    citation_keywords:
      "Ukrainian collections, library support, Ukrainian refugees, OCLC data",
    citation_language: "en",
    citation_fulltext_html_url:
      "https://www.ukrainianbookproject.com/publications/exploring-ukrainian-language-collections-in-us-libraries",
    "dc.title": "Exploring Ukrainian Language Collections in US Libraries",
    "dc.creator": [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
    ],
    "dc.date": "2024-11-08",
    "dc.publisher": "Association for Computers and the Humanities",
    "dc.type": "Conference Paper",
    "dc.format": "text/html",
    "dc.language": "en",
    "dc.rights": "All rights reserved",
    "article:published_time": "2024-11-08",
    "article:modified_time": "2024-12-28",
    "article:section": "Research",
    "article:tag": "Ukrainian Collections",
  },
};

export default function ExploringUkrainianCollections() {
  return (
    <>
      <Heading />

      <main className="w-screen bg-[#f3f1e9] overflow-hidden">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <header className="mb-16 text-center">
              <span className={hedvigLettersSans.className}>
                <p className="mb-2 text-center text-sm text-yellow-950">
                  <time dateTime="2024-11-08">Published: 2024-11-08</time>
                  <time dateTime="2024-12-28">Last updated: 2024-12-28</time>
                </p>
              </span>
              <h1 className="text-3xl font-bold mx-auto text-pretty max-w-xl text-yellow-950 sm:text-4xl mb-6">
                Exploring Ukrainian Language Collections in US Libraries
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
                      Abstract - Background on the Ukrainian invasion, as it
                      pertains to libraries
                    </h2>
                    <div>
                      <p className="mb-8">
                        Russia began the invasion of Ukraine on February 24,
                        2022. This invasion does not just affect people and
                        their sovereignty, but the entire Ukrainian culture is
                        under attack: Russia's bombing targets specifically
                        include Ukrainian libraries and other cultural heritage
                        institutions.
                      </p>
                      <p className="mb-8">
                        Ukrainian advocacy groups have tried to encourage
                        collecting at U.S. libraries but have been met with
                        resistance, and continued efforts are slow. Many US
                        libraries don't know where to order Ukrainian books,
                        which ones to choose from, or how to catalog them,
                        especially if they don't have Ukrainian speakers on
                        staff.
                      </p>
                      <p className="mb-8">
                        This project aims to shed light on the landscape of
                        collecting. It is the first step for us to identify and
                        overcome barriers to building Ukrainian collections in
                        US public libraries.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/slides/2.png"
                            alt="Background on the Ukrainian invasion, as it pertains to libraries | Exploring Ukrainian Language Collections in US Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Bibliographic Data At Scale
                    </h2>
                    <div>
                      <p className="mb-8">
                        How do we figure out where the books are? At first, we
                        had the idea to go to WorldCat to check holdings, but
                        the web interface didn't give us enough options for
                        filtering and downloading book data.
                      </p>
                      <p className="mb-8">
                        So, we chose to go to the back end, using the same tools
                        that catalogers use to find and download MARC records to
                        create our data set. Although research like this isn't
                        common, we found examples of people using it to
                        investigate the prevalence of publications related to
                        Scotland, New Zealand, and Imperial China.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/slides/3.png"
                            alt="Bibliographic Data At Scale Slide | Exploring Ukrainian Language Collections in US Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Data Workflow
                    </h2>
                    <div>
                      <p className="mb-4">Here's how our process worked:</p>
                      <ol className="list-decimal pl-6 mb-8">
                        <li className="mb-2">
                          The first step in our process involved searching the{" "}
                          <a
                            href="https://www.oclc.org/en/worldshare-collection-manager.html"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            OCLC WorldShare Collection Manager
                          </a>{" "}
                          to identify books in Ukrainian that we then downloaded
                          as MARC records.
                        </li>
                        <li className="mb-2">
                          We then used MARCedit to convert records into Excel
                          format so we could read the OCLC numbers we collected.
                        </li>
                        <li className="mb-2">
                          Our third step involved using the OCLC numbers to
                          determine which libraries hold each book using
                          Worldcat Search API. We were rate-limited at this step
                          to 50,000 queries per day, which slowed progress as it
                          took a few weeks to get a complete dataset.
                        </li>
                        <li className="mb-2">
                          Using a script, we counted the number of times each
                          library had a book to determine the size of the
                          Ukrainian book collection.
                        </li>
                        <li className="mb-2">
                          We then got library-type information and geographic
                          coordinates using the{" "}
                          <a
                            href="https://developer.api.oclc.org/wc-registry"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            WorldCat Registry API
                          </a>
                          .
                        </li>
                        <li className="mb-2">
                          After we combined all that information into a central
                          dataset, we plotted that data using Tableau to create
                          an interactive map of library Ukrainian book
                          collections by size and type.
                        </li>
                      </ol>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/slides/4.png"
                            alt="Data Workflow Slide | Exploring Ukrainian Language Collections in US Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Challenges Encountered
                    </h2>
                    <div>
                      <p className="mb-4">
                        We came across a few issues during the project:
                      </p>
                      <ul className="list-disc pl-6 mb-8">
                        <li className="mb-2">
                          We had trouble looking up some libraries because their
                          OCLC identifier codes were too short or contained
                          special characters. However, we were able to find some
                          Python functions that could help parse them.
                        </li>
                        <li className="mb-2">
                          We had to fill ~8 missing libraries's location data by
                          hand using Google Maps location data, and we also
                          manually removed some libraries with false positive
                          hits.
                        </li>
                        <li className="mb-2">
                          Getting the holdings data took almost two weeks
                          between the API query limits and the number of books
                          we had to look up. We had to re-work one API lookup
                          script to run in batches on the Washington State
                          University supercomputer to avoid losing everything to
                          random restarts to install 'critical' updates.
                        </li>
                      </ul>
                    </div>
                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <a
                        href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src="/slides/6.png"
                          alt="Challenges Encountered Slide | Exploring Ukrainian Language Collections in US Libraries"
                          className="rounded-lg border border-yellow-950/50"
                        />
                      </a>
                    </figure>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Next Steps
                    </h2>
                    <div>
                      <p className="mb-8">
                        This map is a starting point for a few things. We want
                        to do a deeper study on how libraries are overcoming
                        challenges in collecting the Ukrainian language, so
                        we'll use the map to help us target a survey of
                        libraries that are collecting well and those that might
                        need some help.
                      </p>
                      <p className="mb-8">
                        We hope this map can help Ukrainian advocacy groups in
                        the US. It shows them where more books are needed and
                        may help them direct local Ukrainian speakers to reading
                        material.
                      </p>
                      <p className="mb-8">
                        We also hope this map can be a tool for community
                        engagement. We'd love it if you would try it, let us
                        know what you think, and give us suggestions.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/slides/7.png"
                            alt="Next Steps Slide | Exploring Ukrainian Language Collections in US Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Advocacy Resources
                    </h2>
                    <div>
                      <ul className="list-disc pl-6 mb-8">
                        <li className="mb-2">
                          <a
                            href="https://libguides.libraries.wsu.edu/ukrainianlanguage"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Resources for Supporting Ukrainian Language
                            Communities
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="https://uaws.org"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Ukrainian Association of Washington State
                          </a>{" "}
                          (UAWS)
                        </li>
                        <li className="mb-2">
                          <a
                            href="https://unwla.org"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Ukrainian National Women's League of America
                          </a>{" "}
                          (UNWLA)
                        </li>
                        <li className="mb-2">
                          <a
                            href="https://www.sucho.org"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Saving Ukrainian Cultural Heritage Online
                          </a>{" "}
                          (SUCHO)
                        </li>
                      </ul>
                    </div>
                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <a
                        href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src="/slides/8.png"
                          alt="Advocacy Resources Slide | Exploring Ukrainian Language Collections in US Libraries"
                          className="rounded-lg border border-yellow-950/50"
                        />
                      </a>
                    </figure>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Acknowledgements
                    </h2>
                    <div>
                      <ul className="list-disc pl-6 mb-8">
                        <li className="mb-2">
                          WSU Center for Institutional Research Computing
                        </li>
                        <li className="mb-2">
                          Sergey Lapin, Vice Chancellor for Research, WSU
                          Everett
                        </li>
                        <li className="mb-2">OCLC</li>
                        <li className="mb-2">
                          Ukrainian Association of Washington State
                        </li>
                      </ul>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/slides/9.png"
                            alt="Acknowledgements Slide | Exploring Ukrainian Language Collections in US Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Slidedeck
                    </h2>
                    <p className="mb-8">
                      This is an edited version of the "Exploring Ukrainian
                      Language Collections in US Libraries” presentation at the
                      Association for Computers and the Humanities 2024
                      conference.
                    </p>
                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <a
                        href="https://www.canva.com/design/DAGSZ5mOXVo/mZp_CZFb8MPJ4ONsyikxfw/edit?utm_content=DAGSZ5mOXVo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src="/slides/1.png"
                          alt="Title Slide | Exploring Ukrainian Language Collections in US Libraries"
                          className="rounded-lg border border-yellow-950/50"
                        />
                      </a>
                    </figure>
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
