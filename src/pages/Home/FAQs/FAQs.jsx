import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaRegQuestionCircle } from "react-icons/fa";
import BgGridDesign from '../../../utils/BgGridDesign';
import SectionHeader from '../../../utils/SectionHeader';
import CTA from './../CTA/CTA';


const FAQs = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     const faqs = [
          {
               question: "What services does Promozen offer?",
               answer: "We offer a full suite of digital marketing services including SEO, Social Media Marketing, PPC Advertising, Web Development, and Motion Graphics designed to grow your brand."
          },
          {
               question: "How long does it take to see results?",
               answer: "While some results like social media engagement can be seen quickly, SEO and organic growth typically take 3-6 months to show significant impact depending on your industry."
          },
          {
               question: "Do you offer custom packages?",
               answer: "Yes, we understand every business is unique. We create tailored strategies and pricing packages based on your specific goals and budget."
          },
          {
               question: "How do we get started with a project?",
               answer: "Simply click the 'Start Your Project' button or contact us via email. We'll schedule a discovery call to discuss your needs and provide a strategic roadmap."
          },
          {
               question: "Which industries do you specialize in?",
               answer: "We have experience working with over 10+ industries including E-commerce, Healthcare, Real Estate, Technology, and Lifestyle brands."
          }
     ];

     return (
          <section className="inter relative pt-16 pb-16 md:pt-20 md:pb-28 bg-secondary overflow-hidden">
               {/* Bg line  */}
               <BgGridDesign />
               {/* Background Decorative Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

               <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
                    {/* Header Section */}
                    <SectionHeader
                         header="FAQs"
                         title1="Frequently Asked"
                         title2="Questions"
                         center={true}
                    />
                    {/* FAQ Accordion List */}
                    <div className="space-y-4">
                         {faqs.map((faq, index) => (
                              <div
                                   key={index}
                                   className={`rounded-2xl border transition-all duration-300 ${activeIndex === index
                                        ? 'bg-base-200 border-primary/40 drop-shadow-[0_0_20px_rgba(242,201,76,0.06)]'
                                        : 'bg-base-200/70 border-primary/15 hover:border-primary/25 '
                                        }`}
                              >
                                   <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full cursor-pointer flex items-center justify-between p-6 text-left"
                                   >
                                        <span className={`flex items-center gap-2 font-semibold poppins transition-colors ${activeIndex === index ? 'text-primary' : 'text-base-100/85'
                                             }`}>
                                             <FaRegQuestionCircle size={15} />
                                             {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-primary text-base-200' : ' text-gray-400'
                                             }`}>
                                             {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                        </div>
                                   </button>

                                   <AnimatePresence>
                                        {activeIndex === index && (
                                             <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.3 }}
                                                  className="overflow-hidden"
                                             >
                                                  <div className="px-6 pb-6 text-sm text-[#a1a1a1] leading-relaxed border-t border-base-100/5 pt-4 mt-1">
                                                       {faq.answer}
                                                  </div>
                                             </motion.div>
                                        )}
                                   </AnimatePresence>
                              </div>
                         ))}
                    </div>
               </div>
               <CTA mb={"my-20"} />
          </section>
     );
};

export default FAQs;