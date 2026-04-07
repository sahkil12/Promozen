import { motion } from 'framer-motion';
import { FiEye, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import projectsData from "../../../../public/Api/projects.json"
import SectionHeader from '../../../utils/SectionHeader';

const FeaturedProjects = () => {
     const projects = projectsData.projects;

     return (
          <section className="relative py-16 lg:py-20 bg-secondary text-base-100 inter">
               <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
                    <div className="pointer-events-none">
                         <BgGridDesign />
                    </div>
                    {/* header */}
                    <SectionHeader
                         header="Our Work"
                         title1="Featured"
                         title2="Projects"
                         subtitle=" Explore our latest work and see how we deliver results."
                         center={false}
                    />
                    <div
                         className="absolute top-1/10 md:top-8 -right-20 md:right-80 w-[380px] h-80 bg-primary/15 blur-[120px] rounded-full">
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
                                   className="group relative rounded-2xl border border-primary/10 overflow-hidden transition-all duration-500 hover:border-primary/45 hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.15)]
                                   active:border-primary/45 active:drop-shadow-[0_0_20px_rgba(242,201,76,0.15)"
                              >
                                   {/* image */}
                                   <div className="relative overflow-hidden rounded-t-xl">
                                        <img
                                             src={project.thumbnail}
                                             alt={project.title}
                                             className="h-60 md:h-[270px] w-full object-cover group-hover:scale-105 transition-all duration-300 group-active:scale-105 "
                                        />
                                        {/* hover overlay */}
                                        <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity group-active:opacity-100  duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                             <button
                                                  className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center text-xl hover:scale-110 active:scale-110 transition-transform cursor-pointer"
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
                                        <h3 className="text-lg font-semibold text-base-100 mb-2 group-hover:text-primary transition-colors poppins group-active:text-primary">
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
                              className="text-primary inline-flex font-bold hover:gap-3 active:gap-3 items-center gap-2 transition-all group"
                         >
                              View All Projects
                              <FiArrowRight />
                         </Link>
                    </div>
               </div>
          </section>
     );
};

export default FeaturedProjects;