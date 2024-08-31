import Icon from "../../Icon";

const NeedDemo = () => {
  return (
    <>
      <div className="spacer orange-wave" />
      <section className="py-24 bg-primary w-dvw flex items-center justify-center">
        <div className="container flex md:flex-row flex-col items-center justify-center gap-[8dvw]">
          <h5 className=" text-white text-4xl md:text-5xl font-medium">
            Need a Demo ?
          </h5>

          <button className="bg-white p-3 rounded-lg select-none flex items-center gap-8 md:gap-24 hover:scale-105 transition-all duration-300">
            <div className="flex gap-4">
              <img
                src="https://www.charik.fr/hs-fs/hubfs/photo-jimmy-profile.jpg?width=660&name=photo-jimmy-profile.jpg"
                className="h-12 w-12 rounded-full bg-slate-200"
              />
              <div className="text-left">
                <h6 className=" text-base md:text-lg  font-medium">
                  How you met Jimmy ?
                </h6>
                <p className=" text-sm :text-base text-custom-text/60">
                  See his agenda ...
                </p>
              </div>
            </div>

            <div>
              <Icon
                path="/assets/icons/arrow-long-right.svg"
                className="h-auto w-5 md:w-7"
              />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default NeedDemo;
