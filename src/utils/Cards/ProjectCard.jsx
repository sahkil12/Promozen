import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

const ProjectCard = ({ cardVariants, project }) => {

     return (
          <motion.div
               variants={cardVariants}
               className="group relative rounded-2xl border border-primary/10 overflow-hidden transition-all duration-500 hover:border-primary/45 hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.15)]
                                   active:border-primary/45 active:drop-shadow-[0_0_20px_rgba(242,201,76,0.15)] cursor-pointer"
          >
               {/* image */}
               <div className="relative overflow-hidden rounded-t-xl">
                    <img
                         src={project?.thumbnail}
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
     );
};

export default ProjectCard;