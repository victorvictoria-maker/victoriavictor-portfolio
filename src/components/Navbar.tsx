"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='px-4 lg:px-20 flex justify-between items-center py-6 border-b border-[#565656]'>
      <Image
        // className='dark:invert'
        src='/images/logo.svg'
        alt='Vickys Logo'
        width={55}
        height={48}
        priority
      />

      <ul className='hidden lg:flex gap-7 font-atyp '>
        <Link href='/'>about me</Link>
        <Link href='/'>projects</Link>
        <Link href='/'>contact me</Link>
      </ul>

      <ul className='hidden lg:flex gap-3'>
        <Link href='/'>
          <Image
            src='images/igIcon.svg'
            alt='Instagram Icon'
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='images/linkedinIcon.svg'
            alt='Instagram Icon'
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='images/twitterIcon.svg'
            alt='Twitter Icon'
            width={24}
            height={24}
          />
        </Link>
        <Link href='/'>
          <Image
            src='images/behanceIcon.svg'
            alt='Behance Icon'
            width={24}
            height={24}
          />
        </Link>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
          {!isOpen ? <FiMenu /> : ""}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-[#1f1e1e] z-20 transition-transform transform w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex flex-col items-start justify-start space-y-6 p-6 h-full'>
          <button
            onClick={toggleMenu}
            className=' text-3xl self-end focus:outline-none mb-8'
          >
            <FiX />
          </button>

          <ul className='lg:hidden flex flex-col  gap-7 font-atyp '>
            <Link href='/' onClick={toggleMenu}>
              about me
            </Link>
            <Link href='/' onClick={toggleMenu}>
              projects
            </Link>
            <Link href='/' onClick={toggleMenu}>
              contact me
            </Link>
          </ul>

          <ul className='flex lg:hidden gap-3 mt-4'>
            <Link href='/'>
              <Image
                src='images/igIcon.svg'
                alt='Instagram Icon'
                width={24}
                height={24}
              />
            </Link>
            <Link href='/'>
              <Image
                src='images/linkedinIcon.svg'
                alt='Instagram Icon'
                width={24}
                height={24}
              />
            </Link>
            <Link href='/'>
              <Image
                src='images/twitterIcon.svg'
                alt='Twitter Icon'
                width={24}
                height={24}
              />
            </Link>
            <Link href='/'>
              <Image
                src='images/behanceIcon.svg'
                alt='Behance Icon'
                width={24}
                height={24}
              />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
