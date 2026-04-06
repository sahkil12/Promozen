import { Link } from "react-router-dom";
import {
     contactLinks,
     quickLinks,
     serviceLinks,
     socialLinks
} from "../../utils/AllLinks";

const Footer = () => {
     return (
          <footer className="bg-accent pt-14 pb-10 overflow-hidden inter">
               <div className="w-full lg:max-w-[70%] mx-auto px-6 relative">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                         {/* Column 1 */}
                         <div>
                              <Link to="/" className="flex items-center gap-1 mb-4">
                                   <img src="/Promozen-logo.png" className="w-10" alt="Logo" />

                                   <span className="text-white font-bold text-2xl tracking-tight poppins">
                                        Promo<span className="text-primary">zen</span>
                                   </span>
                              </Link>

                              <p className="text-[#a1a1a1] text-sm leading-relaxed mb-8 ml-2.5">
                                   We grow your brand digitally. A premium digital marketing agency based in Patiya, Chittagong, Bangladesh.
                              </p>

                              <div className="flex gap-4 ml-2">
                                   {socialLinks?.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                             <a
                                                  key={i}
                                                  href={item.link}
                                                  className="w-10 h-10 group rounded-xl border border-base-100/10 flex items-center justify-center text-[#a1a1a1] hover:border-primary/40 transition-all duration-300"
                                             >
                                                  <Icon className="group-hover:text-primary" />
                                             </a>
                                        );
                                   })}
                              </div>
                         </div>
                         {/* Column 2 */}
                         <div className="text-[#a1a1a1]">
                              <h4 className="font-semibold mb-6 poppins">
                                   Quick Links
                              </h4>

                              <ul className="space-y-4 text-sm">
                                   {quickLinks?.map((item) => (
                                        <li key={item.name}>
                                             <a
                                                  href={item.link}
                                                  className=" hover:text-primary transition-colors"
                                             >
                                                  {item.name}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         {/* Column 3 */}
                         <div className="text-[#a1a1a1]">
                              <h4 className="font-semibold mb-6 poppins">
                                   Services
                              </h4>

                              <ul className="space-y-4 text-sm">
                                   {serviceLinks?.map((item) => (
                                        <li key={item.name}>
                                             <a
                                                  href={item.link}
                                                  className="hover:text-primary transition-colors"
                                             >
                                                  {item.name}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         {/* Column 4 */}
                         <div className="text-[#a1a1a1]">
                              <h4 className="font-semibold mb-6 poppins">
                                   Contact
                              </h4>
                              <ul className="space-y-4 text-[14px]">
                                   {contactLinks?.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                             <li
                                                  key={i}
                                                  className={`flex hover:text-primary/85 cursor-pointer gap-3 ${item.multiline ? "items-start" : "items-center"
                                                       }`}
                                             >
                                                  <Icon className="text-primary mt-1" />

                                                  {item.multiline ? (
                                                       <span>
                                                            Patiya, Chittagong,
                                                            <br />
                                                            Bangladesh
                                                       </span>
                                                  ) : (
                                                       item.text
                                                  )}
                                             </li>
                                        );
                                   })}
                              </ul>
                         </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-xs md:text-sm text-[#a1a1a1]">
                         <p>
                              © 2025 Promozen. All rights reserved.
                         </p>
                         <div className="flex gap-6">
                              <a href="#" className="hover:text-primary transition-colors">
                                   Privacy Policy
                              </a>
                              <a href="#" className="hover:text-primary transition-colors">
                                   Terms of Service
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;