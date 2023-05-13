import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

const inter = Inter({ subsets: ['latin'] })
import Home_center from '@/components/Home_center'
import Home_slider from '@/components/Home_slider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import airplane from '../img/airplane.gif'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      {/* {posts.body[0].name} */}
      <div className='hidden md:block'>
        <img src='https://assets.kpmg.com/is/content/kpmg/aeroplanes-drones-people-holding-placards?scl=1' alt="example image" className='w-full h-[30rem]'/>
      </div>


      <div className='md:hidden'>
        <img src='https://st2.depositphotos.com/5526656/12320/v/950/depositphotos_123206654-stock-illustration-set-of-images-mechanic-repairing.jpg' alt="example image" className='w-full h-[30rem]'/>
      </div>

      <div className='text-white -mt-[20rem] p-10 text-[5.5rem] hidden md:block'>
      <Typewriter
  options={{
    strings: ['Welcome Onboard', 'Flight 007'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
      <div className='mt-[5rem]'></div>

      <div className=''>
        <Home_center/>
        <Home_slider/>
      </div>
      <Footer/>
    </div>
  )
}

