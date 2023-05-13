import React, { useRef, useEffect }  from 'react'
import Image from 'next/legacy/image';
import plane from '../components/img/navbar/logo.svg'
import date from '../components/img/navbar/date.svg'

import refresh from '../components/img/navbar/refresh.svg'
import country_search from '../components/img/navbar/contry_search.svg'

import styles from '../styles/slider.module.css';
import search from '../components/img/search/search.svg'
import notification from '../components/img/navbar/notification.svg'
import side from '../components/img/navbar/side.svg'

import { Bar } from "react-chartjs-2";

import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import MultiLineChart from '../components/MultipleLineChart'
import Admin_Navbar from '../components/Admin_Navbar';
import Footer from '@/components/Footer';

import MultiLineChart_demo from '../components/MultipleLineChart_demo'

const seller = () => {


    


    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Recycling Rate (%)',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#74AFE6',
            
            data: [65, 59, 80, 81, 56]
          },
        ]
      }



      const data = [
        { name: 'Jan', line1: 4000, line2: 2400 },
        { name: 'Feb', line1: 3000, line2: 1398 },
        { name: 'Mar', line1: 2000, line2: 9800 },
        { name: 'Apr', line1: 2780, line2: 3908 },
        { name: 'May', line1: 1890, line2: 4800 },
        { name: 'Jun', line1: 2390, line2: 3800 },
        { name: 'Jul', line1: 3490, line2: 4300 },
        { name: 'Aug', line1: 3490, line2: 2300 },
        { name: 'Sep', line1: 3490, line2: 5500 },
        { name: 'Oct', line1: 3490, line2: 1200 },
        { name: 'Nov', line1: 3490, line2: 1700 },
        { name: 'Dec', line1: 3490, line2: 2500 },
      ];











      const chartOptions = {
        // chart options
        maintainAspectRatio: false, // Allow chart to adjust to specified height and width
			scales: {
                x: {
                    // display: false,
                    
                    grid: {
                      display: false,
                    },
                    
                  },
                  // to remove the y-axis labels
                  y: {
                    display: false,
                    ticks: {
                      display: false,
                      beginAtZero: true,
                    },
                    // to remove the y-axis grid
                    grid: {
                      drawBorder: false,
                      display: false,
                    },
                  },
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
    }


    
  return (

    <>
    <div className='relative'>
      

        <Admin_Navbar/>

<div className='absolute  -mt-[21rem] w-full'>
    

    <div className='p-8 lg:px-28'>
        <div className='mt-12'>
            <div className="md:flex justify-between text-white ">
                <div>
                    <div className='text-[1.25rem] slg:text-[1.7rem] lg:text-[2.25rem] font-[600]'>Welcome Back, Recycler</div>
                    <div className='font-[400] text-[0.938rem] slg:text-[1rem] mr-0'>A Good Time to Manage Things</div>
                </div>
                
            </div>

        </div>


            <div className='mt-10 hidden slg:block'>

                <div className="flex">
                    <div className='flex bg-white  rounded-[25px] px-2 py-1'>
                        <div className=''>
                        <Image
                            src={date}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                        </div>
                        

                        <select name="cars" id="cars" className=' rounded-lg font-[600] text-[1.3rem] ml-8'>
                            <option value="volvo">01/04/2022 - 26/03/2023</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>        
                    </div>

                    <div className='flex bg-white ml-12 rounded-[25px] px-2 py-1'>
                        <div className=''>
                        <Image
                            src={country_search}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                        </div>
                        

                        <select name="cars" id="cars" className=' rounded-lg font-[600] text-[1.3rem] ml-8'>
                            <option value="volvo">Select Countries</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>        
                    </div>
                    <div className=' flex ml-12 bg-[#FDAF4D] rounded-[25px] px-2 py-1'>
                        
                        
                        <button className=' rounded-[25px] font-[600] text-[1.3rem] text-white bg-[#FDAF4D] px-8'> 
                        <Image
                            src={refresh}
                            alt="Picture of the author"
                            width={18}
                            height={18}
                            
                        />
                        <span className='w-12'>      </span>
                        Apply&nbsp;Filter
                        </button>

                    </div>
                </div>

                


            </div>
 

            <div>
            <div className="block slg:hidden">

<div className='flex mt-10 justify-between  rounded-[25px]'>
    
    <div className='flex bg-white border border-4  rounded-[25px] px-2'>
        <div className=''>
        <Image
            src={date}
            alt="Picture of the author"
            width={10}
            height={10}
        />
        </div>
        

        <select name="cars" id="cars" className=' rounded-lg font-[600] text-[0.75rem] ml-2'>
            <option value="volvo">01/04/2022</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>        
    </div>

    <div className='flex bg-white border border-4 rounded-[25px] px-2'>
        <div className=''>
        <Image
            src={date}
            alt="Picture of the author"
            width={10}
            height={10}
        />
        </div>
        

        <select name="cars" id="cars" className=' rounded-lg font-[600] text-[0.75rem] ml-2'>
            <option value="volvo">26/03/2023</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>        
    </div>



</div>



<div className='flex mt-8 justify-between'>

<div className='flex bg-white rounded-[25px] px-2'>
        <div className=''>
        <Image
            src={country_search}
            alt="Picture of the author"
            width={10}
            height={10}
        />
        </div>
        

        <select name="cars" id="cars" className=' rounded-lg font-[600] text-[0.75rem] ml-2'>
            <option value="volvo">Select Countries</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>        
</div>


<div className=' flex bg-[#FDAF4D]  rounded-[25px] w-fit'>
    
    
    <button className=' rounded-[25px] font-[600] text-[0.75rem] text-white bg-[#FDAF4D] px-2'> 
    <Image
        src={refresh}
        alt="Picture of the author"
        width={10}
        height={10}
    />
    <span className='w-2'>      </span>
    Apply Filter
    </button>

</div>

</div>



</div>
            </div>

            <div className="lg:flex mt-10 justify-between ">
                    <div className='bg-white rounded-[2rem] mt-10 slg:mt-0'>

                        <div className='box-border h-[15.903rem] w-fill lg:w-[36.538rem] bg-white rounded-[2rem] p-2 drop-shadow-2xl'>

                        <Bar
            data={{
                // Name of the variables on x-axies for each bar
                labels: ["Aluminum", "Titanium", "Steel", "Composite"],
                datasets: [
                {
                    // Label for bars
                    label: "Recycling Rate (%)",
                    // Data or value of your each variable
                    data: [40, 12,70,90],
                    // Color of each bar
                    backgroundColor: ["#656DAB", "#656DAB" ,"#656DAB", "#3F4896"],
                    // Border color of each bar
                    borderColor: ["#656DAB", "#656DAB", "#656DAB", "#3F4896"],
                    
                    borderRadius: 10,
                    borderSkipped: false,
                },
                ],
            }}
            // Height of graph
            options={{
                maintainAspectRatio: false, // Allow chart to adjust to specified height and width
                scales: {
                    x: {
                        // display: false,
                        
                        grid: {
                        display: false,
                        },
                        
                    },
                    // to remove the y-axis labels
                    y: {
                        display: false,
                        ticks: {
                        display: false,
                        beginAtZero: true,
                        },
                        // to remove the y-axis grid
                        grid: {
                        drawBorder: false,
                        display: false,
                        },
                    },
                },
                legend: {
                labels: {
                    fontSize: 15,
                },
                },
            }}
            />


                        </div>



                    </div>

                    <div className='bg-white rounded-[2rem] mt-10 lg:mt-0'>
                        <div className='box-border h-[15.903rem] w-fill lg:w-[36.538rem] p-4 bg-white rounded-[2rem] drop-shadow-2xl'>

                        <Line
            data={state}
            options={chartOptions}
            />
                        </div>
                    </div>
            </div>
















            
            <div className="lg:flex mt-10 justify-between ">
                    <div className='bg-white rounded-[2rem] mt-10 slg:mt-0'>

                        <div className='box-border h-[15.903rem] w-fill lg:w-[36.538rem] bg-white rounded-[2rem] p-2 drop-shadow-2xl'>

                        <MultiLineChart/>


                        </div>



                    </div>

                    <div className='bg-white rounded-[2rem] mt-10 lg:mt-0'>
                        <div className='box-border h-[15.903rem] w-fill lg:w-[36.538rem] p-4 bg-white rounded-[2rem] drop-shadow-2xl'>

                        <MultiLineChart_demo/>
                        </div>
                    </div>
            </div>




            <div className='w-full flex p-4 mt-24'>
                <div className='ml-auto'>
                    
                    <div className='flex'>
                        <input type='checkbox'/>List only Near End
                        <div className='w-4'></div>
                        <input type='checkbox'/>Sort by age
                        
                    </div>
                </div>
            </div>


           <div className='' style={{ overflowX: 'scroll' }}>
                    <table className="table-auto w-full text-center">
                <thead>
                    <tr className="bg-gray-200">
                    <th className="px-4 py-2">Part Name</th>
                    <th className="px-4 py-2">Material Composition</th>
                    <th className="px-4 py-2">Age (years)</th>
                    <th className="px-4 py-2">Condition</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Manufacturer</th>
                    <th className="px-4 py-2">Aircraft Model</th>
                    <th className="px-4 py-2">Potential Use Cases</th>
                    <th className="px-4 py-2">New Parts Carbon Footprint (kg CO2e)</th>
                    <th className="px-4 py-2">Recycled Parts Carbon Footprint (kg CO2e)</th>
                    <th className="px-4 py-2">Water Usage - New Parts (liters)</th>
                    <th className="px-4 py-2">Water Usage - Recycled Parts (liters)</th>
                    <th className="px-4 py-2">Landfill Waste - New Parts (kg)</th>
                    <th className="px-4 py-2">Landfill Waste - Recycled Parts (kg)</th>
                    <th className="px-4 py-2">Energy Consumption - New Parts (kWh)</th>
                    <th className="px-4 py-2">Energy Consumption - Recycled Parts (kWh)</th>
                    <th className="px-4 py-2">Recycling Rate (%)</th>
                    <th className="px-4 py-2">Toxicity Score - New Parts</th>
                    <th className="px-4 py-2">Toxicity Score - Recycled Parts</th>
                    <th className="px-4 py-2">Remanufacturing Potential</th>
                    <th className="px-4 py-2">Life Cycle Assessment</th>
                    <th className="px-4 py-2">Renewable Material Content (%)</th>
                    <th className="px-4 py-2">Carbon Footprint Saved (kg CO2e)</th>
                    <th className="px-4 py-2">Water Usage Saved (liters)</th>
                    <th className="px-4 py-2">Landfill Waste Saved (kg)</th>
                    <th className="px-4 py-2">Energy Consumption Saved (kWh)</th>
                    <th className="px-4 py-2">Toxicity Score Difference</th>
                    <th className="px-4 py-2">Remanufacturing Potential (%)</th>
                    <th className="px-4 py-2">Life Cycle Assessment Score</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                    <td className="px-4 py-2">Landing Gear</td>
                    <td className="px-4 py-2">Aluminum</td>
                    <td className="px-4 py-2">21</td>
                    <td className="px-4 py-2">Used</td>
                    <td className="px-4 py-2">Australia</td>
                    <td className="px-4 py-2">Boeing</td>
                    <td className="px-4 py-2">737</td>
                    <td className="px-4 py-2">Furniture</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    <td className="px-4 py-2">939</td>
                    <td className="px-4 py-2">37</td>
                    <td className="px-4 py-2">35</td>
                    
                    </tr>
                    <tr className="border-b">
                    <td className="px-4 py-2">Engine</td>
                    <td className="px-4 py-2">Aluminum</td>
                    <td className="px-4 py-2">21</td>
                    <td className="px-4 py-2">Used</td>
                    <td className="px-4 py-2">North America</td>
                    <td className="px-4 py-2">Embraer</td>
                    <td className="px-4 py-2">Citation X</td>
                    <td className="px-4 py-2">Furniture</td>
                    <td className="px-4 py-2">99</td>
                    <td className="px-4 py-2">31</td>
                    <td className="px-4 py-2">39</td>
                    <td className="px-4 py-2">9</td>
                    <td className="px-4 py-2">12</td>
                    <td className="px-4 py-2">33</td>
                    <td className="px-4 py-2">765</td>
                    <td className="px-4 py-2">34</td>
                    <td className="px-4 py-2">100</td>
                    <td className="px-4 py-2">123</td>
                    <td className="px-4 py-2">121</td>
                    <td className="px-4 py-2">41</td>
                    <td className="px-4 py-2">341</td>
                    <td className="px-4 py-2">40</td>
                    <td className="px-4 py-2">70</td>
                    <td className="px-4 py-2">439</td>
                    <td className="px-4 py-2">124</td>
                    <td className="px-4 py-2">33</td>
                    <td className="px-4 py-2">91</td>
                    <td className="px-4 py-2">17</td>
                    <td className="px-4 py-2">90</td>
                    
                    </tr>
                </tbody>
                </table>
           </div>



















            
    </div>
    <div className='mt-32'>
        <Footer/>
    </div>
</div>
    


    
    
    </div>
    
    
    </>
  )
}

export default seller
