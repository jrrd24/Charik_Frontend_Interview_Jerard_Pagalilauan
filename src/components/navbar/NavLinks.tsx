import { NAV_LINKS } from "../../lib/Defaults";
import { cn } from "../../lib/utils/cn";
import NavLink from "./NavLink";

type Props = {
  className?: string;
};

const NavLinks = ({ className }: Props) => {
  return (
    <ul className={cn("flex gap-8 w-fit", className)}>
      {NAV_LINKS.map((data) => (
        <NavLink
          key={data.id}
          id={data.id}
          title={data.title}
          path={data.path}
          subitems={data.subitems}
        />
      ))}
    </ul>
  );
};

export default NavLinks;
