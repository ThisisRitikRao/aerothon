
import appointment from '../components/img/search/appointment.svg'
import mentor from '../components/img/search/mentor.svg'
import profile from '../components/img/search/profile.svg'
// import Image from 'next/image';

import Image from 'next/legacy/image';
import style from '../styles/centre_back.module.css'


const home_center = () => {
  return (
    <div className="overflow-hidden relative ">
      
    <br/>
    <br/>
      <div className={style.landing}>

      <div className={`hidden slg:block slg:grid slg:grid-cols-3`}>

<div className="justify-self-center">
<div className='grid justify-items-stretch'>
                            
                            <div className="justify-self-center">
                            <Image
                src={profile}
                alt="Picture of the author"
                height={200}
                width={240}
            />
                            </div>
    </div>


<br/>
<div className='text-center font-Inter font-[600] text-[2rem]'>
Create Your Profile
</div>

<div className='font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
First you have to create your profile
</div>
<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
here and about your interests
</div>


</div>

<div className="justify-self-center">
<div className='grid justify-items-stretch'>
                            
                            <div className="justify-self-center">
                            <Image
                src={mentor}
                alt="Picture of the author"
                height={200}
                width={240}
            />
                            </div>
    </div>

<br/>
<div className='text-center font-Inter font-[600] text-[2rem]'>
Find collaborator
</div>

<div className='font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
Search & shortlist collaborator matching
</div>
<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
your needs and profile
</div>

</div>

<div className="justify-self-center ">
<div className='grid justify-items-stretch'>
                            
                            <div className="justify-self-center">
                            <Image
                src={appointment}
                alt="Picture of the author"
                height={200}
                width={240}
            />
                            </div>
    </div>


<br/>
<div className='text-center font-Inter font-[600] text-[2rem]'>
Book Appointment
</div>

<div className='font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
Book a 1:1 video chat appointment
</div>
<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F]'>
paying a small fee
</div>
</div>

      </div>

      </div>



<div className='slg:hidden '>


<div className={style.landing_mobile}>

          
<div className="grid grid-rows-3 slg:hidden">

<div className="justify-self-center">
<div className='grid justify-items-stretch'>
                              
                              <div className="justify-self-center">
                              <Image
                  src={profile}
                  alt="Picture of the author"
                  height={305}
                  width={305}
              />
                              </div>
      </div>
<br/>
<div className='text-center font-Inter font-[600] text-[1.5rem]'>
Create Your Profile
</div>

<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F] p-2'>
First you have to create your profile here and about your interests
</div>


</div>

<div className="justify-self-center mt-20">
<div className='grid justify-items-stretch'>
                              
                              <div className="justify-self-center">
                              <Image
                  src={mentor}
                  alt="Picture of the author"
                  height={200}
                  width={200}
              />
                              </div>
      </div>


<div className='text-center font-Inter font-[600] text-[1.5rem]'>
Find collaborator
</div>

<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F] p-2'>
Search & shortlist collaborator matching your needs and profile
</div>

</div>

<div className="justify-self-center">
<div className='grid justify-items-stretch'>
                              
                              <div className="justify-self-center">
                              <Image
                  src={appointment}
                  alt="Picture of the author"
                  height={305}
                  width={305}
              />
                              </div>
      </div>

<div className='text-center font-Inter font-[600] text-[1.5rem]'>
Book Appointment
</div>

<div className='text-center font-Inter font-[400] text-[1.25rem] text-[#6F6F6F] p-2'>
  Book a 1:1 video chat appointment paying a small fee
</div>
</div>

</div>

</div>

</div>

<br/>
<br/>
<br/>


      
    </div>
  )
}

export default home_center
