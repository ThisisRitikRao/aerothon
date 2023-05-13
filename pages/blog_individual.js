import React from 'react';

import { useRouter } from 'next/router'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blog_individual = (props) => {

    
  
  return (
    <div>
      <Navbar/>
      <img 
                        src="https://www.topgear.com/sites/default/files/2022/07/6_0.jpg"
                        alt="new"
                        className='p-0'
                        style={{"width": "100%","height": "400px"}}
                        />

<br/>
<br/>


<br/>
<br/>

              <h1 className='text-center text-[2rem]'>{props.blog.body.name}</h1>


              <br/>
              <br/>
              <div className="grid justify-items-stretch mt-4 lg:mt-1">
        

                  <div className="justify-self-center">

                  <img 
                        src={props.blog.body.image}
                        alt="new"
                        height={600}
                        width={600}
                        />
                  </div>
              </div>

              <br/>
              <br/>

              <div className='text-center'>
                {props.blog.body.content}
              </div>








        
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<Footer/>
    </div>
  )
}




export async function getServerSideProps(context) {
    
    const blog_id = context.query.blog_id;
    
    const res = await fetch(`https://7d32xcw4wh.execute-api.ap-south-1.amazonaws.com/individual_blog/individual_blog?blog_id=${blog_id}`)
    const blog = await res.json()
    
    
    return {
      props: {
        blog,
      },
    }
  }
  

export default blog_individual
