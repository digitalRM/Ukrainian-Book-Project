
import { Hedvig_Letters_Serif } from 'next/font/google'
import './globals.css'


const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Ukrainian Book Project',
  description: 'We are researching and developing tools to ensure the global availability of Ukrainian book catalog records.',
  
}

export default function RootLayout({ children }) { 
  return (
    <html lang="en" className='overflow-x-hidden h-full'>
      <body style={{ height: '100%', background:'#f3f1e9' }} className={hedvigLettersSerif.className}>{children}</body>
    </html>
  )
}
