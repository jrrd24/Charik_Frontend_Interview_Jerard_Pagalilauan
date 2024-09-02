import GradientButton from "../buttons/GradientButton";

const ErrorPage = () => {
  return (
    <div className=" text-7xl h-[calc(100dvh-80px)] w-dvw flex flex-col justify-center items-center gap-8">
      <h1>🚧Error 404</h1>
      <p className="text-2xl text-custom-text/60">
        Page / Feature Under Construction
      </p>
      <GradientButton className="text-base">Go To Homepage</GradientButton>
    </div>
  );
};

export default ErrorPage;
