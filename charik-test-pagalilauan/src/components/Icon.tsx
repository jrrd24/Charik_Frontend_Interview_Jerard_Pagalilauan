type Props = { path: string };

const Icon = ({ path }: Props) => {
  return <img src={path} className={`h-[24px] w-[24px]`} />;
};

export default Icon;
