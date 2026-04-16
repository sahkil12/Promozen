import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import projectsData from "../../../../public/Api/projects.json"
import SectionHeader from '../../../utils/SectionHeader';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import ProjectCard from '../../../utils/Cards/ProjectCard';

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
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {projects?.slice(0, 6)?.map((project, index) => (
                              <ProjectCard
                                   key={index}
                                   cardVariants={cardVariants}
                                   project={project}
                              />
                         ))}
                    </motion.div>
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