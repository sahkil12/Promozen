import { cardVariants, containerVariants } from "../../utils/animationsValue";
import SectionHeader from "../../utils/SectionHeader";
import CTA from "../Home/CTA/CTA";
import { motion } from 'framer-motion';
import projectsData from "../../../public/Api/projects.json"
import ProjectCard from "../../utils/Cards/ProjectCard";
import { useState } from "react";
import ProjectModal from "../../components/modals/ProjectModal/ProjectModal";

const Portfolio = () => {
     const [category, setCategory] = useState("All")
     const [selectedProject, setSelectedProject] = useState(null);

     const projects = projectsData.projects;

     const categories = [
          "All",
          "Web Development",
          "Graphics Design",
          "Motion Graphics",
          "SEO",
          "Thumbnail Design",
     ]

     // Filter logic
     const filteredProjects =
          category === "All"
               ? projects
               : projects.filter((p) => p.category === category);

     return (
          <section className="inter bg-secondary py-20 md:py-24 overflow-hidden text-base-100">

               <div className="py-8 md:py-14 w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
                    <SectionHeader
                         header="Our Work"
                         title1="Featured"
                         title2="Projects"
                         subtitle="Explore our latest work and see how we deliver results."
                         center={false}
                    />
                    {/* category */}
                    <div className='pb-14 flex items-center gap-3 flex-wrap'>
                         {categories.map((cat, ind) => (
                              <span
                                   key={ind}
                                   onClick={() => (setCategory(cat))}
                                   className={`${cat === category ? "text-base-200 bg-primary border-primary font-bold" : "text-base-100/55 bg-accent/50 border-base-100/10 hover:border-primary/25 hover:text-base-100/75 active:border-primary/25 active:text-base-100/75 font-semibold"} border px-5 py-2 md:px-6 md:py-2.5 rounded-lg  cursor-pointer text-sm transition-all duration-200`}
                              >
                                   {cat}
                              </span>
                         ))}
                    </div>
                    {/* project Grid */}
                    <motion.div
                         key={category}
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: false }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {filteredProjects?.map((project, index) => (
                              <ProjectCard
                                   key={`${project.title}-${index}`}
                                   cardVariants={cardVariants}
                                   project={project}
                                   onView={() => setSelectedProject(project)}
                              />
                         ))}
                    </motion.div>

                    <CTA mb={"mb-2 mt-28"} />

                    {/*  Modal */}
                    {selectedProject && (
                         <ProjectModal
                              project={selectedProject}
                              onClose={() => setSelectedProject(null)}
                         />
                    )}
               </div>
          </section>
     );
};

export default Portfolio;