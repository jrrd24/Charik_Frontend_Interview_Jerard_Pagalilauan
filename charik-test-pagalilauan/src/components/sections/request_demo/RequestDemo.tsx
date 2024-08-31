const RequestDemo = () => {
  return (
    <section className="py-16 bg-primary w-dvw flex justify-center">
      <div className="container text-white flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h5 className="text-3xl md:text-5xl font-semibold">
            Want to see Charik live?
          </h5>
          <p className="text-base md:text-lg">
            The optimal approach is to request a demo!
          </p>
        </div>

        <button className="hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg select-none border-2 border-white h-fit text-base md:text-lg hover:bg-white hover:text-custom-text">
          Book A Demo
        </button>
      </div>
    </section>
  );
};

export default RequestDemo;
