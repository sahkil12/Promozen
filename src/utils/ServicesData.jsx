import { FaArrowTrendUp } from "react-icons/fa6";
import { FiCode, FiSearch, FiShare2, FiYoutube } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuFilm } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";


export const services = [
     {
          title: "Digital Marketing",
          desc: "Strategic digital campaigns that drive real results and maximize your ROI across all channels.",
          icon: <TfiAnnouncement />,
     },
     {
          title: "SEO Optimization",
          desc: "Dominate search rankings with data-driven SEO strategies that bring organic traffic to your doorstep.",
          icon: <FiSearch />,
     },
     {
          title: "Social Media Design",
          desc: "Scroll-stopping social media creatives that capture attention and drive engagement.",
          icon: <IoColorPaletteOutline size={28} />,
     },
     {
          title: "Web Development",
          desc: "Modern, responsive, and high-performance websites built with the latest technologies.",
          icon: <FiCode />,
     },
     {
          icon: <FiShare2 />,
          title: "Social Media Marketing",
          desc: "Boost your brand awareness and engage with your audience through effective social media campaigns.",
     },
     {
          icon: <FaArrowTrendUp />,
          title: "YouTube Video SEO",
          desc: "Optimize your video content for maximum visibility and subscriber growth on YouTube.",
     },
     {
          icon: <LuFilm />,
          title: "Motion Graphics",
          desc: "Tell your brand story with engaging animations and high-quality motion graphics that capture attention.",
     },
     {
          icon: <FiYoutube />,
          title: "YouTube Thumbnail Design",
          desc: "High-CTR thumbnails designed to stand out and get your videos the clicks they deserve.",
     }
];