import { motion } from 'framer-motion';
import { FiSearch, FiShare2, FiPenTool, FiArrowRight } from 'react-icons/fi';
import { TfiAnnouncement } from "react-icons/tfi";


const Service = () => {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Strategic digital campaigns that drive real results and maximize your ROI across all channels.",
      icon: <TfiAnnouncement />,
      link: "#"
    },
    {
      title: "SEO Optimization",
      desc: "Dominate search rankings with data-driven SEO strategies that bring organic traffic to your doorstep.",
      icon: <FiSearch />,
      link: "#"
    },
    {
      title: "Social Media Marketing",
      desc: "Build a loyal community and amplify your brand presence across all social platforms.",
      icon: <FiShare2 />,
      link: "#"
    },
    {
      title: "Social Media Design",
      desc: "Scroll-stopping social media creatives that capture attention and drive engagement.",
      icon: <FiPenTool />,
      link: "#"
    }
  ];

  return (
    <section className="relative py-24 bg-secondary overflow-hidden border-t border-base-300/5 inter">

      {/* <div 
        className="absolute inset-0 z-0 opacity-10 w-1/2" 
        style={{ 
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl poppins md:text-5xl font-bold text-white mb-6">
            Services That <span className="text-primary">Drive Growth</span>
          </h2>
          <p className="text-[#a1a1a1] max-w-2xl text-lg leading-relaxed">
            From strategy to execution, we provide end-to-end digital solutions tailored to your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center text-primary text-2xl mb-8 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Learn More Link */}
              <a 
                href={service.link} 
                className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
              >
                Learn More <FiArrowRight />
              </a>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View All Services <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;