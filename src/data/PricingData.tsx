export const PRICING_DATA = [
  {
    id: 1,
    title: "Single User",
    showToggle: true,
    monthlyRate: 79,
    annualDiscount: 0.25,
    ratePerDescription: "/ Month / user",
    summary: "For users wishing to boost their business with HubSpot CRM.",
    features: [
      { id: 1, title: "100 B2B email finder / month" },
      { id: 2, title: "Unlimited companies searches" },
      { id: 3, title: "Unlimited contacts searches" },
    ],
    buttonText1: "Start Free Trial (14 days)",
    buttonText2: "Bo Credit Card",
    theme: "orange",
  },

  {
    id: 2,
    title: "Team",
    showToggle: false,
    monthlyRate: 490,
    annualDiscount: undefined,
    ratePerDescription: "/ Month + unlimited users",
    summary:
      "For teams looking to grow their sales and increase their productivity with HubSpot CRM.",
    features: [
      { id: 1, title: "10000 B2B email finder / month" },
      { id: 2, title: "Unlimited companies searches" },
      { id: 3, title: "Unlimited contacts searches" },
      { id: 4, title: "Unlimited users" },
    ],
    buttonText1: "Book a demo",
    buttonText2: "with Jimmy",
    theme: "green",
  },
];

export const PRICING_FAQS = [
  {
    id: 1,
    header: "Which version of Hubspot license is required?",
    content:
      "You have the flexibility to choose the Single user version with or without a commitment.Meanwhile, the Team version is exclusively available with an annual commitment.",
    defaultOpened: false,
  },

  {
    id: 2,
    header: "What is the minimum commitment to subscribe to Charik?",
    content:
      "Charik offers the most immersive integration in the market for Hubspot CRM. Our application is compatible with all versions of HubSpot, including Free, Starter, Pro, and Enterprise.",
    defaultOpened: false,
  },

  {
    id: 3,
    header: "I use a solution to reveal phone Numbers, are you compatible ?",
    content:
      "Absolutely, we are fully compatible! At Charik, we understand the significance of GDPR compliance, which is why safeguarding your data while providing the essential features you need is our top priority. By partnering with suppliers such as Kaspr or Apollo, we act as a central hub, seamlessly integrating their services into Hubspot through Charik.",
    defaultOpened: false,
  },
];
