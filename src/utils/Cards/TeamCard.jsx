import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ cardVariants, member, onView }) => {
     return (
          <motion.div
               onClick={onView}
               variants={cardVariants}
               className={`group relative rounded-3xl bg-base-200/55 border-2 transition-all duration-500 overflow-hidden border-primary/5 hover:border-primary/35 active:border-primary/35
               hover:shadow-primary/20 active:shadow-primary/20 shadow-2xl/50 cursor-pointer
                `}
          >
               {/* Image Placeholder */}
               <div className={`relative transition-transform duration-500 group-hover:scale-105 overflow-hidden`}>
                    {/* image */}
                    <img
                         src={member.image}
                         alt={member.name}
                         className='h-86 w-full' />
                    {/* Social Icons Overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-400 overflow-hidden p-2">

                         {[
                              { icon: FaFacebookF, link: member.social.facebook },
                              { icon: FaLinkedinIn, link: member.social.linkedin },
                              { icon: FaTwitter, link: member.social.twitter }
                         ].map(({ icon: Icon, link }, i) => (
                              <a
                                   key={i}
                                   href={link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-xl bg-primary/95 flex items-center justify-center text-base-200 text-xs hover:bg-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:-translate-y-1 active:scale-105"
                              >
                                   <Icon size={14} />
                              </a>
                         ))}

                    </div>
               </div>
               {/* Content */}
               <div className="p-6 text-center">
                    <h4 className={`text-xl font-semibold mb-1 transition-colors text-base-100 group-hover:text-primary poppins`}>
                         {member.name}
                    </h4>
                    <p className="text-primary/90 text-xs font-medium uppercase tracking-wider">
                         {member.role}
                    </p>
               </div>
          </motion.div>
     );
};

export default TeamCard;