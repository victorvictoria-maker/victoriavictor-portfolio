import CreateSomething from "@/components/CreateSomething";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <main className='px-4 lg:px-12'>
        <div className='relative mt-6 '>
          <h1 className='absolute w-full text-[70px] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] font-bold opacity-10 select-none pointer-events-none '>
            About Me
          </h1>
          <div className='pt-7 md:pt-16 md:pb-6 lg:pt-28 lg:pb-10 xl:pt-36  px-4 md:px-6 lg:px-8 mb-2'>
            <h1 className='font-semibold text-2xl leading-6 md:text-4xl  '>
              About Me
            </h1>
            <p>From Botany to Code: My Journey</p>
          </div>
        </div>
        <section className='flex flex-col gap-y-6 md:gap-y-10 px-4 md:px-6 lg:px-8'>
          <Image
            src='/images/about1.png'
            alt='Instagram Icon'
            width={1148}
            height={152}
          />
          <p>
            My path to web development took an unexpected turn. I was studying
            botany when the world paused during the COVID-19 pandemic. Instead
            of letting the break slow me down, I decided to explore new
            opportunities and accidentally stumbled into coding.
          </p>
          <p>
            My first steps in front-end development were both exciting and
            challenging. I began by recreating an adventure website from a
            simple HTML and CSS template. The moment that really hooked me was
            when I tackled my first JavaScript project—a basic light bulb
            toggle. It took me days to figure out that I needed an ‘if’
            condition, but the thrill of solving that puzzle sparked a fire in
            me. That curiosity and drive to learn have been my guiding forces
            ever since.
          </p>
          <Image
            src='/images/about2.png'
            alt='Instagram Icon'
            width={1148}
            height={328}
          />
          <p>
            The more I built, the more I realized that coding wasn&apos;t just
            about solving problems—it was about creating things that matter.
            That&apos;s what led me to pursue a diploma in Software Engineering
            (Front-end) at AltSchool Africa, where I had the privilege to learn
            under great mentors and developers. I completed the program in
            September 2024, and the experience has equipped me with not just
            technical skills but also the mindset to contribute meaningfully to
            the ever-evolving world of technology. When I&apos;m not coding, I
            love to read and explore new ideas, and I&apos;m also passionate
            about giving back to the community through volunteering. This
            balance keeps me grounded and continually learning from the world
            around me.
          </p>
          <p>
            I&apos;ve had my share of bugs, breakthroughs, and everything in
            between, and I&apos;m more excited than ever to continue learning by
            building. I&apos;m ready to bring my passion, curiosity, and
            eagerness to grow into a full-time role where I can help a company
            achieve its goals.
          </p>
        </section>
        <CreateSomething />
      </main>

      <Footer />
    </>
  );
};

export default page;
