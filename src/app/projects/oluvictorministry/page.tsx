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
                Oluvictorministry:
              </h1>
              <p className='text-xl md:text-2xl'>
                Taking you to your Promise Land
              </p>
            </div>
            <Link href='https://oluvictorministry.vercel.app/' target='blank'>
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/oluvictor2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            This project was created for my church&apos;s ministry, showcasing
            church details and including daily devotionals that we send to
            members. Previously, our devotionals were sent via WhatsApp, but
            they were often delayed. The solution was to implement a feature on
            the web app where the daily devotional automatically displays at 12
            midnight for the corresponding day.
          </p>
          <p className='font-light'>
            Additional features include information on church programs,
            branches, giving options, sermons, and how to join services online,
            along with a contact form that sends messages to the ministry email.
            It was built with NextJs, Tailwind, Typescript, Prisma, Supabase,
            Date Fns, Resend and Zod.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Daily Devotional Display:</span>{" "}
                Automatically shows the devotional for the current day at
                midnight and also shows previous devotionals.
              </li>
              <li>
                <span className='font-bold'>Admin Panel:</span> Upload
                devotionals and manage other aspects of the web app.
              </li>
              <li>
                <span className='font-bold'>Contact Form:</span> Sends inquiries
                directly to the ministry&apos;s gmail.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              The biggest challenge was ensuring the devotional for each day
              only becomes visible at 12 midnight, even if devotionals for the
              week or month had already been uploaded. I used the date-fns
              library and javaScript logic to manage the display and restrict
              access to only the current day&apos;s devotional.
            </p>
          </div>
        </div>
        <Image
          src='/images/oluvictor3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>What next ❓</h2>
          <p className='font-light'>
            One of the things I plan to add is a section for tracking church
            finances, as we currently rely on a third-party service for that.
            This feature will provide a more integrated experience for both the
            church administration.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project enhanced my skills in handling data manipulation and
            controlling time-based content display. Managing the devotional
            uploads and visibility was a key learning experience.
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
