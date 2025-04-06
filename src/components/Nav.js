import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BiBriefcase, BsChatSquare, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Nav = () => {
  return <div>
    <nav className='fixed bottom-2 lg:bottom-8 overflow-hiden z-50 w-full'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-whitw/50'>
        <Link 
            to='home' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
        </Link>
        <Link 
            to='about' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
        </Link>
        <Link 
            to='service' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
        </Link>
        <Link 
            to='work' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
        </Link>
        <Link 
            to='contact' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquareText />
        </Link>
        </div>

      </div>

    </nav>
  </div>;
};

export default Nav;
