import { SOCMED_LINKS } from "../../lib/Defaults";
import Icon from "../Icon";

const FooterAbout = () => {
  return (
    <>
      <h6>About Charik</h6>
      <div className="flex flex-col gap-6">
        <p className="text-custom-text/60">
          We streamline data entry and information gathering for sales reps to
          focus on client engagement and closing deals.
        </p>
        <div className="flex gap-6 text-primary">
          {SOCMED_LINKS.sort((a, b) => a.order - b.order).map((link) => (
            <a href={link.link} target="_blank" key={link.id}>
              <Icon Icon={link.Icon} className="aspect-square h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterAbout;
