import { motion } from 'framer-motion';
import IconBox from '../IconBox';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ cardVariants, service }) => {
     return (
          <motion.div
               variants={cardVariants}
               className="group relative p-8 rounded-2xl bg-base-200/50 border-2 border-primary/5 hover:border-primary/25 transition-all duration-300 flex flex-col h-full hover:drop-shadow[0_0_20px_rgba(242,201,76,0.1)] active:border-primary/45 active:drop-shadow-[0_0_20px_rgba(242,201,76,0.1)] hover:-translate-y-2.5 active:-translate-y-2.5
              "
          >
               <Link to={service.link}>
                    {/* Icon box */}
                    <IconBox icon={service.icon} className="mb-8" />
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
     );
};

export default ServiceCard;