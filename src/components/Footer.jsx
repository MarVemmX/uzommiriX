import React from 'react'
import Logo from "/assets/UzoLogo.png";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa" ;
import {MdLocationOn} from "react-icons/md"
import Ellipse from '/assets/EllipseWoman.png'
import { Link } from 'react-router-dom/dist';
const Footer = () => {
  return (
    <div className='relative flex overflow-hidden flex-col lg:flex-row lg:justify-around lg:py-12 bg-[#c1392b] p-6'>
        <div className='absolute lg:translate-y-[12rem] 2xl:right-[35rem] lg:right-[23rem] xl:-translate-x-[42em]  lg:skew-3 xl:skew-y-12 lg:rotate-0 xs:rotate-[-220deg] lg:scale-x-[1] xs:scale-x-[-1]  xs:translate-y-[26rem] -right-20   '>
          <img src={Ellipse}/>
        </div>



       <Link to={'/'}>
          <div className="flex flex-row space-x-2">
            <img
              className='w-6 h-8 md:w-14 md:h-16 lg:w-14 lg:h-22'
              src={Logo}
              alt="Logo"
            />
            <div className='flex flex-col text-white -space-y-2'>
              <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
              <p className='text-md md:text-xl lg:text-xl'>Study Centre</p>
            </div>
          </div>
       </Link>

        <div className='xs:text-sm py-4 text-white'>
            <p className='text-2xl pb-2 font-bold'>Contact Us</p>
            <div className='flex flex-row'>
                <p className='px-2 py-2 bg-black rounded-full'> <MdEmail/> </p>:
                <p className='pl-2'>uzommiristudyctr@gmail.com</p>
            </div>
            <div className='flex flex-row py-2'>
                <p  className='relative px-2 py-2 bg-black rounded-full'> <FaPhone/> </p>:
                <div className='absolute px-10' >
                    <p>+234 806 138 6268</p>
                    <p>+234 806 763 8748</p>
                    <p>+234 908 541 8026</p>
                </div>
            </div>
            <div className=' py-6 flex flex-row'>
                <p className='relative px-2 py-2 bg-black rounded-full'> <MdLocationOn/>  </p> 
                <p className='mt-2 pl-2'>:11A Igboeze Street Independence Layout, Enugu</p>
            </div>
        </div>
        <div className='text-white list-none'>
            <p className='text-2xl font-bold '>Info</p>
            <div className='py-2 space-y-2'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About Uzommiri</li></Link>
                <Link to={'/tweensandteens'}><li>Tweens and Teens</li></Link>
                <Link to={'/youngadults'}><li>Young Adults</li></Link>
                <Link to={'/communityservice'}><li>Community Service</li></Link>
                <Link to={'/faithformation'}><li>Faith Formation</li></Link>
                <Link to={'/gallery'}><li>Gallery</li></Link>
                <Link to={'/donate'}><li>Donate</li></Link>
            </div>
           
        </div>
    </div>
  )
}

export default Footer