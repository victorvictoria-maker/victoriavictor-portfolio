import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='mt-10 px-4 lg:px-20 flex justify-between items-center py-6 border-t border-[#565656]'>
      <Link href='/'>
        <Image
          // className='dark:invert'
          src='/images/logo.svg'
          alt='Vickys Logo'
          width={55}
          height={48}
          priority
        />
      </Link>

      <p className='hidden md:block font-atyp'>
        All rights reserved | 2024 VictoriaVictor
      </p>

      <ul className='flex gap-3 '>
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
    </footer>
  );
};

export default Footer;
