import React from 'react'
import univ from '/assets/univ.png';
import mentoring from '/assets/mentoring.png';
import pearl from '/assets/Pearl.png';
import retreat from '/assets/retreat.png';


const Activities = () => {
  return (
    <div className='px-4 lg:px-0 flex flex-col'>
        <div className='text-center'>
            <p className='text-xl md:text-5xl font-bold pt-10'>Our Activities
            </p>
            <p className='text-lg md:text-2xl py-2 lg:pb-20'>Making a difference, one activity at a time</p>
       </div>
       <div>
            <div className='flex flex-col md:flex-row  '> 
                <img className='md:w-1/2' src={mentoring}/>
                <div className='md:w-1/2 xs:py-4 md:p-4 md:p-14'>
                 <div className='flex flex-col lg:px-20 lg:py-8'>
                    <p className='text-xl md:text-3xl font-bold lg:pb-6'>Mentoring</p>
                    <p className='text-lg md:text-2xl py-4 lg:pb-12  '> Our Mentoring program pairs experienced <br className='hidden md:block'/> professionals with young adults for guidance in personal and professional growth. Mentors provide advice, support, and valuable insights</p>
                    <a className='w-40 text-center text-white py-4 bg-[#c1392b]' href='#calendar'>See Schedules</a>    
                 </div> 
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse  '> 
                <img className='md:w-1/2' src={pearl}/>
                <div className='md:w-1/2 xs:py-4 md:p-4 md:p-14'>
                 <div className='flex flex-col lg:px-20 lg:py-8'>
                    <p className='text-xl md:text-3xl font-bold lg:pb-6'>Pearl Club</p>
                    <p className='text-lg md:text-2xl py-4 lg:pb-12  '> The Pearl Club is a vibrant community for young girls to develop essential life skills and build lasting friendships. Members learn leadership, teamwork, and self-confidence through workshops and activities.</p>
                    <a className='w-40 text-center text-white py-4 bg-[#c1392b]' href='http://www.bit.ly/pearlclubregistration'>Join Pearl</a>    
                 </div> 
                </div>
            </div>
            <div className='flex flex-col md:flex-row  '> 
                <img className='md:w-1/2' src={univ}/>
                <div className='md:w-1/2 xs:py-4 md:p-4 md:p-14'>
                 <div className='flex flex-col lg:px-20 lg:py-8'>
                    <p className='text-xl md:text-3xl font-bold lg:pb-6'>UNIV</p>
                    <p className='text-lg md:text-2xl py-4 lg:pb-12  '>UNIV is an annual international forum where university students discuss pressing global issues. It provides a platform for intellectual discourse, fostering a global perspective and encouraging societal change. </p>
                    <a className='w-40 text-center text-white py-4 bg-[#c1392b]' href='https://www.univforum.org/'>Join UNIV</a>    
                 </div> 
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse  '> 
                <img className='md:w-1/2' src={retreat}/>
                <div className='md:w-1/2 xs:py-4 md:p-4 md:p-14'>
                 <div className='flex flex-col lg:px-20 lg:py-8'>
                    <p className='text-xl md:text-3xl font-bold md:pb-6'>Yearly Retreat</p>
                    <p className='text-lg md:text-2xl py-4 md:pb-6  '> Our Yearly Retreat offers a rejuvenating escape for spiritual and personal growth. It's a time for reflection, relaxation, and connection, leaving participants inspired and recharged for their daily lives. </p>
                    {/* <p className='w-40 text-center text-white py-4 bg-[#c1392b]'>Apply</p>     */}
                    <div>
                    <p className='font-bold text-2xl'>Apply: </p>
                        <a className='px-10 underline hover:scale-150 text-[#c1392b] font-bold' href='https://forms.gle/n9NPiKpJzr9HkAkYA'>Women</a> <br/>
                        <a className='px-20 underline text-[#c1392b] font-bold' href='https://forms.gle/ojvLg2L7kpCnGNvq6'>Ladies</a>
                    </div>
                 </div> 
                </div>
            </div>
       </div>
    </div>
  )
}

export default Activities