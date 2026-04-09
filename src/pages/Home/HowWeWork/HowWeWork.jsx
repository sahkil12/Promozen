import { motion } from 'framer-motion';
import {
     FiMessageSquare,
     FiZap,
     FiBarChart2
} from 'react-icons/fi';
import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';

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
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {steps.map((step, index) => (
                              <motion.div
                                   key={index}
                                   variants={cardVariants}
                                   className="group relative p-8 rounded-2xl bg-base-200/40 border border-base-100/5 hover:border-primary/40 transition-all duration-500 overflow-hidden hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.05)] hover:-translate-y-2 active:-translate-y-2 active:border-primary/40
                                   active:drop-shadow-[0_0_20px_rgba(242,201,76,0.05)]"
                              >
                                   {/* Step Number */}
                                   <div className="absolute top-4 right-6 text-4xl font-black text-base-100/5 group-hover:text-primary/20 group-active:text-primary/20 transition-colors ">
                                        {step.id}
                                   </div>
                                   {/* Icon Box */}
                                   <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center text-primary text-2xl mb-8 transition-all duration-300 shadow-[0_0_15px_rgba(242,201,76,0.1)] group-hover:bg-primary/15 group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-hover:border-primary/20 group-active:bg-primary/15 group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-active:border-primary/20">
                                        {step.icon}
                                   </div>
                                   {/* Content */}
                                   <h3 className="text-xl font-semibold text-base-100 mb-4 group-hover:text-primary group-active:text-primary transition-colors poppins">
                                        {step.title}
                                   </h3>
                                   <p className="text-[#a1a1a1] text-sm leading-relaxed">
                                        {step.desc}
                                   </p>
                                   {/* Bottom Decorative Line */}
                                   <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary/80 transition-all duration-500 group-hover:w-full group-active:w-full"></div>
                              </motion.div>
                         ))}
                    </motion.div>
               </div>
          </section>
     );
};

export default HowWeWork;