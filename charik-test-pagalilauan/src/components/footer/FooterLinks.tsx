import { Link } from "react-router-dom";

type Props = {
  title: string;
  links: Links[];
};

type Links = {
  id: number;
  title: string;
  path: string;
};

const FooterLinks = ({ title, links }: Props) => {
  return (
    <>
      <h6>{title}</h6>
      <ul className="my-4 text-custom-text/60 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className=" hover:underline hover:decoration-custom-text/60 text-lg"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
