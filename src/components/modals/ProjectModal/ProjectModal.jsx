import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const ProjectModal = ({ project, onClose }) => {
     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-200/60 backdrop-blur-sm px-4">
               {/* modal box */}
               <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-base-200 w-full max-w-4xl rounded-2xl overflow-hidden border border-primary/20"
               >
                    {/* top preview */}
                    <div className="relative">
                         {project.type === "image" ? (
                              <img
                                   src={project.preview}
                                   className="w-full h-[250px] md:h-[400px] lg:h-[460px] object-cover"
                              />
                         ) : (
                              <video
                                   src={project.preview}
                                   controls
                                   autoPlay
                                   className="w-full h-[250px] md:h-[400px] lg:h-[460px] object-cover"
                              />
                         )}
                         {/* close */}
                         <button
                              onClick={onClose}
                              className="absolute cursor-pointer top-4 right-4 p-2.5 rounded-full text-primary bg-accent/80 hover:bg-primary hover:text-base-200 transition-colors active:bg-primary active:text-base-200"
                         >
                              <RxCross2 />
                         </button>
                    </div>
                    {/* content */}
                    <div className="p-6 md:p-8">
                         <span className="text-primary tracking-wider text-xs uppercase font-bold">
                              {project.category}
                         </span>

                         <h2 className="text-2xl font-bold mt-2 mb-3 poppins">
                              {project.title}
                         </h2>

                         <p className="text-[#a1a1a1] mb-6">
                              {project.description}
                         </p>
                         {/* tools */}
                         <div>
                              <h4 className="text-sm font-semibold poppins mb-4">
                                   Tools & Technologies
                              </h4>

                              <div className="flex flex-wrap gap-2">
                                   {project.tools.map((tool, i) => (
                                        <span
                                             key={i}
                                             className="px-4 py-1 text-xs bg-primary/5 border border-primary/35 rounded-full text-primary font-medium"
                                        >
                                             {tool}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    </div>
               </motion.div>
          </div>
     );
};

export default ProjectModal;