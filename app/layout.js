import { Inter } from 'next/font/google'
import { Hedvig_Letters_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Ukrainian Book Project - WSU',
  description: 'We are researching and developing tools to ensure the global availability of Ukrainian book catalog records.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={hedvigLettersSerif.className}>{children}</body>
    </html>
  )
}
