import { FOOTER_LINKS, FOOTER_SHORTCUTS } from "../../lib/Defaults";
import FooterAbout from "./FooterAbout";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white flex justify-center">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-4 pb-12">
          <div className="col-span-6 lg:col-span-2 flex flex-col gap-2">
            <FooterAbout />
          </div>
          <div className="col-span-6  lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {FOOTER_LINKS.map((data) => (
              <div key={data.id} className="flex flex-col gap-2">
                <FooterLinks
                  key={data.id}
                  title={data.title}
                  links={data.links}
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" border-t-[1px] pt-6 flex lg:justify-between flex-col lg:flex-row gap-8 lg:gap-0">
          <p className="m-0 text-custom-text/40">
            {`Copyright © ${year} Charik`}{" "}
          </p>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {FOOTER_SHORTCUTS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className=" hover:underline hover:decoration-custom-text/60"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
