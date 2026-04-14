import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiLock, FiLayers, FiSearch, FiGlobe, FiBarChart, FiArrowUpRight } from 'react-icons/fi';
import { FaCode, FaPaintBrush, FaRocket, FaHeadset } from 'react-icons/fa';
import CTA from '../../Home/CTA/CTA';
import { Link } from 'react-router-dom';
import IconBox from './../../../utils/IconBox';
import SectionHeader from './../../../utils/SectionHeader';

const WebDevelopment = () => {

     const benefits = [
          ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Clean Codebase"],
          ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Clean Codebase"]
     ]

     return (
          <div className="bg-secondary text-base-100 inter overflow-hidden">

               <div className=''>
                    {/* 1. Hero Section */}
                    <section className="pt-32 pb-20 w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   className=""
                              >
                                   {/* Badge */}
                                   <div className="poppins inline-flex items-center gap-2 bg-primary/5 border border-primary/25 rounded-full px-4 py-2.5">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-primary text-xs tracking-wide uppercase font-semibold">
                                             {"Development"}
                                        </span>
                                   </div>

                                   <h1 className="poppins text-5xl font-bold leading-tight mt-5">
                                        {"Web"} <span className="text-primary">{"Development"}</span>
                                   </h1>
                                   <p className="text-[#a1a1a1] text-lg max-w-xl my-8">
                                        From landing pages to full web applications, our development team creates fast, secure, and conversion-optimized digital experiences. We focus on clean code, modern frameworks, and user-centric design to deliver websites that not only look world-class but also perform exceptionally across all devices.
                                   </p>
                                   {/* cta button */}
                                   <div className='flex items-center gap-4 flex-wrap'>
                                        <Link
                                             to={'/contact'}
                                             className="group flex w-fit items-center gap-3 bg-primary text-base-200 font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)] active:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)]">
                                             Work With Us
                                             <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform " />
                                        </Link>

                                        <Link
                                             to={'/portfolio'}
                                             className="flex items-center gap-2 border border-base-100/10 text-base-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/50 active:text-primary active:border-primary/50">
                                             View related work
                                        </Link>
                                   </div>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   className="relative"
                              >
                                   <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                                   <img src="/public/Images/web_devlopment.webp" alt="Code" className="relative z-10 rounded-3xl border-2 border-base-100/5 shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.3)]" />
                              </motion.div>
                         </div>
                    </section>
                    {/* 2. Stats Bar */}
                    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-base-100/5">
                         {[
                              { label: "Projects Completed", value: "100+" },
                              { label: "Client Satisfaction", value: "99.9%" },
                              { label: "Page Load Speed", value: "< 2s" },
                              { label: "Happy Clients", value: "50+" },
                         ].map((stat, i) => (
                              <div key={i} className="text-center">
                                   <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                                   <p className="text-sm text-[#a1a1a1] mt-1">{stat.label}</p>
                              </div>
                         ))}
                    </div>
                    {/* 3. Deliver & Benefits */}
                    <section className="py-24 px-2">
                         <div className="w-full xl:max-w-[75%] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
                              <div>
                                   <span className="text-primary font-semibold text-sm uppercase tracking-widest">ABOUT THIS SERVICE</span>
                                   <h2 className="poppins text-4xl font-bold mt-4 mb-6">What We <span className="text-primary">Deliver</span></h2>
                                   <p className="text-[#a1a1a1] leading-relaxed mb-6">
                                        We build high-performance websites that are stunning and drive results using the latest technologies.
                                        <br />
                                        <br />
                                        From landing pages to full web applications, our development team creates fast, secure, and conversion-optimized digital experiences. We focus on clean code, modern frameworks, and user-centric design to deliver websites that not only look world-class but also perform exceptionally across all devices.

                                   </p>
                              </div>
                              <div>
                                   <span className="text-primary font-bold text-sm uppercase tracking-widest">WHAT YOU GET</span>
                                   <h2 className="poppins text-4xl font-bold mt-4 mb-8">Key <span className="text-primary">Benefits</span></h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                                        <ul className="grid grid-cols-1 gap-4">
                                             {["Performance optimization", "CMS integration", "E-commerce solutions", "Ongoing maintenance & support"].map((item, i) => (
                                                  <li
                                                       key={i}
                                                       className="flex items-center hover:bg-primary/10 active:bg-primary/10 text-neutral-300/80 gap-3 w-fit py-2.5 px-5 hover:text-base-100/90 active:text-base-100/90 transition-all cursor-pointer text-sm rounded-lg"><FiCheckCircle className="text-primary" /> {item}</li>
                                             ))}
                                        </ul>
                                        <ul className="grid grid-cols-1 gap-4">
                                             {["Custom UI/UX Design", "Responsive development", "SEO Optimization", "Clean Codebase"].map((item, i) => (
                                                  <li key={i} className="flex items-center hover:bg-primary/10 active:bg-primary/10 text-neutral-300/80 gap-3 w-fit py-2.5 px-5 hover:text-base-100/90 active:text-base-100/90 transition-all cursor-pointer text-sm rounded-lg"><FiCheckCircle className="text-primary" /> {item}</li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* 4. Why Promozen (Features) */}
                    <section className="py-24 bg-accent/90">
                         <div className="w-full xl:max-w-[75%] mx-auto px-6 md:px-8 text-center">
                              {/* Header */}
                              <SectionHeader
                                   header={"WHY CHOOSE US"}
                                   title1={"Why Promozen for"}
                                   title2={"Web Development"}
                                   center={true}
                              />
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                                   {[
                                        { icon: <FiZap />, t: "Lightning Fast", d: "We optimize every line of code to ensure your site loads in a blink." },
                                        { icon: <FiLock />, t: "Secure & Reliable", d: "Industry-standard security protocols to keep your data safe." },
                                        { icon: <FiLayers />, t: "Scalable Architecture", d: "Built with future growth in mind, easily add new features." },
                                   ].map((card, i) => (
                                        <div key={i} className="bg-base-200 p-10 rounded-3xl border border-base-100/5 duration-300 transition-all group hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(242,201,76,0.1)] hover:border-primary/30 active:-translate-y-2 active:drop-shadow-[0_0_15px_rgba(242,201,76,0.1)] active:border-primary/30">
                                             {/* icon box */}
                                             <IconBox icon={card.icon} className='mb-8 mx-auto' />

                                             <h4 className="text-xl font-semibold mb-4 poppins group-hover:text-primary active:text-primary">{card.t}</h4>
                                             <p className="text-[#a1a1a1] text-sm leading-relaxed">{card.d}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>
                    {/* 5. Process (How We Work) */}
                    <section className="py-24 px-2">
                         <div className="w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
                              <div className="mb-16">
                                   <SectionHeader
                                        header={"OUR PROCESS"}
                                        title1={"How We"}
                                        title2={"Work"}
                                        center={true}
                                   />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                   {[
                                        { id: "01", t: "Discovery", d: "Research and planning" },
                                        { id: "02", t: "Design", d: "UI/UX Prototyping" },
                                        { id: "03", t: "Development", d: "Writing clean code" },
                                        { id: "04", t: "Launch", d: "Deployment & Support" },
                                   ].map((step, i) => (
                                        <div key={i} className="relative p-8 bg-base-200 rounded-2xl border border-base-100/5 overflow-hidden group">
                                             <span className="absolute -top-4 -right-2 text-7xl font-black text-base-100/5 group-hover:text-primary/10 transition-colors">{step.id}</span>
                                             <h4 className="text-xl font-bold mb-2 relative z-10">{step.t}</h4>
                                             <p className="text-sm text-[#a1a1a1] relative z-10">{step.d}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>
                    {/* 6. Tools & Technologies */}
                    <div className="py-20 text-center bg-base-300/50 border-y border-base-100/5">
                         <h4 className="text-sm font-bold text-primary mb-8 uppercase tracking-[0.3em]">Tools & Technologies We Use</h4>
                         <div className="flex flex-wrap justify-center gap-6 opacity-50">
                              {["React", "Node.js", "MongoDB", "Tailwind", "Next.js", "Framer"].map((tool, i) => (
                                   <span key={i} className="text-2xl font-bold poppins">{tool}</span>
                              ))}
                         </div>
                    </div>
                    {/* 7. FAQ Section */}
                    <section className="py-24 px-6 max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                              <span className="text-primary font-bold uppercase text-xs">FAQ</span>
                              <h2 className="text-4xl font-bold mt-2">Common <span className="text-primary">Questions</span></h2>
                         </div>
                         <div className="space-y-4">
                              {[
                                   "What technologies do you use?",
                                   "Do you offer maintenance services?",
                                   "How long does a website take to build?"
                              ].map((q, i) => (
                                   <div key={i} className="collapse collapse-plus bg-base-200 border border-base-100/5 rounded-2xl">
                                        <input type="radio" name="my-accordion-3" defaultChecked={i === 0} />
                                        <div className="collapse-title text-xl font-medium">{q}</div>
                                        <div className="collapse-content text-[#a1a1a1]">
                                             <p>We use modern MERN stack and latest frameworks to ensure high quality and scalability for your business.</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </section>
                    {/* 8. Related Services */}
                    <section className="py-24 px-6 bg-base-200/20">
                         <div className="max-w-7xl mx-auto text-center">
                              <span className="text-primary font-bold">OUR SERVICES</span>
                              <h2 className="text-4xl font-bold mt-2 mb-16">Related <span className="text-primary">Services</span></h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                   {[
                                        { icon: <FiSearch />, t: "SEO Optimization", d: "Rank higher on Google" },
                                        { icon: <FiGlobe />, t: "Digital Marketing", d: "Scale your brand online" },
                                        { icon: <FiBarChart />, t: "Social Media", d: "Engage with your audience" },
                                   ].map((s, i) => (
                                        <div key={i} className="p-8 bg-base-300 border border-base-100/5 rounded-3xl text-left group hover:border-primary/20 transition-all">
                                             <div className="text-primary text-3xl mb-6">{s.icon}</div>
                                             <h4 className="text-xl font-bold mb-3">{s.t}</h4>
                                             <p className="text-sm text-[#a1a1a1] mb-6">{s.d}</p>
                                             <button className="text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More →</button>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>
                    {/* 9. Final CTA */}
                    <CTA mb={"mb-28 mt-20"} />
               </div>
          </div>
     );
};

export default WebDevelopment;