import { BsEnvelopeFill, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

// Navigations
export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-study' },
   //  { name: 'Blog', href: '#blog' },
    // { name: 'Contact', href: '#contact' },
];


/* Home Page */
interface HeroItem {
   text: string;
   subText: string;
}
export const Hero: HeroItem[] = [
   {
      text: "Powering Sustainability through Climate Action using cutting-edge technologies",
      subText: "We drive sustainability by leveraging innovative technologies that reduce environmental impact and create a cleaner, greener future."
   }
]


export const CoreValue = [
   {
      id: 1,
      icon: "",
      text: "Disaster Prediction & Prevention Applications",
      description: "StrikeClimate develops cutting-edge applications leveraging extensive data on disaster prediction and prevention. These applications utilize advanced algorithms and real-time data to forecast and mitigate environmental hazards, empowering communities to proactively respond to potential disasters.",
   },
   {
      id: 2,
      icon: "",
      text: "Environmental Monitoring Devices",
      description: "StrikeClimate designs and manufactures innovative environmental monitoring devices that enable real-time tracking of key environmental indicators. These devices provide valuable insights into air quality, water pollution, and other environmental factors, facilitating informed decision-making for individuals, organizations, and governments.",
   },
   {
      id: 3,
      icon: "",
      text: "Net Zero-Carbon Technology Solutions",
      description: "Through pioneering technological advancements, StrikeClimate facilitates the transition to a net zero-carbon environment. By developing and implementing sustainable energy solutions, carbon capture technologies, and eco-friendly practices, StrikeClimate helps reduce carbon emissions and combat climate change on a global scale.",
   },
]


//Footer Social Links
export const footerSocials = [
    {
       icon: BsInstagram,
       name: "Instagram",
       link: "https://instagram.com/"
    },
    {
       icon: BsTwitter,
       name: "Twitter",
       link: "https://twitter.com/"
    },
    {
       icon: BsLinkedin,
       name: "LinkedIn",
       link: "https://www.linkedin.com/"
    },
    {
       icon: BsEnvelopeFill,
       name: "Mail",
       link: "mailto:strikeclimateapp@gmail.com"
    },
]

