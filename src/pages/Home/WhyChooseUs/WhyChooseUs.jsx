import { motion } from 'framer-motion';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import BgGridDesign from '../../../utils/BgGridDesign';
import SectionHeader from '../../../utils/SectionHeader';
import { features } from '../../../utils/cardsData';
import IconBox from '../../../utils/IconBox';

const WhyChooseUs = () => {

     return (
          <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden inter">
               {/* Background Grid Effect */}
               <BgGridDesign />

               <div
                    className="absolute top-1/4 md:top-1/3 -right-20 md:left-50 w-[400px] h-80 bg-primary/10 blur-[110px] rounded-full">
               </div>

               <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    {/* Header Section */}
                    <SectionHeader
                         header="Why Promozen"
                         title1="Why Brands"
                         title2="Choose Us"
                         subtitle="We don't just deliver services — we deliver results that transform your business."
                         center={true}
                    />
                    {/* Features Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {features?.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   variants={cardVariants}
                                   className="group relative p-8 rounded-2xl bg-base-200/25 border-2 border-primary/5 hover:border-primary/25 active:border-primary/25    transition-all duration-500 flex items-start gap-5"
                              >
                                   {/* Icon Box */}
                                   <IconBox icon={feature.icon} className="mb-8 flex-shrink-0" />
                                   {/* Text Content */}
                                   <div>
                                        <h3 className="text-lg font-bold text-base-100 mb-2 group-hover:text-primary group-active:text-primary transition-colors poppins">
                                             {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                             {feature.desc}
                                        </p>
                                   </div>
                                   {/* Bottom Decorative Line */}
                                   <div className="absolute bottom-px overflow-hidden rounded-full left-0 w-0 h-[3px] bg-primary/75 transition-all duration-500 group-hover:w-[95%] ml-2.5 group-active:w-[95%]"></div>
                                   
                                   {/* Subtle Hover Glow */}
                                   <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity -z-10"></div>
                              </motion.div>
                         ))}
                    </motion.div>
               </div>
          </section>
     );
};

export default WhyChooseUs;