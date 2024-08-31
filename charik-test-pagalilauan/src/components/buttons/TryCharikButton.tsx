const TryCharikButton = () => {
  return (
    <button className="bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg hover:shadow-xl shadow-primary-dark/30 hover:shadow-primary-dark/40 p-3 rounded-lg select-none flex items-center gap-16 md:gap-32 hover:scale-105 transition-all duration-300">
      <div className="flex gap-4">
        <div className="text-left">
          <h6 className=" text-base md:text-lg  font-medium">Try Charik</h6>
          <p className=" text-sm :text-base text-white/80">14 day free trial</p>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default TryCharikButton;
