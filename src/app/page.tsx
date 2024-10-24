import CreateSomething from "@/components/CreateSomething";
import Footer from "@/components/Footer";
import SelectedWorks from "@/components/landingpage/SelectedWorks";
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
            <Link href='/projects'>
              <button className='border rounded-full py-2 md:py-4 px-8 md:px-16 border-[#C2C2C2]'>
                See my works
              </button>
            </Link>
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

        <SelectedWorks />

        <CreateSomething />
      </main>
      <Footer />
    </>
  );
}
