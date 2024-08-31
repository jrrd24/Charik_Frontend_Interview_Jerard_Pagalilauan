import {
  FaBalanceScale,
  FaCartArrowDown,
  FaCheckDouble,
  FaDatabase,
  FaGhost,
  FaInternetExplorer,
  FaLinkedinIn,
  FaMailBulk,
  FaMoneyBill,
  FaRegCircle,
  FaSearchDollar,
  FaSearchPlus,
} from "react-icons/fa";
import { FaHubspot } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiContactsBookFill } from "react-icons/ri";

export const KEY_FEATURES_DATA = [
  {
    id: 1,
    Icon: FaHubspot,
    type: "white",
    title: "Made for HubSpot",
    description:
      "The finest integration experience you'll encounter with HubSpot",
  },
  {
    id: 2,
    Icon: FaSearchDollar,
    type: "orange",
    title: "Search Companies",
    description: "Discover companies based on a variety of criteria.",
  },
  {
    id: 3,
    Icon: FaCartArrowDown,
    type: "orange",
    title: "Add companies",
    description: "Add companies with just one click.",
  },
  {
    id: 4,
    Icon: FaDatabase,
    type: "orange",
    title: "Segment your CRM",
    description: "Segment your HubSpot database with dedicated fields.",
  },
  {
    id: 5,
    Icon: FaInternetExplorer,
    type: "orange",
    title: "Domain Finder",
    description: "HubSpot requires a domain name. We'll find it for you..",
  },
  {
    id: 6,
    Icon: FaSearchPlus,
    type: "orange",
    title: "Search Contacts",
    description: "Generate a contact list directly from the company profile.",
  },
  {
    id: 7,
    Icon: RiContactsBookFill,
    type: "orange",
    title: "Add Contacts",
    description:
      "Toss your keyboards aside, add a contact with just one click.",
  },
  {
    id: 8,
    Icon: FaMailBulk,
    type: "orange",
    title: "Email Finder",
    description: "Uncover the professional email addresses of your contacts.",
  },
  {
    id: 9,
    Icon: FaGhost,
    type: "orange",
    title: "Phone Finder",
    description: "Link your favorite data provider: Kaspr, Apollo, ...",
  },
  {
    id: 10,
    Icon: FaLinkedinIn,
    type: "orange",
    title: "Linkedin contact",
    description: "Add a contact from LinkedIn with just one click.",
  },
  {
    id: 11,
    Icon: FaCheckDouble,
    type: "orange",
    title: "No duplicates",
    description: "Finally, an app that doesn't add duplicates.",
  },
  {
    id: 12,
    Icon: FaRegCircle,
    type: "orange",
    title: "Gender Reveal",
    description: "Feeling your greetings lack spark? Allow us to assist.",
  },
  {
    id: 13,
    Icon: FaBalanceScale,
    type: "green",
    title: "Get Financial data",
    description: "Corporate financial information, directly within HubSpot..",
  },
  {
    id: 14,
    Icon: LuFileSpreadsheet,
    type: "green",
    title: "Balance Sheets",
    description:
      "Access and annotate the latest 3 financial statements of companies (France only)",
  },
  {
    id: 15,
    Icon: FaMoneyBill,
    type: "green",
    title: "Finances Filters",
    description:
      "Refine your search by focusing on revenue or profit growth (French companies)",
  },
];
