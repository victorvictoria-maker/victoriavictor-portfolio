"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SelectedWorks = () => {
  const [projectNo, setProjectNo] = useState(4);

  const loadMoreProjects = () => {
    setProjectNo(6);
  };

  return (
    <>
      <section className='mt-16 md:mt-24'>
        <div className='font-atyp'>
          <h2 className='text-3xl mb-2'>Selected Works</h2>
          <p className='text-justify'>
            I enjoy applying my knowledge and skills to build, explore new
            technologies, and learn through hands-on experience.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 md:gap-x-8 gap-y-8 md:gap-y-12'>
          <div className='relative'>
            <Image
              src='/images/oluvictor1.png'
              alt='Oluvictor Ministry Landing Page'
              width={729}
              height={468}
              className='w-full object-cover'
            />
            <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
              <p className='font-light text-sm md:text-base'>
                <Link
                  href='https://oluvictorministry.vercel.app/ '
                  target='blank'
                >
                  OluvictorMinistry
                </Link>
              </p>
              <p className='text-sm md:text-base underline'>
                <Link href='/projects/oluvictorministry'>Check It Out</Link>
              </p>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/careconnect1.png'
              alt='Tuition Landing Page'
              width={729}
              height={468}
              className='w-full object-cover'
            />
            <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
              <p className='font-light text-sm md:text-base'>
                <Link
                  href='https://capstone-project-rouge.vercel.app/'
                  target='blank'
                >
                  Care Connect
                </Link>
              </p>
              <p className='text-sm md:text-base underline'>
                <Link href='/projects/careconnect'>Check It Out</Link>
              </p>
            </div>
          </div>

          {/* <div className='relative'>
        <Image
          src='/images/mosesafolabi.png'
          alt='Moses Portfolio Landing Page'
          width={729}
          height={468}
          className='w-full object-cover'
        />
        <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
          <p className='font-light text-sm md:text-base'>
            <Link href='https://mosesafolabi.com/' target='blank'>
              Moses&apos; Portfolio
            </Link>
          </p>
          <p className='text-sm md:text-base underline'>
            <Link href='/projects/mosesportfolio'>Check It Out</Link>
          </p>
        </div>
      </div> */}
          <div className='relative'>
            <Image
              src='/images/edulink1.png'
              alt='Edulink Landing Page'
              width={729}
              height={468}
              className='w-full object-cover'
            />
            <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
              <p className='font-light text-sm md:text-base'>
                <Link href='https://edulink-project.vercel.app/' target='blank'>
                  Edulink
                </Link>
              </p>
              <p className='text-sm md:text-base underline'>
                <Link href='/projects/edulink'>Check It Out</Link>
              </p>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/tuition1.png'
              alt='Tuition Landing Page'
              width={729}
              height={468}
              className='w-full object-cover'
            />
            <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
              <p className='font-light text-sm md:text-base'>
                <Link href='https://altwavetuition.vercel.app' target='blank'>
                  Tuition by Flutterwave
                </Link>
              </p>
              <p className='text-sm md:text-base underline'>
                <Link href='/projects/tuition'>Check It Out</Link>
              </p>
            </div>
          </div>
          {projectNo === 6 && (
            <>
              <div className='relative'>
                <Image
                  src='/images/coalition1.png'
                  alt='Coalition Project'
                  width={729}
                  height={468}
                  className='w-full object-cover'
                />

                <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
                  <p className='font-light text-sm md:text-base'>
                    <Link
                      href='https://coalitionprojecttest.netlify.app/patients/Jessica%20Taylor'
                      target='blank'
                    >
                      Coalition Project
                    </Link>
                  </p>
                  <p className='text-sm md:text-base underline'>
                    <Link href='/projects/coalitionproject'>Check It Out</Link>
                  </p>
                </div>
              </div>
              <div className='relative'>
                <Image
                  src='/images/githubproject1.png'
                  alt='Github Project Landing Page'
                  width={729}
                  height={468}
                  className='w-full object-cover'
                />
                <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
                  <p className='font-light text-sm md:text-base'>
                    <Link
                      href='https://altschoolgithubproject.netlify.app/'
                      target='blank'
                    >
                      Github Project
                    </Link>
                  </p>
                  <p className='text-sm md:text-base underline'>
                    <Link href='/projects/githubproject'>Check It Out</Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {projectNo === 4 && (
        <div className='flex justify-center mt-6'>
          <button
            className='border rounded-full py-4 px-16 border-[#C2C2C2]'
            onClick={loadMoreProjects}
          >
            See More Projects
          </button>
        </div>
      )}
    </>
  );
};

export default SelectedWorks;
