import React from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import BgGridDesign from '../../../utils/BgGridDesign';

const FeaturedProjects = () => {
     const projects = [
          {
               category: "Web Development",
               title: "E-Commerce Redesign",
               desc: "Modern e-commerce platform with 40% conversion boost",
               imageColor: "bg-[#121212]", // Placeholder background color
               link: "#"
          },
          {
               category: "Social Media Design",
               title: "Restaurant Brand Kit",
               desc: "Complete social media branding package",
               imageColor: "bg-[#1A1F2C]", // Blue-ish dark background from image
               link: "#"
          },
          {
               category: "Motion Graphics",
               title: "Product Launch Video",
               desc: "Cinematic product reveal animation",
               imageColor: "bg-[#221F26]", // Purple-ish dark background from image
               link: "#"
          }
     ];

     return (
          <section className="relative py-24 bg-[#0B0B0B] text-white">
               <div className="max-w-7xl mx-auto px-6">
                    {/* Background Grid Effect */}
                    <BgGridDesign />
                    
                    {/* Header Section */}
                    <div className="mb-16">
                         <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                              Our Work
                         </span>
                         <h2 className="text-4xl md:text-5xl font-bold mb-6">
                              Featured <span className="text-primary">Projects</span>
                         </h2>
                         <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
                              Explore our latest work and see how we deliver results.
                         </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {projects.map((project, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                                   className="group relative"
                              >
                                   {/* Image/Thumbnail Container */}
                                   <div className={`relative aspect-square rounded-2xl ${project.imageColor} border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(242,201,76,0.05)]`}>

                                        {/* Image Placeholder text (R/P like image) */}
                                        <div className="absolute inset-0 flex items-center justify-center text-[8rem] font-black text-white/5 select-none">
                                             {project.title.charAt(0)}
                                        </div>

                                        {/* Hover Overlay & Buttons */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                             <button className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center text-xl hover:scale-110 transition-transform">
                                                  <FiEye />
                                             </button>
                                             <button className="w-12 h-12 rounded-xl bg-white/10 text-white border border-white/10 flex items-center justify-center text-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                                                  <FiExternalLink />
                                             </button>
                                        </div>
                                   </div>

                                   {/* Project Info */}
                                   <div className="mt-6">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                                             {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                             {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                             {project.desc}
                                        </p>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    {/* Footer Link */}
                    <div className="mt-16 text-center">
                         <button className="text-primary font-bold hover:gap-3 inline-flex items-center gap-2 transition-all group">
                              View All Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default FeaturedProjects;