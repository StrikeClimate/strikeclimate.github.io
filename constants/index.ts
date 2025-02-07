import {
  BsEnvelopeFill,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { MdMail } from "react-icons/md";
import { FaWhatsappSquare, FaLocationArrow } from "react-icons/fa";
import { LuMonitorCog } from "react-icons/lu";
import { FaBuildingShield } from "react-icons/fa6";
import { MdOutlineBiotech } from "react-icons/md";

// Navigations
// export const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "#about" },
//   { name: "Case Studies", href: "/case-studies"}
//   //  { name: 'Blog', href: '#blog' },
//   // { name: 'Contact', href: '#contact' },
// ];
export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
];
// Home Page
interface HomeHeroItem {
  text: string;
  subText: string;
}
export const HomeHero: HomeHeroItem[] = [
  {
    text: "Powering Sustainability through Climate Action using cutting-edge technologies",
    subText:
      "We drive sustainability by leveraging innovative technologies that reduce environmental impact and create a cleaner, greener future.",
  },
];

interface CaseStudiesHeroItem {
  text: string;
  subText: string;
}
export const CaseStudiesHero: CaseStudiesHeroItem[] = [
  {
    text: "Our Case Studies",
    subText:
      "We drive sustainability by leveraging innovative technologies that reduce environmental impact and create a cleaner, greener future.",
  },
];

//Core Values
export const CoreValue = [
  {
    id: 1,
    icon: FaBuildingShield,
    text: "Disaster Prediction & Prevention Applications",
    description:
      "StrikeClimate develops cutting-edge applications leveraging extensive data on disaster prediction and prevention. These applications utilize advanced algorithms and real-time data to forecast and mitigate environmental hazards, empowering communities to proactively respond to potential disasters.",
  },
  {
    id: 2,
    icon: LuMonitorCog,
    text: "Environmental Monitoring Devices",
    description:
      "StrikeClimate designs and manufactures innovative environmental monitoring devices that enable real-time tracking of key environmental indicators. These devices provide valuable insights into air quality, water pollution, and other environmental factors, facilitating informed decision-making for individuals, organizations, and governments.",
  },
  {
    id: 3,
    icon: MdOutlineBiotech,
    text: "Net Zero-Carbon Technology Solutions",
    description:
      "Through pioneering technological advancements, StrikeClimate facilitates the transition to a net zero-carbon environment. By developing and implementing sustainable energy solutions, carbon capture technologies, and eco-friendly practices, StrikeClimate helps reduce carbon emissions and combat climate change on a global scale.",
  },
];

//Contact Box
export const contactBox = [
  {
    id: 1,
    heading: "",
    icon: FaWhatsappSquare,
    title: "Message",
    link: "https://wa.me/2349090606132?text=Hello%20StrikeClimate",
    contact: "+2349090606132",
  },
  {
    id: 2,
    heading: "",
    icon: MdMail,
    title: "Contact Us",
    link: "mailto:strikeclimateapp@gmail.com",
    contact: "strikeclimateapp@gmail.com",
  },
  {
    id: 4,
    heading: "Headquarters",
    icon: FaLocationArrow,
    title: "Contact Us",
    link: "",
    contact: "StrikeClimate. Lagos, Nigeria",
  },
];

//Footer Social Links
export const footerSocials = [
  {
    icon: BsInstagram,
    name: "Instagram",
    link: "https://instagram.com/",
  },
  {
    icon: BsTwitter,
    name: "Twitter",
    link: "https://twitter.com/",
  },
  {
    icon: BsLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
  {
    icon: BsEnvelopeFill,
    name: "Mail",
    link: "mailto:strikeclimateapp@gmail.com",
  },
];
