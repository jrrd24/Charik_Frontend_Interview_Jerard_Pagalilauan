import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useMenuToggle } from "../../lib/stores/NavToggles";
import { NAV_LINKS } from "../../lib/Defaults";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { cn } from "../../lib/utils/cn";
import GradientButton from "../buttons/GradientButton";

const MobileMenu = () => {
  const { isChecked, setIsChecked } = useMenuToggle();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const HandleOnClick = (path?: string) => {
    if (path) {
      navigate(path);
      setIsChecked(false);
    }
  };
  return (
    <menu
      className={!isChecked ? "header-menu-hidden" : "header-menu w-dvw p-8"}
    >
      <Accordion transition>
        {NAV_LINKS.map((content) => (
          <AccordionItem
            key={content.id}
            header={
              <>
                {content.title}
                {content.subitems && (
                  <img
                    className="chevron h-6"
                    src={"/assets/icons/chevron-down.svg"}
                    alt="Chevron Down"
                  />
                )}
              </>
            }
            onClick={() => HandleOnClick(content.path)}
            className={cn(
              "border-b-[1px]",
              (content.subitems?.some((item) => item.path === pathname) ||
                content.path == pathname) &&
                "text-primary font-semibold"
            )}
            buttonProps={{
              className: ({ isEnter }) =>
                `${"itemBtn"} ${isEnter && "itemBtnExpanded"}`,
            }}
            contentProps={{ className: "itemContent" }}
            panelProps={{ className: `${content.subitems && "itemPanel"}` }}
          >
            {content.subitems && (
              <Accordion>
                {content.subitems.map((items) => (
                  <AccordionItem
                    key={items.id}
                    header={items.title}
                    onClick={() => HandleOnClick(items.path)}
                    className={cn(
                      "item",
                      items.path == pathname
                        ? "text-primary font-semibold"
                        : "text-custom-text font-normal"
                    )}
                  />
                ))}
              </Accordion>
            )}
          </AccordionItem>
        ))}
        <AccordionItem
          header={<GradientButton className="block md:hidden" />}
          className={"py-8"}
        />
      </Accordion>
    </menu>
  );
};

export default MobileMenu;
