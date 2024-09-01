import { AccordionItem as Item } from "@szhsin/react-accordion";

type Props = {
  header: string;
  initialEntered: boolean;
  children: any;
};

const AccordionItem = ({ header, ...rest }: Props) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img
          className="chevron h-6 w-6 md:h-8 md:w-8"
          src={"/assets/icons/chevron-down.svg"}
          alt="Chevron Down"
        />
      </>
    }
    className="item"
    buttonProps={{
      className: ({ isEnter }) =>
        `${"itemBtn"} ${isEnter && "itemBtnExpanded"}`,
    }}
    contentProps={{ className: "itemContent" }}
    panelProps={{ className: "itemPanel" }}
  />
);

export default AccordionItem;
