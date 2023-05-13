import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/legacy/image';
import plane from '../components/img/navbar/logo.svg'
import side from '../components/img/navbar/side.svg'

import passport from '../components/img/navbar/passport.svg'
import Drop from './Drop'
import hanburger from '../components/img/navbar/hanbergur.svg'
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const navmenu = () =>{
    // console.log("asdsad");
    setNavbar(!navbar);
  }
  return (
    <div className={`relative ${styles.custom_m_t}`}>
      


      <nav className='flex justify-around lg:grid lg:grid-cols-10 lg:px-20 bg-primary py-2 text-white'>
        <div className='py-2'> 
          {/* <img className="h-auto" src="/img/navbar/plane.png" alt="image description"/> */}
          <Image
      src={plane}
      alt="Picture of the author"
      width={50}
      height={30}
    />
        </div>
        <div></div>
        <div></div>
        <div className="hidden lg:block py-3 font-Inter font-600 ">
          Home
        </div>
        <div className="hidden lg:block  py-3 font-Inter font-600">
          Services
        </div>
        <div className="hidden lg:block py-3 font-Inter font-600">
          About Us
        </div>

        <div></div>
        <div></div>
        <div></div>

        <div className="hidden lg:block  py-1 font-Inter font-600">
          <Drop/>
        </div>



        
        


        <div className='lg:hidden'></div>

        <div className='py-2 lg:hidden' onClick={navmenu}>
          {/* <img className="h-auto" src="/img/navbar/plane.png" alt="image description"/> */}
          <Image
      src={hanburger}
      alt="Picture of the author"
      width={40}
      height={20}
    />
        </div>        
      </nav>



      <div className={`absolute top-0 right-0 w-3/5 h-fit z-10 bg-[#FFFFFF] border border-gray-400 rounded-lg shadow ${navbar ? 'block transition duration-700 ease-in-out' : 'hidden transition duration-700 ease-in-out'}`}>


      <div className="p-2 font-[600] text-[2rem]" onClick={navmenu}>×</div>
      


        <hr/>
        <div className="p-8">

            <div className="flex text-[1.5rem] mt-4 font-[600]">Home</div>
            <div className="flex text-[1.5rem] mt-4 font-[600]">Country</div>
            <div className="flex text-[1.5rem] mt-4 font-[600]">Visa</div>
            <div className="flex text-[1.5rem] mt-4 font-[600]">About</div>
            <div className="flex text-[1.5rem] mt-4 font-[600]">Contact</div>





            <div className="flex text-[1.5rem] mt-4 font-[600]"><Drop/></div>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>
      </div>












    </div>
  );
}