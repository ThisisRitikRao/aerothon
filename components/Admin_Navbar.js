import React, { useRef, useEffect }  from 'react'
import Image from 'next/legacy/image';
import plane from '../components/img/navbar/logo.svg'
import { useState } from "react";
import Link from 'next/link'


import styles from '../styles/slider.module.css';
import notification from '../components/img/navbar/notification.svg'
import { Auth } from 'aws-amplify';


import hanburger from '../components/img/navbar/hanbergur.svg'
import { useRouter } from 'next/router';


// Auth.configure({
//   userPoolId: 'UserPool',
//   userPoolWebClientId: 'Web',
//   region: 'ap-south-1'
// });


const Admin_Navbar = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  
  const [user, setUser] = useState(null);

  const [page_status,set_page_status] = useState('dashboard');

  const navmenu = () =>{
    // console.log("asdsad");
    setNavbar(!navbar);
  }


  useEffect(()=>{
    set_page_status(router.pathname);
    // checkUser();
    console.log(page_status);
  },[page_status]);

  const handleClick = (value)=>{
    console.log("asdsadsad")
    set_page_status(value);
  }

  // async function checkUser() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     setUser(user);
  //   } catch (error) {
  //     localStorage.setItem('session_splendid', '');
  //     localStorage.setItem('access_token', '');
  //     localStorage.setItem('id_token','');
  //     localStorage.setItem('session_splendid_admin','');
  //     localStorage.setItem('access_token_admin', '');
  //     localStorage.setItem('id_token_admin', '');
  //     window.location.href = "/admin_login";
  //     console.log('User is not authenticated', error);
  //   }
  // }

  // async function handleLogout() {
  //   try {
  //     await Auth.signOut();
  //     setUser(null);
  //     localStorage.setItem('session_splendid', '');
  //     localStorage.setItem('access_token', '');
  //     localStorage.setItem('id_token','');
  //     localStorage.setItem('session_splendid_admin','');
  //     localStorage.setItem('access_token_admin', '');
  //     localStorage.setItem('id_token_admin', '');
  //     window.location.href = "/admin_login";
  //   } catch (error) {
  //     console.log('Error signing out user', error);
  //   }
  // }

  return (
    <div>

        {/* sasasa */}
                  <div className={`bg-[#030569] bg-opacity-80  h-[25rem] pb-12  ${styles.custom_image}`}>
          
          <div className="flex justify-evenly text-white text-[1.5rem] font-[600] ">

              <div className='p-2'>
                  <Image
                      src={plane}
                      alt="Picture of the author"
                      width={80}
                      height={50}
                  />
              </div>

              <Link href='#'>
                <div className={` hover:underline hover:underline-offset-8 p-4 hidden slg:block`}>Dashboard</div>
              </Link>

              {/* <div className='p-4 hidden slg:block'>Manage Applications</div> */}

              <Link href='#'>
                <div className={` p-4 hidden slg:block hover:underline hover:underline-offset-8`}>Manage Parts</div>
              </Link>

              <Link href='#'>
                <div className={` p-4 hidden slg:block hover:underline hover:underline-offset-8`}>Manage collaborator</div>
              </Link>

              
              <div className='p-[1.3rem]'>
              <Image
                      src={notification}
                      alt="Picture of the author"
                      width={30}
                      height={30}
                  />
              </div>
              <div className='p-[1.3rem] hidden slg:block'>
              

              {user?<button onClick={handleLogout} className='bg-[#FDAF4D] font-semibold p-1 px-3 text-[1rem] md:text-[1.5rem] font-[600] border rounded-[10px] border-gray-400 rounded shadow text-white'>Logout</button>:''}




              </div>

              
          <div className='p-[1.3rem] slg:hidden' onClick={navmenu}>
          {/* <img className="h-auto" src="/img/navbar/plane.png" alt="image description"/> */}
          <Image
      src={hanburger}
      alt="Picture of the author"
      width={30}
      height={30}
    />
        </div>
          
          </div>






  
          <div className={`absolute top-0 right-0 w-3/5 h-fit slg:hidden z-10 bg-[#FFFFFF] border border-gray-400 rounded-lg shadow ${navbar ? 'block transition duration-700 ease-in-out' : 'hidden transition duration-700 ease-in-out'}`}>


<div className="p-2 font-[600] text-[2rem]" onClick={navmenu}>×</div>



  <hr/>
  <div className="p-2 sm:p-8">

      <Link href='#'>
        <div className="flex text-[1rem] md:text-[1.5rem] mt-4 font-[600]">Dashboard</div>
      </Link>
      {/* <div className="flex text-[1rem] md:text-[1.5rem] mt-4 font-[600]">Manage Applications</div> */}
      
      <Link href='#'>
        <div className="flex text-[1rem] md:text-[1.5rem] mt-4 font-[600]">Manage Parts</div>
      </Link>
      
      




      <div className="flex text-[1.25rem] mt-4 ">

      {/* <a href='/login'> */}
        <button className="bg-[#FDAF4D] font-semibold p-1 text-[1rem] md:text-[1.5rem] font-[600] border rounded-[10px] border-gray-400 rounded shadow text-white">
        NA&nbsp;Now
        </button>
      {/* </a> */}

      </div>

      <div className="flex text-[1.25rem] mt-4 ">

      {user?<button onClick={handleLogout} className="bg-[#FDAF4D] font-semibold p-1 text-[1rem] md:text-[1.5rem] font-[600] border rounded-[10px] border-gray-400 rounded shadow text-white">Logout</button>:''}


      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      
  </div>
</div>

                  </div>

             
    </div>
  )
}

export default Admin_Navbar
