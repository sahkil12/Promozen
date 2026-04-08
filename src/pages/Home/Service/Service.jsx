import { motion } from 'framer-motion';
import { FiSearch, FiShare2, FiPenTool, FiArrowRight, FiCode, FiLayers } from 'react-icons/fi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { TfiAnnouncement } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import BgGridDesign from '../../../utils/BgGridDesign';
import SectionHeader from '../../../utils/SectionHeader';

const Service = () => {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Strategic digital campaigns that drive real results and maximize your ROI across all channels.",
      icon: <TfiAnnouncement />,
      link: "services/digital_marketing"
    },
    {
      title: "SEO Optimization",
      desc: "Dominate search rankings with data-driven SEO strategies that bring organic traffic to your doorstep.",
      icon: <FiSearch />,
      link: "services/seo_optimization"
    },
    {
      title: "Social Media Design",
      desc: "Scroll-stopping social media creatives that capture attention and drive engagement.",
      icon: <IoColorPaletteOutline size={28} />,
      link: "services/social_media_design"
    },
    {
      title: "Web Development",
      desc: "Modern, responsive, and high-performance websites built with the latest technologies.",
      icon: <FiCode />,
      link: "services/web_development"
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden border-t border-base-300/5 inter">
      {/* Background Grid Effect */}
      <BgGridDesign />

      <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
        {/* Header Section */}
        <SectionHeader
          header="What We Do"
          title1="Services That"
          title2="Drive Growth"
          subtitle=" From strategy to execution, we provide end-to-end digital solutions tailored to your brand."
          center={false}
        />
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView='show'
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-[#121212] border-2 border-primary/5 hover:border-primary/25 transition-all duration-300 flex flex-col h-full hover:drop-shadow[0_0_20px_rgba(242,201,76,0.1)] active:border-primary/45 active:drop-shadow-[0_0_20px_rgba(242,201,76,0.1)] hover:-translate-y-2.5 active:-translate-y-2.5
              "
            >
              <Link to={service.link}>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl border border-primary/15 flex items-center justify-center text-primary text-2xl bg-primary/10 mb-8 transition-all duration-300 group-hover:bg-primary/15 group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-hover:border-primary/20 group-active:bg-primary/15 group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-active:border-primary/20 
                ">
                  {service.icon}
                </div>
                {/* Content */}
                <h3 className="text-xl font-semibold poppins text-base-100 mb-4 group-hover:text-primary transition-colors group-active:text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                  {service.desc}
                </p>
                {/* Learn More Link */}
                <a
                  href={service.link}
                  className="inline-flex opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-300 overflow-hidden items-center gap-2 text-primary text-sm font-bold hover:gap-3 active:gap-3 transition-all group-active:opacity-100 group-active:translate-y-0"
                >
                  Learn More <FiArrowRight />
                </a>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-15 group-active:opacity-15 blur-2xl transition-opacity -z-10"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Bottom Link */}
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center text-lg group gap-1 text-primary font-bold"
          >
            View All Services <FiArrowRight className='group-hover:ml-2 transition-all duration-300' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;