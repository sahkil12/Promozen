import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
     contactLinks,
     quickLinks,
     serviceLinks,
     socialLinks
} from "../../utils/AllLinks";
import { container, item } from "../../utils/animationsValue";


const Footer = () => {
     return (
          <footer className="relative bg-accent pt-14 pb-10 overflow-hidden inter">
               {/* glow line */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

               <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="w-full lg:max-w-[70%] mx-auto px-6 relative"
               >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                         {/* column 1 */}
                         <motion.div variants={item}>
                              <Link to="/" className="flex items-center gap-1 mb-4">
                                   <img src="/Images/Promozen-logo.png" className="w-10" alt="Logo" />

                                   <span className="text-base-100 font-bold text-2xl tracking-tight poppins">
                                        Promo<span className="text-primary">zen</span>
                                   </span>
                              </Link>
                              <p className="text-[#a1a1a1] text-sm leading-relaxed mb-8 ml-2.5">
                                   We grow your brand digitally. A premium digital marketing agency based in Patiya, Chittagong, Bangladesh.
                              </p>
                              <div className="flex gap-4 ml-2">
                                   {socialLinks?.map((itemData, i) => {
                                        const Icon = itemData.icon;
                                        return (
                                             <a
                                                  key={i}
                                                  href={itemData.link}
                                                  className="w-10 h-10 group rounded-xl border border-base-100/10 flex items-center justify-center text-[#a1a1a1] hover:border-primary/40 active:border-primary/40 transition-all duration-300"
                                             >
                                                  <Icon className="group-hover:text-primary group-active:text-primary" />
                                             </a>
                                        );
                                   })}
                              </div>
                         </motion.div>
                         {/* column 2 */}
                         <motion.div
                              variants={item}
                              className="text-[#a1a1a1]"
                         >
                              <h4 className="font-semibold mb-6 poppins">
                                   Quick Links
                              </h4>
                              <ul className="space-y-4 text-sm">
                                   {quickLinks?.map((itemData) => (
                                        <li key={itemData.name}>
                                             <Link
                                                  to={itemData.link}
                                                  className="hover:text-primary active:text-primary transition-colors"
                                             >
                                                  {itemData.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </motion.div>
                         {/* column 3 */}
                         <motion.div
                              variants={item}
                              className="text-[#a1a1a1]"
                         >
                              <h4 className="font-semibold mb-6 poppins">
                                   Services
                              </h4>
                              <ul className="space-y-4 text-sm">
                                   {serviceLinks?.map((itemData) => (
                                        <li key={itemData.name}>
                                             <Link
                                                  to={itemData.link}
                                                  className="hover:text-primary active:text-primary transition-colors"
                                             >
                                                  {itemData.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </motion.div>
                         {/* column 4 */}
                         <motion.div
                              variants={item}
                              className="text-[#a1a1a1]"
                         >
                              <h4 className="font-semibold mb-6 poppins">
                                   Contact
                              </h4>
                              <ul className="space-y-4 text-[14px]">
                                   {contactLinks?.map((itemData, i) => {
                                        const Icon = itemData.icon;
                                        return (
                                             <li
                                                  key={i}
                                                  className={`flex hover:text-primary/85 active:text-primary/85 cursor-pointer gap-3 ${itemData.multiline
                                                       ? "items-start"
                                                       : "items-center"
                                                       }`}
                                             >
                                                  <Icon className="text-primary mt-1" />
                                                  {itemData.multiline
                                                       ? (
                                                            <span>
                                                                 Patiya, Chittagong,
                                                                 <br />
                                                                 Bangladesh
                                                            </span>
                                                       )
                                                       : itemData.text}
                                             </li>
                                        );
                                   })}
                              </ul>
                         </motion.div>
                    </div>
                    {/* bottom */}
                    <motion.div
                         variants={item}
                         className="pt-8 border-t border-base-100/5 flex flex-col md:flex-row gap-4 justify-between items-center text-xs md:text-sm text-[#a1a1a1]"
                    >
                         <p>
                              © 2025 Promozen. All rights reserved.
                         </p>
                         <div className="flex gap-6">
                              <a
                                   href="#"
                                   className="hover:text-primary active:text-primary transition-colors"
                              >
                                   Privacy Policy
                              </a>
                              <a
                                   href="#"
                                   className="hover:text-primary active:text-primary transition-colors"
                              >
                                   Terms of Service
                              </a>
                         </div>
                    </motion.div>
               </motion.div>
          </footer>
     );
};

export default Footer;