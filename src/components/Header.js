import React from 'react';

import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <div className="text-start">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-60% via-[#3bace2] to-[#406aff] text-transparent bg-clip-text">
                KHOERUL
              </h1>
              <h2 className="text-4xl font-bold text-white">FAJRI</h2>
            </div>
          </a>
          <Link to='contact' smooth={true} spy={true} offset={-200} className="cursor-pointer">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
