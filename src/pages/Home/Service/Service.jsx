import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import BgGridDesign from '../../../utils/BgGridDesign';
import SectionHeader from '../../../utils/SectionHeader';
import { services } from '../../../utils/cardsData';
import ServiceCard from '../../../utils/Cards/ServiceCard';
import { Link } from 'react-router-dom';

const Service = () => {

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
          {services?.slice(0, 4)?.map((service, index) => (
            <ServiceCard
              key={index}
              cardVariants={cardVariants}
              service={service}
            />
          ))}
        </motion.div>
        {/* Bottom Link */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-lg group gap-1 text-primary font-bold"
          >
            View All Services <FiArrowRight className='group-hover:ml-2 transition-all duration-300' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;