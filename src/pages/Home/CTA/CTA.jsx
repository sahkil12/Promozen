import { FiArrowRight, FiTarget } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
     return (
          <motion.section
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: .6 }}
               viewport={{ once: true }}
               className="px-0 md:px-6 inter">
               <div className="max-w-5xl mx-auto">
                    {/* Main CTA Container */}
                    <div className="relative overflow-hidden rounded-4xl bg-base-200/40 border border-primary/20 py-12 px-4 md:px-10 text-center">

                         {/* Glowing Radial Background */}
                         <div className="absolute top-1/3 left-1/6 -translate-x-1/2 -translate-y-1/2 
                         w-[500px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

                         <div className="absolute top-1/2 -right-1/3 -translate-x-1/2 -translate-y-1/2 
                         w-[500px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
                         {/* Top Badge */}
                         <div className="inline-flex items-center gap-2 bg-base-200/70 border border-primary/20 rounded-full px-4 py-2 mb-8">
                              <HiSparkles className="text-primary text-base" />
                              <span className="text-primary text-[11px] md:text-[13px] font-medium tracking-wide">
                                   Let's Build Something Amazing
                              </span>
                         </div>
                         {/* Title */}
                         <h2 className="text-3xl sm:text-4xl poppins lg:text-5xl font-bold text-base-100 mb-6 leading-tight max-w-3xl mx-auto">
                              Ready to <span className="text-primary">Transform</span> Your Brand?
                         </h2>
                         {/* Description */}
                         <p className="text-[#a1a1a1] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                              Join 50+ brands that trust Promozen to grow their digital presence.
                              Get in touch and let's take your business to the next level.
                         </p>
                         {/* Buttons Group */}
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              {/* Primary Button */}
                              <Link
                                   to={'/contact'}
                                   className="group flex items-center gap-2 bg-primary text-base-200 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)]">
                                   Start Your Project
                                   <FiArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                              {/* Secondary Link */}
                              <Link
                                   to={'/portfolio'}
                                   className="flex items-center gap-2 border border-base-100/10 text-base-100 font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/50 active:text-primary active:border-primary/50">
                                   View Portfolio
                              </Link>
                         </div>

                    </div>
               </div>
          </motion.section>
     );
};

export default CTA;