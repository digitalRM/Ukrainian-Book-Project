import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.ukrainianbookproject.com/"),
  title: {
    template: "%s | Ukrainian Book Project",
    default:
      "Ukrainian Book Project - Research on Ukrainian Language Collections",
  },
  description:
    "We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.",
  keywords: [
    "Ukrainian books",
    "library collections",
    "Ukrainian language",
    "academic research",
    "OCLC data",
    "public libraries",
    "Ukrainian diaspora",
    "library science",
    "collection development",
    "scholarly publications",
  ],
  authors: [
    { name: "Emily Cukier", url: "https://libraries.wsu.edu/" },
    { name: "Ruslan Mukhamedvaleev", url: "https://libraries.wsu.edu/" },
    { name: "Gabriella Reznowski", url: "https://libraries.wsu.edu/" },
  ],
  publisher: "Ukrainian Book Project",
  openGraph: {
    title:
      "Ukrainian Book Project - Research on Ukrainian Language Collections",
    description:
      "We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.",
    url: "https://www.ukrainianbookproject.com/",
    siteName: "Ukrainian Book Project",
    images: [
      {
        url: "/openGraph.png",
        width: 1600,
        height: 900,
        alt: "An image of abstract shapes that look like brown books on a light yellowish brown background.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ukrainian Book Project",
    description:
      "We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.",
    images: ["/openGraph.png"],
  },
  other: {
    citation_journal_title: "Ukrainian Book Project",
    citation_publisher: "Ukrainian Book Project",
    citation_journal_abbrev: "Ukrainian Book Project",
    citation_language: "en",
    "dc.language": "en",
    "dc.type": "Research Project",
    "dc.publisher": "Ukrainian Book Project",
    "dc.rights": "All rights reserved",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ukrainianbookproject.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden h-full">
      <body
        style={{ height: "100%", background: "#f3f1e9" }}
        className={hedvigLettersSerif.className}
      >
        {children}
      </body>
    </html>
  );
}
