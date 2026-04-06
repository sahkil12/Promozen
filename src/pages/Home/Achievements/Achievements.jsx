import { motion } from 'framer-motion';
import {
     FiGlobe,
     FiAward,
     FiTrendingUp,
     FiClock,
     FiCheckCircle
} from 'react-icons/fi';
import { cardVariants, containerVariants, textContainerVariants, textVariants } from '../../../utils/animationsValue';
import BgGridDesign from '../../../utils/BgGridDesign';

const Achievements = () => {
     // Stats Card Data
     const stats = [
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
     // Trust Points Data
     const trustPoints = [
          "Google Ads & Meta Ads Certified Team",
          "100% Transparent Reporting",
          "No Long-Term Lock-In Contracts",
          "Dedicated Project Manager for Every Client",
          "Weekly Strategy Calls & Updates",
          "Data-Backed Creative Decisions"
     ];

     return (
          <section className="relative py-24 bg-secondary text-base-100 overflow-hidden inter">
               {/* Background Grid Effect */}
               <BgGridDesign />
               <div
                    className="absolute top-1/10 md:top-1/7 -right-20 md:right-80 w-[320px] h-80 bg-primary/10 blur-[120px] rounded-full">
               </div>

               <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                         <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 block">
                              Our Achievements
                         </span>
                         <h2 className="text-4xl poppins md:text-5xl font-bold text-base-100 mb-5">
                              Numbers That <span className="text-primary">Speak</span>
                         </h2>
                         <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg leading-relaxed">
                              Real results, real impact — here's what sets us apart from the rest.
                         </p>
                    </div>
                    {/* Stats Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                         {stats.map((stat, index) => (
                              <motion.div
                                   key={index}
                                   variants={cardVariants}
                                   whileHover={{ y: -8 }}
                                   className="group p-8 rounded-2xl bg-[#121212]/50 border border-base-100/5 hover:border-primary/40 transition-all duration-500 text-center"
                              >
                                   <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-primary/15 mx-auto text-primary text-2xl bg-primary/10 mb-8 transition-all duration-300 group-hover:bg-primary/15 group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-hover:border-primary/20 group-active:bg-primary/15 group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-active:border-primary/20">
                                        {stat.icon}
                                   </div>
                                   <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                                   <p className="font-semibold text-base-100 mb-4 poppins group-hover:text-primary group-active:text-primary">{stat.label}</p>
                                   <p className="text-gray-400 text-sm leading-relaxed italic">
                                        "{stat.desc}"
                                   </p>
                              </motion.div>
                         ))}
                    </motion.div>
                    {/* Why Clients Trust Us Section */}
                    <div className="relative p-12 rounded-[2rem] bg-[#121212]/30 border border-primary/5 overflow-hidden hover:border-primary/20 transition-colors">
                         {/* Internal Glow */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                         <h3 className="text-2xl font-bold text-center mb-12 poppins">
                              Why Clients <span className="text-primary">Trust Us</span>
                         </h3>

                         <motion.div
                              variants={textContainerVariants}
                              initial="hidden"
                              whileInView='show'
                              viewport={{ once: true }}
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                              {trustPoints.map((point, index) => (
                                   <motion.div
                                        variants={textVariants}
                                        key={index}
                                        className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 text-primary text-xl group-hover:scale-125 transition-transform">
                                             <FiCheckCircle />
                                        </div>
                                        <span className="text-gray-300 group-hover:text-base-100 transition-colors">
                                             {point}
                                        </span>
                                   </motion.div >
                              ))}
                         </motion.div >
                    </div>
               </div>
          </section>
     );
};

export default Achievements;