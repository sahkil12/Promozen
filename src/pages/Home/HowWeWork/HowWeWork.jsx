import { motion } from 'framer-motion';
import {
     FiMessageSquare,
     FiZap,
     FiBarChart2
} from 'react-icons/fi';
import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';

const HowWeWork = () => {
     const steps = [
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

     return (
          <section className="relative  bg-secondary overflow-hidden inter">
               <div className="relative py-16 lg:py-20fe z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    <BgGridDesign />
                    {/* Header */}
                    <SectionHeader
                         header="Our Process"
                         title1="How We"
                         title2="Work"
                         subtitle="A proven 4-step process that delivers consistent, exceptional results."
                         center={true}
                    />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {steps.map((step, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                                   whileHover={{ y: -10 }}
                                   className="group relative p-8 rounded-2xl bg-[#121212]/50 border border-base-100/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
                              >
                                   {/* Step Number */}
                                   <div className="absolute top-4 right-6 text-4xl font-black text-base-100/5 group-hover:text-primary/10 transition-colors">
                                        {step.id}
                                   </div>

                                   {/* Icon Box */}
                                   <div className="w-14 h-14 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center text-primary text-2xl mb-8 group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-[0_0_15px_rgba(242,201,76,0.1)] group-hover:shadow-primary/20">
                                        {step.icon}
                                   </div>

                                   {/* Content */}
                                   <h3 className="text-xl font-bold text-base-100 mb-4 group-hover:text-primary transition-colors">
                                        {step.title}
                                   </h3>
                                   <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.desc}
                                   </p>

                                   {/* Bottom Decorative Line */}
                                   <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default HowWeWork;