import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";

export const socialLinks = [
  {
    icon: FiFacebook,
    link: "https://www.facebook.com/share/17UwZUo2m5/"
  },
  {
    icon: FiInstagram,
    link: "https://www.instagram.com/prom.ozen?igsh=M2E5YXY0ZzIwY2N2"
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/company/promozenagency/"
  },
];

export const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Team", link: "/team" },
  { name: "Contact", link: "/contact" }
];

export const serviceLinks = [
  { name: "Digital Marketing", link: "/services/digital_marketing" },
  { name: "SEO Optimization", link: "/services/seo_optimization" },
  { name: "Social Media Marketing", link: "/services/social_media_marketing" },
  { name: "Web Development", link: "/services/web_development" },
  { name: "Motion Graphics", link: "/services/motion_graphics" },
  { name: "View All Services", link: "/services" }
];

export const contactLinks = [
  {
    icon: FiMail,
    text: "promozenagency@gmail.com"
  },
  {
    icon: FiPhone,
    text: "+880 1345 295225"
  },
  {
    icon: FiPhone,
    text: "+880 1744 597267"
  },
  {
    icon: FiMapPin,
    text: "Patiya, Chittagong, Bangladesh",
    multiline: true
  }
];