import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { PiQuotes } from 'react-icons/pi';

const ReviewCard = ({ review, isActive }) => {
     return (
          <motion.div
               className={`group relative p-10 rounded-3xl bg-[#121212]/50 border hover:border-primary/30 transition-all duration-500 my-10 hover:drop-shadow-[0_0_40px_rgba(242,201,76,0.1)]
                    ${isActive ? "opacity-100 scale-100 -translate-y-4 drop-shadow-[0_0_40px_rgba(242,201,76,0.1)] border-primary/30" : "border-base-100/5 opacity-35 scale-90"}`}
          >
               {/* Quote Icon */}
               <div className="absolute top-4 left-8 text-6xl text-primary/40 group-hover:text-primary/60 transition-colors pointer-events-none">
                    <PiQuotes size={45} />
               </div>
               {/* Stars */}
               <div className="flex gap-1 mt-10 mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                         <FiStar key={i} className="text-primary fill-primary text-sm" />
                    ))}
               </div>
               {/* Comment */}
               <p className="text-gray-300 italic leading-relaxed mb-8 relative z-10">
                    "{review.comment}"
               </p>
               {/* Client Info */}
               <div className="pt-6 border-t border-base-100/5">
                    <h4 className="font-semibold text-base-100 text-lg poppins">{review.name}</h4>
                    <p className="text-primary text-sm font-medium">{review.role}</p>
               </div>
          </motion.div>
     );
};

export default ReviewCard;