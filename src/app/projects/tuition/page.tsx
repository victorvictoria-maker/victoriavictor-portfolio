import CreateSomething from "@/components/CreateSomething";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <main className='px-6 lg:px-20 text-justify'>
        <div className='mt-16 md:mt-24'>
          <div className='md:flex justify-between items-center '>
            <div>
              <h1 className='font-semibold text-3xl md:text-4xl'>
                Tuition by Flutterwave
              </h1>
              <p className=' text-lg md:text-2xl'>
                Currently only viewable on laptops ⚠️
              </p>
            </div>
            <Link href='https://altwavetuition.vercel.app' target='blank'>
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/tuition2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            This project was developed as part of AltSchool Africa&apos;s
            partnership with Flutterwave to create a solution for managing
            tuition payments. As the frontend developer, I am working alongside
            a team of specialists, including a product manager, backend
            engineer, product designers, and data analysts.
          </p>
          <p className='font-light'>
            The project is still a work in progress and currently only
            accessible on laptops, as it is not yet responsive. It is being
            built with NextJs, Tailwind, Typescript, Toastify, Swiper and Zod.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Authentication:</span> Secure
                registration and login for students and institutions.
              </li>
              <li>
                <span className='font-bold'>Dashboard:</span> Custom dashboards
                for both students and institutions to manage payments and track
                their activities.
              </li>
              <li>
                <span className='font-bold'>Tuition Payment:</span> Seamless
                payment gateway for tuition fees.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              One of the major challenges was working on a large-scale project
              with a team. I had to adapt to the workflow of a multidisciplinary
              team and figure out my tasks as the project progressed,
              particularly when integrating backend endpoints and managing
              frontend complexities.
            </p>
          </div>
        </div>
        <Image
          src='/images/tuition3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>What next ❓</h2>
          <p className='font-light'>
            The aim is to complete the project and also make the application
            fully responsive, ensuring it works smoothly on mobile devices to
            improve user experience across all platforms.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project gave me valuable experience in team collaboration,
            especially since most of my previous work was individual. I also
            gained insights into integrating backend endpoints and coordinating
            with other specialists to deliver a cohesive product.
          </p>
        </div>
        <Link href='/'>
          <button className='font-semibold text-2xl mt-6 underline'>
            {" "}
            ↩ Go Back{" "}
          </button>
        </Link>
        <CreateSomething />
      </main>

      <Footer />
    </>
  );
};

export default page;