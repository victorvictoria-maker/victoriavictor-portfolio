import CreateSomething from "@/components/CreateSomething";
import Footer from "@/components/Footer";
import Skills from "@/components/landingpage/Skills";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-4 md:mx-20'>
        {/* flex flex-col items-center */}
        <section className='my-12 md:my-20'>
          <div className='max-w-[544px] flex flex-col mx-auto items-center justify-center '>
            <Image
              src='/images/hero.png'
              alt='Instagram Icon'
              width={160}
              height={160}
              className='mb-6 md:mb-8'
            />
            <h3 className='font-atyp mb-1 md:mb-3 '>
              hi, i&apos;m Victoria Victor ✌️
            </h3>
            <h1 className='font-atyp font-semibold text-xl md:text-4xl mb-4 md:mb-8  text-center '>
              A passionate developer crafting innovative solutions for the
              digital world.
            </h1>
            <button className='border rounded-full py-2 md:py-4 px-8 md:px-16 border-[#C2C2C2]'>
              See my works
            </button>
          </div>

          <Skills />

          <p className='hidden md:block px-8 font-atyp font-light leading-6 mt-20 text-justify'>
            I&apos;m a front-end developer who loves turning creative web
            concepts into seamless, engaging experiences. Driven by a passion
            for technology and design, I build web applications that are
            functional, visually captivating, and built with clear, elegant, and
            efficient code. I continually grow by gaining valuable insights and
            guidance from experienced professionals, and I aspire to use my
            skills to make a meaningful impact on the world someday.{" "}
            <Link href='/' className='underline'>
              <span className='font-normal '>
                <i>See More</i>
              </span>
            </Link>
          </p>
        </section>

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
                  OluvictorMinistry
                </p>
                <p className='text-sm md:text-base'>Web Design</p>
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
                <p className='text-sm md:text-base'>Web Design</p>
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
                <p className='text-sm md:text-base'>Web Design</p>
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
                <p className='text-sm md:text-base'>Web Design</p>
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
                <p className='text-sm md:text-base'>Web Design</p>
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
                <p className='text-sm md:text-base'>Web Design</p>
              </div>
            </div>
          </div>
        </section>

        <CreateSomething />
      </main>
      <Footer />
    </>
  );
}
