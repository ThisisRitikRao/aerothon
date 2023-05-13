import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Login from '@/components/Login'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      
      <Login/>
      
    </div>
  )
}

