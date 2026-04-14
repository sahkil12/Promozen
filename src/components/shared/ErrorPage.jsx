import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiMail, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
     return (
          <section className="min-h-screen bg-secondary flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-base-100">
               {/* Background Decorative Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[600px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
               <div className="absolute -bottom-30 -right-1/8 -translate-x-1/2 -translate-y-1/2
               w-[500px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

               <div className="relative z-10 text-center max-w-2xl mx-auto">
                    {/* 404 Text with Gradient and Search Icon */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                         className="relative inline-block mb-4"
                    >
                         <h1 className="poppins text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/55 to-primary/15">
                              404
                         </h1>
                         {/* Floating Search Icon over the number */}
                         <motion.div
                              animate={{ y: [0, -20, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-1/2 left-72 -translate-x-1/2 -translate-y-1/2 text-base-100/70 text-6xl md:text-8xl"
                         >
                              <FiSearch className=''/>
                         </motion.div>
                    </motion.div>
                    {/* Message Content */}
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.3, duration: 0.6 }}
                    >
                         <h2 className="poppins text-3xl md:text-5xl font-bold mb-6">
                              Page <span className="text-primary">Not Found</span>
                         </h2>
                         <p className="inter text-[#a1a1a1] text-base md:text-lg leading-relaxed mb-12 max-w-md mx-auto">
                              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                         </p>
                    </motion.div>
                    {/* Action Buttons */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5, duration: 0.6 }}
                         className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                         <Link
                              to="/"
                              className="group flex items-center gap-3 bg-primary text-secondary font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(242,201,76,0.3)]"
                         >
                              <FiHome className="text-xl" />
                              Back to Home
                         </Link>

                         <Link
                              to="/contact"
                              className="flex items-center gap-3 border border-base-100/10 bg-base-200/20 backdrop-blur-md text-base-100 font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:bg-base-100/5 hover:border-primary/35 hover:text-primary"
                         >
                              <FiMail className="text-xl" />
                              Contact Us
                         </Link>
                    </motion.div>
               </div>
               {/* Floating Decorative Elements */}
               <div className="absolute top-20 left-10 w-32 h-32 border border-primary/15 rounded-full animate-pulse"></div>
               <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/10 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
          </section>
     );
};

export default ErrorPage;