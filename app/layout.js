
import { Hedvig_Letters_Serif } from 'next/font/google'
import './globals.css'


const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Ukrainian Book Project',
  description: 'We are researching and developing tools to help libraries and people access information about Ukrainian books. Our focus is primarily on records in libraries across the United States.',
  
}

export default function RootLayout({ children }) { 
  return (
    <html lang="en" className='overflow-x-hidden h-full'>
      <body style={{ height: '100%', background:'#f3f1e9' }} className={hedvigLettersSerif.className}>{children}</body>
    </html>
  )
}
