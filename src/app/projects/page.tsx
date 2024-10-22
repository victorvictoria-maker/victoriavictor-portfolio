import CreateSomething from "@/components/CreateSomething";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <main className='px-4 lg:px-20'>
        <section className='mt-16 md:mt-24'>
          <div className='font-atyp'>
            <h2 className='text-3xl mb-2'>Selected Works</h2>
            <p className='text-justify'>
              I enjoy applying my knowledge and skills to build, explore new
              technologies, and learn through hands-on experience.
            </p>
          </div>
          <div className='grid grid-cols-1 mt-12 md:gap-x-8 gap-y-8 md:gap-y-12'>
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
                  OluvictorMinistry
                </p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
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
                <p className='font-light text-sm md:text-base'>Care Connect</p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
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
                  Tuition by Flutterwave
                </p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='/images/edulink1.png'
                alt='Tuition Landing Page'
                width={729}
                height={468}
                className='w-full object-cover'
              />
              <div className='absolute inset-x-5 md:inset-x-10 bottom-2 md:bottom-4 px-6 py-4 bg-[#1f1e1e] bg-opacity-95 text-white flex justify-between font-atyp'>
                <p className='font-light text-sm md:text-base'>Edulink</p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
              </div>
            </div>
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
                  OluvictorMinistry
                </p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
              </div>
            </div>
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
                  Coalition Project
                </p>
                <p className='text-sm md:text-base underline'>Check It Out</p>
              </div>
            </div>
          </div>
        </section>
        <CreateSomething />
      </main>

      <Footer />
    </>
  );
};

export default page;
