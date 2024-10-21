const CreateSomething = () => {
  return (
    <section className='flex flex-col items-center mt-16 md:mt-24'>
      <div className='max-w-[736px] flex flex-col items-center justify-center '>
        <h2 className='font-atyp font-semibold px-4 lg:px-0 mb-2 text-2xl md:text-4xl text-center'>
          Let&apos;s create something amazing together!
        </h2>
        <p className='font-atyp mb-8 px-12 lg:px-32 text-center'>
          Whether you&apos;re seeking a developer or just looking to connect,
          feel free to reach out.
        </p>
        <button className='border rounded-full py-4 px-16 border-[#C2C2C2]'>
          Let&apos;s connect
        </button>
      </div>
    </section>
  );
};

export default CreateSomething;
