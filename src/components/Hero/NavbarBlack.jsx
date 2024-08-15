
// import React, { useState, useEffect } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";
// import { FaCaretDown } from "react-icons/fa";
// import Logo from "/assets/UzoLogo.png";
// import { Link } from 'react-router-dom/dist';


// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const toggleMenu = () => {
//     console.log('Toggling menu');
//     setIsOpen(!isOpen);
//     console.log('Menu state:', !isOpen);
//   };

//   useEffect(() => {
//     let timer;
//     if (isHovered) {
//       timer = setTimeout(() => {
//         setIsHovered(false);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [isHovered]);

//   return (
//     <nav className="bg-none z-50 p-4 relative z-50">
//       <div className="container mx-auto flex items-center justify-between space-x-0 ">
//         <Link to={'/'}>
//           <div className="flex flex-row text-black space-x-2">
//             <img
//               className='w-6 h-8 md:w-14 md:h-16'
//               src={Logo}
//               alt="Logo"
//             />
//             <div className='flex flex-col -space-y-2'>
//               <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
//               <p className='text-sm md:text-xl lg:text-xl'>Study Center</p>
//             </div>
//           </div>
//         </Link>
//         <div className="hidden mt-10 text-black lg:flex lg:text-xs space-x-16">
//           <Link to={'/'}><a href="/" className="">Home</a></Link>
//           <Link to={'/about'}><a href="/about" className="">About</a></Link>
//           <div
//             className="relative trigger "
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className='flex flex row space-x-2'>
//                 <p>Initiatives</p>
//                <p className='text-sm'> <FaCaretDown /></p>
//             </div>
//             <div
//               className={`sub z-50 absolute left-0  w-40 bg-black text-center py-4 text-black transition-all duration-500 ease-in-out 
//                 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
//             >
//                <Link to={'/tweensandteens'}><div className="text-white item p-2">Tweens and Teens</div></Link>
//               <Link to={'/youngadults'}><div className="text-white item p-2">Young Adults</div></Link>
//               <Link to={'/communityservice'}><div className="text-white item p-2">Community Service</div></Link>
//             </div>
//           </div>
//           <Link to={'/faithformation'}><a href="/faithformation" className="">Faith Formation</a></Link>
//           <Link to={'/gallery'}><a href="/gallery" className="">Gallery</a></Link>
//         </div>
//         <Link to={'/donate'}>
//           <div className=' hidden lg:block font-bold  text-xl px-8 py-4 text-white bg-[#c1392b]'>
//             Donate
//           </div>
//        </Link>

//         <div className="lg:hidden ">
//           <button onClick={toggleMenu} className="text-black ml-6 focus:outline-none">
//             {isOpen ? (
//              <p className='text-3xl'> <IoClose /></p>
//             ) : (
//              <p className='text-3xl'> <RxHamburgerMenu /></p>
//             )}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden bg-black py-6 text-center text-white text-sm absolute w-48 top-24  right-2 mx-auto">
//           <Link to={'/'}><a href="/" className="block py-2 px-4">Home</a></Link>
//           <Link to={'/about'}><a href="about" className="block py-2 px-4">About Uzommiri</a></Link>
//           <Link to={'/tweensandteens'}><a href="tweensandteens" className="block py-2 px-4">Tweens and Teens</a></Link>
//           <Link to={'/youngadults'}><a href="youngadults" className="block py-2 px-4">Young Adults</a></Link>
//           <Link to={'/communityservice'}><a href="communityservice" className="block py-2 px-4">Community Service</a></Link>
//           <Link to={'/faithformation'}><a href="faithformation" className="block py-2 px-4">Faith Formation</a></Link>
//           <Link to={'/gallery'}><a href="gallery" className="block py-2 px-4">Gallery</a></Link>
//           <Link to={'/donate'}><a href="donate" className="block py-2 px-12"> <p className=' bg-[#c1392b] py-2 mb-6'>Donate</p></a></Link>

