import React from "react";
import Youlip from "/assets/YouLIP.png";
import Bloom from "/assets/BLOOM.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Leaders = () => {
  return (
    <div>
      <div className="text-center text-sm font-bold px md:text-2xl  py-4">Building and Empowering Responsible Young Leaders</div>
      <div className="flex flex-col xs:gap-4 md:gap-10 w-full px-[8.5%]">
      {/* <div className='relative inset-0 bg-[#c1392b] opacity-60'></div> */}
      <div className="relative" >
       <p className="absolute z-10 italic text-3xl md:text-5xl right-4 md:right-8 top-2 text-white">BLOOM</p>
         <img src={Bloom}/>
      </div>
       <div className="relative"> 
          <p className="absolute z-10 italic text-3xl md:text-5xl left-6 top-2 text-white">YouLIP</p>
          <img src={Youlip}/>
          <div className="overlayx absolute mx-0  "></div>
       </div>
      
      </div>
     <div className="text-center py-10 justify-center align-center">
        <div >
            <p className="font-bold text-2xl md:text-3xl">Follow us</p>
            <p className="font-xl py-4 ">Follow us and Stay updated on all our activities</p>
            <div className="flex flex-row text-[#c1392b] text-4xl space-x-2 align-center justify-center ">
              <a className="" href="https://m.facebook.com/uzommiricentre"><FaFacebook/></a> 
              <a href="https://www.linkedin.com/in/uzommiri-study-center-1a1285283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
              <a href="mailto:uzommiri.site@gmail.com"><SiGmail/></a> 
            </div>
        </div>
     </div>
    
    </div>
  );
};

export default Leaders;
