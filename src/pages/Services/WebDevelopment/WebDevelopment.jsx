import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiLock, FiLayers, FiSearch, FiGlobe, FiBarChart, FiArrowUpRight } from 'react-icons/fi';
import CTA from '../../Home/CTA/CTA';
import { Link } from 'react-router-dom';
import IconBox from './../../../utils/IconBox';
import SectionHeader from './../../../utils/SectionHeader';
import ServiceCard from './../../../utils/Cards/ServiceCard';
import { services } from '../../../utils/cardsData'

const WebDevelopment = () => {

     const benefits = [
          ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Clean Codebase"],
          ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Clean Codebase"]
     ]

     return (
          <div className="bg-secondary text-base-100 inter overflow-hidden">

               <div className=''>
                    {/* 1. Hero Section */}
                    <section className="pt-32 pb-20 w-full xl:max-w-[75%] mx-auto px-4 md:px-8">
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

                                   <h1 className="poppins text-4xl sm:text-5xl font-bold leading-tight mt-5">
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
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-base-100/5">
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
                    <section className="py-20 px-0 sm:px-2">
                         <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
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
                    <section className="py-20 bg-accent/90">
                         <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-8 text-center">
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
                    <section className="py-20 px-0 sm:px-2">
                         <div className="w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
                              <div className="mb-16">
                                   <SectionHeader
                                        header={"OUR PROCESS"}
                                        title1={"How We"}
                                        title2={"Work"}
                                        subtitle={"A proven process that delivers consistent, exceptional results every time."}
                                        center={true}
                                   />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                   {[
                                        { id: "01", title: "Discovery & Planning", des: "Understand your goals, audience, technical requirements, and competitive landscape." },
                                        { id: "02", title: "Design & Prototype", des: "Create wireframes, visual designs, and interactive prototypes for approval." },
                                        { id: "03", title: "Development", des: "Build your website with clean code, modern frameworks, and best practices." },
                                        { id: "04", title: "Launch & Support", des: "Deploy, test, optimize, and provide ongoing maintenance and support." },
                                   ].map((step, i) => (
                                        <div key={i} className="relative p-8 bg-base-200/90 rounded-2xl border border-primary/5 overflow-hidden group text-center hover:border-primary/30 active:border-primary/30 hover:-translate-y-1.5 active:-translate-y-1.5 hover:drop-shadow-[0_0_15px_rgba(242,201,76,0.1)] active:drop-shadow-[0_0_15px_rgba(242,201,76,0.1)] transition-all duration-300">
                                             <span className="absolute -top-1 right-0 text-5xl font-black text-base-100/5 group-hover:text-primary/15 group-active:text-primary/15 transition-colors duration-300">{step.id}</span>
                                             <h4 className="text-xl font-bold mb-2.5 relative z-10 group-hover:text-primary group-active:text-primary transition-colors duration-300">{step.title}</h4>
                                             <p className="text-sm text-[#a1a1a1] relative z-10">{step.des}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>
                    {/* 6. Tools & Technologies */}
                    <div className="py-20 text-center bg-base-300/50 border-y border-base-100/5 px-4">
                         <div className="text-center mb-12">
                              <span className="text-primary font-semibold uppercase text-xs tracking-wider">Our Toolkit</span>
                              <h2 className="text-3xl sm:text-4xl font-bold mt-2.5">Tools & Technologies We <span className="text-primary">Use</span></h2>
                         </div>

                         <div className="flex flex-wrap justify-center gap-6">
                              {["React", "Node.js", "MongoDB", "Tailwind", "Next.js", "Framer"].map((tool, i) => (
                                   <span
                                        key={i}
                                        className="text-sm rounded-full px-6 py-2 border border-primary/15 font-medium tracking-wider poppins hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(242,201,76,0.3)] hover:border-primary/30">{tool}</span>
                              ))}
                         </div>
                    </div>
                    {/* 7. Related Services */}
                    <section className="py-20">
                         <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-8">
                              <div className="mb-12">
                                   <SectionHeader
                                        header={"Our Services"}
                                        title1={"Related"}
                                        title2={"Services"}
                                        center={true}
                                   />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                   {services.slice(0,3).map((service, index) => (<ServiceCard
                                             key={index}
                                             cardVariants={""}
                                             service={service}
                                        />))}
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