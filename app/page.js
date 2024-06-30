import Footer from '@/components/footer'
import Heading from '@/components/heading'
import Hero from '@/components/hero'
import Section1 from '@/components/1-publications'
import Section2 from '@/components/2-people'
import Image from 'next/image'
import Section3 from '@/components/3-why'
import Section4 from '@/components/4-next'

export default function Home() {
  return (
    <div className='flex-col flex bg-[#f3f1e9]  w-screen overflow-x-hidden scroll-smooth'>
      <div className=' w-full mx-auto overflow-hidden max-h-[1024px] scroll-smooth'>
        <Hero />      
      </div> 
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer /> 

    </div>
  )
}
