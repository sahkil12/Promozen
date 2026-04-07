{/* Testimonials Grid */ }
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
     {reviews.map((review, index) => (
          <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group relative p-10 rounded-3xl bg-[#121212]/50 border border-base-100/5 hover:border-primary/30 transition-all duration-500"
          >
               {/* Quote Icon */}
               <div className="absolute top-6 left-8 text-6xl text-base-100/5 group-hover:text-primary/60 transition-colors pointer-events-none">
                    <PiQuotes size={40} />
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
     ))}
</div>

{/* Pagination & Navigation */ }
<div className="flex flex-col items-center gap-8">
     {/* Dots/Progress bar */}
     <div className="flex items-center gap-2">
          <div className="w-8 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-base-100/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-base-100/20"></div>
     </div>

     {/* Arrow Buttons */}
     <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-base-100/10 flex items-center justify-center text-gray-400 hover:bg-base-100/5 hover:text-base-100 transition-all">
               <FiChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 rounded-full border border-base-100/10 flex items-center justify-center text-gray-400 hover:bg-base-100/5 hover:text-base-100 transition-all">
               <FiChevronRight size={24} />
          </button>
     </div>
</div>