import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
     return (
          <section className="inter bg-secondary py-24 md:py-28 px-6 overflow-hidden">
               <div className="max-w-7xl mx-auto py-8 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         {/* Left Side: Content */}
                         <motion.div
                              initial={{ opacity: 0, x: -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                         >
                              {/* Badge */}
                              <div className="poppins inline-flex items-center gap-2 bg-base-200 border border-primary/25 rounded-full px-4 py-2 mb-8">
                                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                   <span className="text-primary text-[13px] font-medium tracking-wide uppercase">
                                        Learn More About Us
                                   </span>
                              </div>
                              {/* Main Heading */}
                              <h2 className="poppins text-4xl md:text-5xl lg:text-6xl font-bold text-base-100 mb-8 leading-[1.1]">
                                   Transforming Brands Through <br />
                                   <span className="text-primary">Digital Excellence</span>
                              </h2>

                              {/* Description */}
                              <p className="text-[#a1a1a1] text-lg leading-relaxed mb-10 max-w-xl">
                                   At Promozen, we don't just provide services; we build digital legacies.
                                   Our team of experts is dedicated to pushing the boundaries of what's possible in the digital landscape.
                              </p>
                              {/* Feature List */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                   {[
                                        "Strategic Growth Plans",
                                        "Data-Driven Insights",
                                        "Creative Storytelling",
                                        "Dedicated Partnership"
                                   ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 group">
                                             <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-base-200 transition-all">
                                                  <FiCheckCircle className="text-sm" />
                                             </div>
                                             <span className="text-base-100 font-medium group-hover:text-primary transition-colors">
                                                  {item}
                                             </span>
                                        </div>
                                   ))}
                              </div>
                              {/* CTA Button */}
                              <div className='flex items-center gap-4 flex-wrap'>
                                   <Link
                                        to={'/contact'}
                                        className="group flex w-fit items-center gap-3 bg-primary text-base-200 font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)] active:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)]">
                                        Work With Us
                                        <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform " />
                                   </Link>

                                   <Link
                                        to={'/portfolio'}
                                        className="flex items-center gap-2 border border-base-100/10 text-base-100 font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/50 active:text-primary active:border-primary/50">
                                        See Our Work
                                   </Link>
                              </div>
                         </motion.div>
                         {/* Right Side: Image Placeholder with Effects */}
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                         >
                              {/* Background Glow */}
                              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

                              {/* Image Box */}
                              <div className="relative z-10 h-fit rounded-[2.5rem] bg-base-200/60 border border-base-100/5 overflow-hidden group">
                                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-all"></div>

                                   <img
                                        src="/Promozen team.jpeg"
                                        alt="promozen team"
                                        className='h-full w-full object-cover'
                                   />
                              </div>
                              {/* Decorative Element */}
                              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
};

export default About;