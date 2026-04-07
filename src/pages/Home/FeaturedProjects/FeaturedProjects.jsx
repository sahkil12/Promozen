import { motion } from 'framer-motion';
import { FiEye, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import projectsData from "../../../../public/Api/projects.json"

const FeaturedProjects = () => {
     const projects = projectsData.projects;

     return (
          <section className="relative py-16 lg:py-20 bg-secondary text-base-100 inter">
               <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    <div className="pointer-events-none">
                         <BgGridDesign />
                    </div>
                    {/* header */}
                    <div className="mb-16">
                         <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 block">
                              Our Work
                         </span>
                         <h2 className="text-4xl poppins md:text-5xl font-bold text-base-100 mb-5">
                              Featured <span className="text-primary">Projects</span>
                         </h2>
                         <p className="text-[#a1a1a1] max-w-2xl text-lg leading-relaxed">
                              Explore our latest work and see how we deliver results.
                         </p>
                    </div>
                    {/* grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {projects?.map((project, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                                   className="group relative rounded-2xl border border-primary/10 overflow-hidden transition-all duration-500 hover:border-primary/45 hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.15)]"
                              >
                                   {/* image */}
                                   <div className="relative overflow-hidden rounded-t-xl">
                                        <img
                                             src={project.thumbnail}
                                             alt={project.title}
                                             className="h-60 md:h-[270px] w-full object-cover group-hover:scale-105 transition-all duration-300"
                                        />
                                        {/* hover overlay */}
                                        <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                             <button
                                                  className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer"
                                             >
                                                  <FiEye />
                                             </button>
                                        </div>
                                   </div>
                                   {/* info */}
                                   <div className="p-6 bg-base-200 rounded-b-2xl h-40">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                                             {project.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-base-100 mb-2 group-hover:text-primary transition-colors poppins">
                                             {project.title}
                                        </h3>
                                        <p className="text-[#a1a1a1] text-sm leading-relaxed line-clamp-3">
                                             {project.description}
                                        </p>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
                    {/* footer button */}
                    <div className="mt-16 text-center">
                         <Link
                              to="/portfolio"
                              className="text-primary inline-flex font-bold hover:gap-3 items-center gap-2 transition-all group"
                         >
                              View All Projects
                              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                         </Link>
                    </div>
               </div>
          </section>
     );
};

export default FeaturedProjects;