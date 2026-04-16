import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiSuitcaseLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const TeamModal = ({ member, onClose }) => {
     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-200/70 backdrop-blur-sm px-4">

               <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-primary/20 bg-secondary inter"
               >
                    {/* image top */}
                    <div className="relative h-[280px] md:h-[420px] overflow-hidden">
                         <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                         />
                         {/* dark gradient overlay */}
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-200/65 to-secondary/95"></div>
                         {/* close */}
                         <button
                              onClick={onClose}
                              className="absolute cursor-pointer top-4 right-4 p-2.5 rounded-full text-primary bg-accent/80 hover:bg-primary hover:text-base-200 transition-colors active:bg-primary active:text-base-200"
                         >
                              <RxCross2 />
                         </button>
                    </div>
                    {/* content */}
                    <div className="px-6 md:px-8 pb-8 -mt-20 relative z-10">
                         <h2 className="text-2xl md:text-3xl font-bold poppins">
                              {member.name}
                         </h2>

                         <p className="text-primary font-semibold mt-1 mb-10">
                              {member.role}
                         </p>
                         {/* experience */}
                         <p className="text-[15px] text-[#a1a1a1] mb-4 flex items-center gap-2">
                              <span> <RiSuitcaseLine className="text-primary text-xl"/></span> {member.experience}
                         </p>
                         {/* description */}
                         <p className="text-[#a1a1a1] mb-6 leading-relaxed">
                              {member.description}
                         </p>
                         {/* skills */}
                         <div className="mb-6">
                              <h4 className="font-semibold mb-4 poppins">Skills & Expertise</h4>

                              <div className="flex flex-wrap gap-2">
                                   {member.skills.map((skill, i) => (
                                        <span
                                             key={i}
                                             className="px-5 py-1.5 text-xs rounded-full font-medium border border-primary/35 bg-primary/5 text-primary"
                                        >
                                             {skill}
                                        </span>
                                   ))}
                              </div>
                         </div>
                         {/* social */}
                         <div className="flex gap-4">
                              {[
                                   { icon: FaFacebookF, link: member.social.facebook },
                                   { icon: FaLinkedinIn, link: member.social.linkedin },
                                   { icon: FaTwitter, link: member.social.twitter },
                              ].map(({ icon: Icon, link }, i) => (
                                   <a
                                        key={i}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center text-base-200 hover:scale-110 transition"
                                   >
                                        <Icon size={14} />
                                   </a>
                              ))}
                         </div>
                    </div>
               </motion.div>
          </div>
     );
};

export default TeamModal;