//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import Logo from "/assets/UzoLogo.png";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    console.log('Toggling menu');
    setIsOpen(!isOpen);
    console.log('Menu state:', !isOpen);
  };

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        setIsHovered(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <nav className="bg-none z-50 p-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between space-x-0 ">
        <Link to={'/'}>
          <div className="flex flex-row text-black space-x-2">
            <img
              className='w-6 h-8 md:w-14 md:h-16'
              src={Logo}
              alt="Logo"
            />
            <div className='flex flex-col -space-y-2'>
              <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
              <p className='text-sm md:text-xl lg:text-xl'>Study Centre</p>
            </div>
          </div>
        </Link>
        <div className="hidden mt-10 text-black lg:flex lg:text-xs space-x-16">
          <Link to={'/'}>
            <a
              href="/"
              className={`relative ${currentPath === '/' ? 'text-black' : ''}`}
            >
              Home
              {currentPath === '/' && <span className="block border-b-2 border-black mt-1"></span>}
            </a>
          </Link>
          <Link to={'/about'}>
            <a
              href="/about"
              className={`relative ${currentPath === '/about' ? 'text-black' : ''}`}
            >
              About
              {currentPath === '/about' && <span className="block border-b-2 border-black mt-1"></span>}
            </a>
          </Link>
          <div
            className="relative trigger"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className='flex flex row space-x-2'>
              <p>Initiatives</p>
              <p className='text-sm'> <FaCaretDown /></p>
            </div>
            <div
              className={`sub z-50 absolute left-0  w-40 bg-black text-center py-4 text-black transition-all duration-500 ease-in-out 
                ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
              <Link to={'/tweensandteens'}>
                <div className="text-white item p-2">Tweens and Teens</div>
              </Link>
              <Link to={'/youngadults'}>
                <div className="text-white item p-2">Young Adults</div>
              </Link>
              <Link to={'/communityservice'}>
                <div className="text-white item p-2">Community Service</div>
              </Link>
            </div>
          </div>
          <Link to={'/faithformation'}>
            <a
              href="/faithformation"
              className={`relative ${currentPath === '/faithformation' ? 'text-black' : ''}`}
            >
              Faith Formation
              {currentPath === '/faithformation' && <span className="block border-b-2 border-black mt-1"></span>}
            </a>
          </Link>
          <Link to={'/gallery'}>
            <a
              href="/gallery"
              className={`relative ${currentPath === '/gallery' ? 'text-black' : ''}`}
            >
              Gallery
              {currentPath === '/gallery' && <span className="block border-b-2 border-black mt-1"></span>}
            </a>
          </Link>
        </div>
        <Link to={'/donate'}>
          <div className=' hidden lg:block font-bold  text-xl px-8 py-4 text-white bg-[#c1392b]'>
            Donate
          </div>
        </Link>

        <div className="lg:hidden ">
          <button onClick={toggleMenu} className="text-black ml-6 focus:outline-none">
            {isOpen ? (
              <p className='text-3xl'> <IoClose /></p>
            ) : (
              <p className='text-3xl'> <RxHamburgerMenu /></p>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-black py-6 text-center text-white text-sm absolute w-48 top-24  right-2 mx-auto">
          <Link to={'/'}>
            <a href="/" className="block py-2 px-4">
              Home
              {currentPath === '/' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/about'}>
            <a href="about" className="block py-2 px-4">
              About Uzommiri
              {currentPath === '/about' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/tweensandteens'}>
            <a href="tweensandteens" className="block py-2 px-4">
              Tweens and Teens
              {currentPath === '/tweensandteens' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/youngadults'}>
            <a href="youngadults" className="block py-2 px-4">
              Young Adults
              {currentPath === '/youngadults' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/communityservice'}>
            <a href="communityservice" className="block py-2 px-4">
              Community Service
              {currentPath === '/communityservice' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/faithformation'}>
            <a href="faithformation" className="block py-2 px-4">
              Faith Formation
              {currentPath === '/faithformation' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/gallery'}>
            <a href="gallery" className="block py-2 px-4">
              Gallery
              {currentPath === '/gallery' && <span className="block border-b-2 border-white mt-1"></span>}
            </a>
          </Link>
          <Link to={'/donate'}>
            <a href="donate" className="block py-2 px-12">
              <p className=' bg-[#c1392b] py-2 mb-6'>Donate</p>
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
