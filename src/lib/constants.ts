export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_SUBTITLE =
  "Thoughtful spaces shaped by material, light, and quiet intention.";

export const PHILOSOPHY = {
  heading: "Design as Quiet Practice",
  body: "With years of experience shaping retail environments for Xiaomi, Xue Ting brings a disciplined eye for materiality and spatial flow. Her practice strips away the unnecessary, letting light and proportion do the work. Every project begins with listening, not sketching.",
};

export const PROJECTS = [
  {
    title: "The Courtyard Residence",
    category: "Residential, Beijing",
    year: "2025",
    image: "https://picsum.photos/seed/courtyard-res/900/600",
    span: "col-span-7",
  },
  {
    title: "Xiaomi Flagship Store",
    category: "Retail, Shenzhen",
    year: "2024",
    image: "https://picsum.photos/seed/xiaomi-store/600/800",
    span: "col-span-4 col-start-9",
  },
  {
    title: "Lakeside Retreat",
    category: "Hospitality, Hangzhou",
    year: "2024",
    image: "https://picsum.photos/seed/lakeside-ret/800/550",
    span: "col-span-8",
  },
  {
    title: "Minimalist Office",
    category: "Commercial, Shanghai",
    year: "2023",
    image: "https://picsum.photos/seed/office-min/550/750",
    span: "col-span-4 col-start-1",
  },
  {
    title: "Tea House Interiors",
    category: "Hospitality, Chengdu",
    year: "2023",
    image: "https://picsum.photos/seed/tea-house/700/500",
    span: "col-span-7 col-start-5",
  },
] as const;

export const SERVICES = [
  {
    title: "Retail Design",
    description:
      "Immersive retail environments that balance brand narrative with customer experience.",
  },
  {
    title: "Residential Interiors",
    description:
      "Homes crafted around the rhythms of daily life. Material honesty over decoration.",
  },
  {
    title: "Spatial Consultation",
    description:
      "Strategic input on layout, material palette, and light for projects in progress.",
  },
] as const;

export const CONTACT_HEADING = "Start a Conversation";
export const CONTACT_EMAIL = "studio@xueting.design";
