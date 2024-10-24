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
                Coalition Project
              </h1>
              <p className=' text-lg md:text-2xl'>
                Currently only viewable on laptops ⚠️
              </p>
            </div>
            <Link
              href='https://coalitionprojecttest.netlify.app/patients/Jessica%20Taylor'
              target='blank'
            >
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/coalition2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            The Coalition Project was a front-end development test for a job
            application. Given a pre-designed UI and API, I was tasked with
            building a functional web page to display patient data, including
            health status and test results.
          </p>
          <p className='font-light'>
            I used React JS and Tailwind CSS to create an interface optimized
            for larger screens.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Patient Data Display: </span>
                View detailed patient information including health status and
                test results.
              </li>
              <li>
                <span className='font-bold'>Chart Integration:</span>Visualize
                patient data through interactive charts.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              A key challenge was creating interactive charts from the provided
              API data, a new experience for me. I used Chart.js and
              react-chartjs-2 to visualize the data effectively, gaining
              valuable insights into data representation and integration.
            </p>
          </div>
        </div>
        <Image
          src='/images/coalition3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>What next ❓</h2>
          <p className='font-light'>
            I plan to focus on making the project responsive for smaller
            screens. This will involve adapting the layout and optimizing the
            user experience across various device sizes.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project enhanced my skills in adapting to new technologies and
            integrating complex features. It underscored the importance of
            seeking guidance from mentors and leveraging available tools to
            tackle challenges effectively.
          </p>
        </div>
        <Link href='/'>
          <button className='font-semibold text-2xl mt-6 underline'>
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
