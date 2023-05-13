
import university1 from '../components/img/slider/university1.svg'
import university2 from '../components/img/slider/university2.svg'
import university3 from '../components/img/slider/university3.svg'
import university4 from '../components/img/slider/university4.svg'
import Link from 'next/link'

import styles from '../styles/slider.module.css'

import CountUp from 'react-countup';
import academic from '../components/img/slider/academic.svg'
import ava from '../components/img/slider/ava.svg'
import avan from '../components/img/slider/avan.svg'
import great from '../components/img/slider/great.svg'
import harman from '../components/img/slider/harman.svg'
import lucy from '../components/img/slider/lucy.svg'
import popular from '../components/img/slider/popular.svg'

import uk from '../components/img/slider/uk.svg'
import aus from '../components/img/slider/aus.svg'
import ny from '../components/img/slider/ny.svg'


import Image from 'next/legacy/image';

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}



import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

import style from '../styles/slider.module.css'


const Home_slider = (props) => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

        {/* <OwlCarousel responsive={Responsive}>
            <div className={style.item}>
                <h4>1</h4>
            </div>
            <div className={style.item}>
                <h4>2</h4>
            </div>
            <div className={style.item}>
                <h4>3</h4>
            </div>
            <div className={style.item}>
                <h4>4</h4>
            </div>
            <div className={style.item}>
                <h4>5</h4>
            </div>
            <div className={style.item}>
                <h4>6</h4>
            </div>
            <div className={style.item}>
                <h4>4</h4>
            </div>
            <div className={style.item}>
                <h4>4</h4>
            </div>
            <div className={style.item}>
                <h4>4</h4>
            </div>
            <div className={style.item}>
                <h4>4</h4>
            </div>
            
            
            
        </OwlCarousel> */}

<div className='font-[700] text-[1.5rem] slg:text-[2.5rem] px-5'>
Tied up with Recycle Research Universities
</div>
<div className='font-[500] text-[1rem] slg:text-[1.5rem] px-5'>
Across various countries
</div>


<br/>

<div className='hidden slg:block'>
    <div className='p-3'>
    <OwlCarousel className='owl-theme' loop margin={10} items={5} freeDrag>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

    </OwlCarousel>
    </div>
</div>




<div className='hidden md:block slg:hidden'>
    <div className='p-3'>
    <OwlCarousel className='owl-theme' loop margin={10} items={3} freeDrag>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

    </OwlCarousel>
    </div>
</div>




<div className='md:hidden'>
    <div className='p-3'>
    <OwlCarousel className='owl-theme' loop margin={10} items={2} freeDrag>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        <div>
        <Image
                                src={uk}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>
        
        <div>
        <Image
                                src={ny}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

        <div>
        <Image
                                src={aus}
                                alt="Picture of the author"
                                height={600}
                                width={600}
                            />
        </div>

    </OwlCarousel>
    </div>
</div>








<br/>
<br/>

<br/>






<br/>
<br/>
<br/>















    </div>
  )
}












export default Home_slider
