import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiAward, FiBarChart2, FiClock, FiCode, FiGlobe, FiHeart, FiMessageSquare, FiSearch, FiShare2, FiShield, FiTarget, FiTrendingUp, FiUsers, FiYoutube, FiZap } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuFilm } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";


export const features = [
     {
          title: "Result-Driven Approach",
          desc: "Every campaign is designed to deliver measurable, impactful results that grow your bottom line.",
          icon: <FiTarget />
     },
     {
          title: "Fast Execution",
          desc: "We move fast without compromising quality. Your time matters to us.",
          icon: <FiZap />
     },
     {
          title: "Experienced Team",
          desc: "50+ happy clients trust us to grow their digital presence with our expert team.",
          icon: <FiUsers />
     },
     {
          title: "Data-Driven Strategy",
          desc: "Decisions backed by analytics, not guesswork. Every move is strategic.",
          icon: <FiBarChart2 />
     },
     {
          title: "Premium Quality Service",
          desc: "No shortcuts. We deliver world-class quality in every project we touch.",
          icon: <FiShield />
     },
     {
          title: "Client Satisfaction",
          desc: "98% client satisfaction rate. We treat your brand like our own.",
          icon: <FiHeart />
     }
];

export const stats = [
     {
          icon: <FiGlobe />,
          value: "10+",
          label: "Industries Served",
          desc: "From e-commerce to healthcare, we deliver results across diverse sectors."
     },
     {
          icon: <FiAward />,
          value: "50+",
          label: "Brands Transformed",
          desc: "Trusted by leading brands to elevate their digital presence."
     },
     {
          icon: <FiTrendingUp />,
          value: "3x",
          label: "Average ROI Increase",
          desc: "Our clients see an average of 3x return on their marketing investment."
     },
     {
          icon: <FiClock />,
          value: "24/7",
          label: "Dedicated Support",
          desc: "Round-the-clock support to ensure your campaigns never miss a beat."
     }
];

export const steps = [
     {
          id: "01",
          icon: <FiMessageSquare />,
          title: "Discovery",
          desc: "We dive deep into understanding your brand, goals, target audience, and competitive landscape."
     },
     {
          id: "02",
          icon: <FaRegLightbulb />,
          title: "Strategy",
          desc: "We craft a tailored digital strategy aligned with your business objectives and market opportunities."
     },
     {
          id: "03",
          icon: <FiZap />,
          title: "Execution",
          desc: "Our team brings the strategy to life with precision, creativity, and cutting-edge tools."
     },
     {
          id: "04",
          icon: <FiBarChart2 />,
          title: "Optimize",
          desc: "We continuously monitor, analyze, and optimize to maximize your ROI and scale results."
     }
];


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