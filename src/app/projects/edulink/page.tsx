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
              <h1 className='font-semibold text-3xl md:text-4xl'>EduLink:</h1>
              <p className='text-xl md:text-2xl'>Connecting students to HODs</p>
            </div>
            <Link href='https://edulink-project.vercel.app/' target='blank'>
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/edulink2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            EduLink, developed during my Post Graduate Diploma Degree in
            Computer Science at UniAbuja, addresses the challenge of scheduling
            academic appointments efficiently. The platform allows the Head of
            Department (HOD) to set their available days for meetings, while
            students can book appointments with ease. To ensure timely
            scheduling, students can book appointments up to one day before the
            available dates.
          </p>
          <p className='font-light'>
            Built with Next.js and Supabase, EduLink provides a seamless
            experience for both administrators and students. TypeScript ensures
            type safety, Prisma handles data management, and Tailwind CSS
            delivers a responsive, clean design.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Appointment Scheduling:</span>
                HODs set available days, and students book appointments, with
                bookings limited to the day before.
              </li>
              <li>
                <span className='font-bold'>Email Notifications:</span>Automated
                emails are sent to students when their appointment is booked,
                approved, or canceled.
              </li>
              <li>
                <span className='font-bold'>Admin Panel:</span> HODs manage
                scheduling availability and appointment statuses.
              </li>
              <li>
                <span className='font-bold'>Authentication:</span> Secure login
                and registration via email/password.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              One significant challenge was implementing a dynamic scheduling
              system that manages appointment bookings and notifications
              efficiently. Integrating an email service was crucial for keeping
              students informed about their appointment status, and I learned
              valuable skills in incorporating email notifications into
              projects.
            </p>
          </div>
        </div>
        <Image
          src='/images/edulink3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project provided valuable experience in handling appointment
            scheduling and automated notifications. It also learnt how to
            integrate email services into projects effectively.
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
