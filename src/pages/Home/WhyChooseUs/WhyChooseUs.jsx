import { motion } from 'framer-motion';
import {
     FiTarget,
     FiZap,
     FiUsers,
     FiBarChart2,
     FiShield,
     FiHeart
} from 'react-icons/fi';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import BgGridDesign from '../../../utils/BgGridDesign';

const WhyChooseUs = () => {
     const features = [
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

     return (
          <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden inter">
               {/* Background Grid Effect */}
               <BgGridDesign />

               <div
                    className="absolute top-1/4 md:top-1/3 -right-20 md:left-50 w-[400px] h-80 bg-primary/10 blur-[110px] rounded-full">
               </div>

               <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                         <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 block">
                              Why Promozen
                         </span>
                         <h2 className="text-4xl poppins md:text-5xl font-bold text-base-100 mb-5">
                              Why Brands <span className="text-primary">Choose Us</span>
                         </h2>
                         <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg leading-relaxed">
                              We don't just deliver services — we deliver results that transform your business.
                         </p>
                    </div>
                    {/* Features Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {features.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   variants={cardVariants}
                                   className="group relative p-8 rounded-2xl bg-[#121212]/50 border-2 border-primary/5 hover:border-primary/25 transition-all duration-500 flex items-start gap-5"
                              >
                                   {/* Icon Box */}
                                   <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-primary/15 flex items-center justify-center text-primary text-2xl bg-primary/10 mb-8 transition-all duration-300 group-hover:bg-primary/15 group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-hover:border-primary/20 group-active:bg-primary/15 group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-active:border-primary/20">
                                        {feature.icon}
                                   </div>
                                   {/* Text Content */}
                                   <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors poppins">
                                             {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                             {feature.desc}
                                        </p>
                                   </div>

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