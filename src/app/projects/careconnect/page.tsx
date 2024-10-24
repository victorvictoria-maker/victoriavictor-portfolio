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
                Care Connect:
              </h1>
              <p className='text-xl md:text-2xl'>
                Finding the Right Care for You
              </p>
            </div>
            <Link
              href='https://capstone-project-rouge.vercel.app/'
              target='blank'
            >
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/careconnect2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            Born out of the challenge of finding reliable medical assistance,
            this platform helps Nigerians locate hospitals efficiently,
            regardless of their location. This project was developed as my
            capstone project for AltSchool Africa.
          </p>
          <p className='font-light'>
            Leveraging Next.js and Supabase, the project ensures seamless
            integration and real-time data management, while TypeScript provides
            type safety. Prisma simplifies database operations, and Tailwind CSS
            delivers a clean, responsive design.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Hospital Search:</span> Quickly find
                hospitals by location or type of care.
              </li>
              <li>
                <span className='font-bold'>Filtering Options:</span>Refine
                results by state and facility type, including clinics, optical
                centers, and tertiary hospitals.
              </li>
              <li>
                <span className='font-bold'>Copy & Export:</span> Easily share
                results or download them as a CSV file.
              </li>
              <li>
                <span className='font-bold'>Admin Panel:</span>Efficiently
                manage hospital records with capabilities to add, edit, or
                update.
              </li>
              <li>
                <span className='font-bold'>Authentication:</span>Secure user
                registration and login via email/password or OAuth options like
                Google and GitHub.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              The project&apos;s key challenge was creating an efficient
              filtering system that maintained high performance with large
              datasets. Integrating secure authentication was another hurdle,
              successfully addressed with Supabase&apos;s robust OAuth and email
              authentication solutions.
            </p>
          </div>
        </div>
        <Image
          src='/images/careconnect3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>What next ❓</h2>
          <p className='font-light'>
            I want to add a map feature to visualize hospital locations, further
            simplifying the search process. Additionally, I&apos;m exploring
            partnerships with hospitals to expand and update the database
            continuously.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project enhanced my proficiency with Next.js, Prisma, and
            Supabase, particularly in managing real-time data and user
            authentication. Switching from NextAuth to Supabase for
            authentication showcased the value of adaptability in development.
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
