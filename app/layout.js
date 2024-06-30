
import { Hedvig_Letters_Serif } from 'next/font/google'
import './globals.css'


const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://ukrainian-book-project.vercel.app/'),
  title: 'Ukrainian Book Project',
  description: 'We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.',
  openGraph: {
    title: 'Ukrainian Book Project',
    description: 'We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.',
    url: 'https://ukrainian-book-project.vercel.app/',
    siteName: 'Ukrainian Book Project',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of abstrct shapes that look like brown books on a light yellowish brown background.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
}


export default function RootLayout({ children }) { 
  return (
    <html lang="en" className='overflow-x-hidden h-full'>
      <body style={{ height: '100%', background:'#f3f1e9' }} className={hedvigLettersSerif.className}>{children}</body>
    </html>
  )
}
