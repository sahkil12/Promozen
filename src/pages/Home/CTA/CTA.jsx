
const CTA = () => {
     return (
          <div>
               {/* Top CTA Section (Mark: Based on image_8da426.jpg) */}
               <div className="relative mb-24 p-12 rounded-[2rem] bg-[#121212] border border-white/5 text-center overflow-hidden">
                    {/* Background subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[100px] -z-10"></div>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
                         ✨ Let's Build Something Amazing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                         Ready to <span className="text-primary">Transform Your Brand?</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                         Join 50+ brands that trust Promozen to grow their digital presence. Get in touch and let's take your business to the next level.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                         <button className="bg-primary hover:bg-primary/90 text-secondary font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-all group">
                              Start Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                         </button>
                         <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-4 px-8 rounded-xl transition-all">
                              View Portfolio
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default CTA;