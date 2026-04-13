import SectionHeader from "../../utils/SectionHeader";
import { motion } from 'framer-motion';
import { cardVariants, containerVariants } from './../../utils/animationsValue';
import { services } from '../../utils/cardsData';
import ServiceCard from "../../utils/Cards/ServiceCard";
import CTA from './../Home/CTA/CTA';

const Services = () => {
     return (
          <section className="inter bg-secondary py-20 md:py-24 overflow-hidden text-base-100">

               <div className="py-8 md:py-14 w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
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
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                         {services?.map((service, index) => (
                              <ServiceCard
                                   key={index}
                                   cardVariants={cardVariants}
                                   service={service}
                              />
                         ))}
                    </motion.div>

                    <CTA mb={"mb-2"} />
               </div>
          </section>
     );
};

export default Services;