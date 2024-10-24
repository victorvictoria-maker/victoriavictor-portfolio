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
                GithubApi Project
              </h1>
            </div>
            <Link
              href='https://altschoolgithubproject.netlify.app/'
              target='blank'
            >
              <button className='w-full md:w-fit border rounded-full py-3 px-8 border-[#C2C2C2] mt-4 md:mt-0 '>
                Preview Live Demo
              </button>
            </Link>
          </div>
          <Image
            src='/images/githubproject2.png'
            alt='A part of oluvictor ministry website'
            width={1498}
            height={152}
            className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
          />
          <p className='mb-4 font-light'>
            This GitHub Project was built as my second-semester exam project at
            AltSchool Africa. This application is designed to consume the GitHub
            API, fetching repositories and their relevant details, while giving
            users the ability to navigate through repository data using
            pagination and dynamic routing.
          </p>
          <p className='font-light'>
            This project was crucial in putting my React skills together as I
            was just learning the technology. I also pushed myself to implement
            concepts like React Query, pagination, and dynamic routing within a
            single app, which greatly enhanced my understanding of building
            modern web applications with React JS.
          </p>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Features at a Glance 🔎
            </h2>
            <ul className='font-light list-disc ml-6'>
              <li>
                <span className='font-bold'>Repository Listing:</span> Retrieves
                and displays repositories from GitHub using the GitHub API.
              </li>
              <li>
                <span className='font-bold'>Pagination:</span> React Paginate is
                used to display 6 repositories per page, enabling users to
                navigate through the list efficiently.
              </li>
              <li>
                <span className='font-bold'>Efficient Data Fetching:</span> The
                application uses React Query for API data fetching, ensuring
                efficient and real-time updates without the need for manual
                refresh.
              </li>
              <li>
                <span className='font-bold'>SEO Optimization:</span>Integrated
                React Helmet Async to manage metadata and improve SEO.
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='font-semibold text-2xl mb-2'>
              Technical Challenges & Solutions 💡
            </h2>
            <p className='font-light'>
              Initially, managing API calls, pagination, and dynamic routing
              felt overwhelming, but utilizing React Query helped streamline
              data fetching and cache management. Implementing pagination was
              another challenge, but using React Paginate simplified the process
              and improved performance.
            </p>
          </div>
        </div>
        <Image
          src='/images/githubproject3.png'
          alt='A part of oluvictor ministry website'
          width={1498}
          height={244}
          className='w-full object-cover rounded-lg md:rounded-2xl my-6 md:my-12'
        />
        <div className='mt-12'>
          <h2 className='font-semibold text-2xl mb-2'>Lesson Learned ✍️</h2>
          <p className='font-light'>
            This project helped me combine multiple React concepts and elevated
            my skills in building full-fledged React applications.
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
