import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Icon from "../Icon";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import { useMenuToggle } from "../../lib/stores/NavToggles";
import GradientButton from "../buttons/GradientButton";

const Navbar = () => {
  const { setIsChecked } = useMenuToggle();
  return (
    <nav className=" bg-white w-full flex items-center justify-center lg:flex-row flex-col fixed">
      <div className="container py-2 px-4 md:px-8  flex justify-between items-center">
        <Link to={"/"} onClick={() => setIsChecked(false)}>
          <img src="/assets/logo.svg" className="h-14 md:h-16 lg:h-18 w-auto" />
        </Link>
        <div className="flex gap-4 items-center">
          <NavLinks className="hidden lg:flex" />
          <div className=" w-[0.1rem] h-8 bg-custom-text/20 hidden lg:block" />
          <div className="flex gap-4 items-center">
            <Link to={"/search"}>
              <Icon path="assets/icons/search.svg" />
            </Link>

            <GradientButton className="hidden md:block">Demo</GradientButton>
            <MenuButton className="block lg:hidden" />
          </div>
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
