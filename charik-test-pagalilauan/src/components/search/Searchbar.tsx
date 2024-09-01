import Icon from "../Icon";

const Searchbar = () => {
  return (
    <div className="bg-white w-full max-w-96 rounded-3xl border-2 border-custom-text/10 flex items-center px-4 shadow-xl shadow-custom-text/5">
      <input
        type="text"
        className="w-full py-4 rounded-3xl focus:outline-none "
        placeholder="Search the Blog"
      />
      <button>
        <Icon path="assets/icons/search.svg" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Searchbar;
