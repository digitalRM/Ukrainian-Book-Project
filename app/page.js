import Footer from '@/components/footer'
import Heading from '@/components/heading'
import Hero from '@/components/hero'
import Section1 from '@/components/publications'
import Section2 from '@/components/people'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex-col flex bg-[#f3f1e9]  w-screen overflow-x-hidden scroll-smooth'>
      <div className=' w-full mx-auto overflow-hidden max-h-[1024px] scroll-smooth'>
        <Hero />      
      </div> 
      <Section1 />
      <Section2 />
      <Footer /> 

    </div>
  )
}
