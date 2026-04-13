import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { aboutMissions, stats, timeline, values } from '../../utils/About_page_data';
import IconBox from '../../utils/IconBox';
import CTA from '../Home/CTA/CTA';
import { cardVariants, containerVariants } from '../../utils/animationsValue';

const About = () => {

     return (
          <section className="inter bg-secondary py-20 md:py-24 overflow-hidden text-base-100">

               <div className="py-8 md:py-14">
                    {/* header part */}
                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full xl:max-w-[75%] px-4 md:px-6">
                         {/* Left Side: Content */}
                         <motion.div
                              initial={{ opacity: 0, x: -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                         >
                              {/* Badge */}
                              <div className="poppins inline-flex items-center gap-2 bg-base-200 border border-primary/25 rounded-full px-4 py-2 mb-8">
                                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                   <span className="text-primary text-[13px] font-medium tracking-wide uppercase">
                                        More About Us
                                   </span>
                              </div>
                              {/* Main Heading */}
                              <h2 className="poppins text-4xl md:text-5xl lg:text-6xl font-bold text-base-100 mb-8 leading-[1.1]">
                                   Transforming Brands Through <br />
                                   <span className="text-primary">Digital Excellence</span>
                              </h2>

                              {/* Description */}
                              <p className="text-[#a1a1a1] text-lg leading-relaxed mb-10 max-w-xl">
                                   At Promozen, we don't just provide services; we build digital legacies.
                                   Our team of experts is dedicated to pushing the boundaries of what's possible in the digital landscape.
                              </p>
                              {/* Feature List */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                   {[
                                        "Strategic Growth Plans",
                                        "Data-Driven Insights",
                                        "Creative Storytelling",
                                        "Dedicated Partnership"
                                   ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 group">
                                             <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-base-200 transition-all cursor-pointer">
                                                  <FiCheckCircle className="text-sm" />
                                             </div>
                                             <span className="text-base-100 font-medium group-hover:text-primary transition-colors">
                                                  {item}
                                             </span>
                                        </div>
                                   ))}
                              </div>
                              {/* CTA Button */}
                              <div className='flex items-center gap-4 flex-wrap'>
                                   <Link
                                        to={'/contact'}
                                        className="group flex w-fit items-center gap-3 bg-primary text-base-200 font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)] active:drop-shadow-[0_0_10px_rgba(242,201,76,0.25)]">
                                        Work With Us
                                        <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform " />
                                   </Link>

                                   <Link
                                        to={'/portfolio'}
                                        className="flex items-center gap-2 border border-base-100/10 text-base-100 font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/50 active:text-primary active:border-primary/50">
                                        See Our Work
                                   </Link>
                              </div>
                         </motion.div>
                         {/* Right Side: Image Placeholder with Effects */}
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                         >
                              {/* Background Glow */}
                              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
                              {/* Image Box */}
                              <div className="relative z-10 h-fit rounded-[2.5rem] bg-base-200/60 border-4 border-base-100/10 overflow-hidden group hover:border-primary/30 transition-all hover:-translate-y-1.5 hover:active-primary/30 active:-translate-y-1.5 duration-300">
                                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-all"></div>

                                   <img
                                        src="/Promozen team.jpeg"
                                        alt="promozen team"
                                        className='h-full w-full object-cover'
                                   />
                              </div>
                              {/* Decorative Element */}
                              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                              {/* Background Decorative Rings */}
                              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full "></div>
                              <div className="absolute -bottom-14 -right-14 w-40 h-40 border-2 border-primary/10 rounded-full"></div>
                         </motion.div>
                    </div>
                    {/* 2. Mission & Vision */}
                    <section
                         className="py-24 mt-20 md:mt-24 text-base-100 bg-base-200 w-full">
                         <motion.div
                              initial={{ opacity: 0, y: 60 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                              className="px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full xl:max-w-[75%] mx-auto">
                              {aboutMissions?.map((item, i) => (
                                   <motion.div key={i} className="bg-base-200 p-6 md:p-10 rounded-xl border-2 border-primary/10 hover:border-primary/25 transition-all duration-300 group active:border-primary/25 hover:drop-shadow-[0_0_30px_rgba(242,201,76,0.07)] active:drop-shadow-[0_0_30px_rgba(242,201,76,0.07)]">
                                        {/* Icon box */}
                                        <IconBox icon={item.icon} className='mb-6' />

                                        <h3 className="poppins group-hover:text-primary text-2xl font-bold group-active:text-primary mb-4">
                                             {item.title}</h3>
                                        <p className="text-[#a1a1a1] mb-6">{item.desc}</p>
                                        <ul className="space-y-3">
                                             {item.points.map((p, j) => (
                                                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                                                       <FiCheckCircle className="text-primary" /> {p}
                                                  </li>
                                             ))}
                                        </ul>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </section>
                    {/* 3. Our Journey (Timeline) */}
                    <section className="py-16 overflow-hidden w-full xl:max-w-[65%] px-4 md:px-6 mx-auto">
                         <div className="max-w-7xl mx-auto">
                              <div className="text-center mb-20">
                                   <span className="text-primary poppins font-bold uppercase tracking-widest text-sm">Our Journey</span>
                                   <h2 className="poppins text-4xl md:text-5xl font-bold mt-4">Building Brands <span className="text-primary">Since 2025</span></h2>
                                   <p className="text-[#a1a1a1] mt-4 max-w-xl mx-auto">From a small team of creative minds to a full-service digital agency trusted by 50+ brands.</p>
                              </div>
                              {/* Timeline Container */}
                              <div className="relative">
                                   <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 h-full w-[2px] bg-primary/30" />

                                   <div className="space-y-6 md:space-y-2">
                                        {timeline?.map((step, i) => (
                                             <motion.div
                                                  key={i}
                                                  initial={{ opacity: 0, y: 35 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: i * 0.2 }}
                                                  className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                             >
                                                  {/* Empty Space for Zig-Zag (Desktop Only) */}
                                                  <div className="hidden md:block w-[35%]" />
                                                  {/* Timeline Dot */}
                                                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full border border-secondary z-10 shadow-[0_0_15px_rgba(242,201,76,0.6)] animate-pulse" />
                                                  {/* Content Card */}
                                                  <div className="w-full ml-12 md:ml-0 md:w-[40%]">
                                                       <div className="bg-base-300/50 p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(242,201,76,0.1)]
                                                       group hover:-translate-y-2 active:border-primary/25 
                                                       active:shadow-[0_0_25px_rgba(242,201,76,0.1)] active:-translate-y-2
                                                       ">

                                                            <span className={`text-primary font-bold text-sm uppercase mb-2 block ${i % 2 === 0 && 'md:text-right'} ${i % 2 !== 0 && 'md:text-left text-left'}`}>
                                                                 {step.year}
                                                            </span>
                                                            <h4 className={`poppins group-hover:text-primary transition-colors text-xl font-bold mb-3 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                                                                 {step.title}
                                                            </h4>
                                                            <p className={`text-[#a1a1a1] leading-relaxed ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                                                                 {step.desc}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* 4. What Drives Us (Values) */}
                    <section className="py-16 bg-base-200">
                         <div className="text-center mb-16">
                              <span className="text-primary poppins font-bold uppercase tracking-widest text-sm">Our Values</span>
                              <h2 className="poppins text-4xl font-bold mt-4">What Drives <span className="text-primary">Us</span></h2>
                         </div>
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView='show'
                              viewport={{ once: true }}
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full xl:max-w-[75%] px-4 md:px-6 mx-auto">
                              {values?.map((val, index) => (
                                   <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        className="group relative p-8 rounded-2xl bg-base-200/35 border-2 border-primary/5 hover:border-primary/25 active:border-primary/25    transition-all duration-500 flex items-start gap-5"
                                   >
                                        {/* Icon Box */}
                                        <IconBox icon={val.icon} className="mb-8 flex-shrink-0" />
                                        {/* Text Content */}
                                        <div>
                                             <h3 className="text-lg font-bold text-base-100 mb-2 group-hover:text-primary group-active:text-primary transition-colors poppins">
                                                  {val.title}
                                             </h3>
                                             <p className="text-[#a1a1a1] text-sm leading-relaxed">
                                                  {val.desc}
                                             </p>
                                        </div>
                                        {/* Bottom Decorative Line */}
                                        <div className="absolute bottom-px overflow-hidden rounded-full left-0 w-0 h-[3px] bg-primary/75 transition-all duration-500 group-hover:w-[95%] ml-2.5 group-active:w-[95%]"></div>

                                        {/* Subtle Hover Glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity -z-10"></div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </section>
                    {/* 5. Stats Section */}
                    <section className="pt-20 pb-30">
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView='show'
                              viewport={{ once: true }}
                              className="w-full xl:max-w-[75%] px-4 md:px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {stats.map((item, index) => (
                                   <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        className="bg-base-200/50 border border-primary/10 p-10 
                                        rounded-3xl flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-all duration-300 
                                        hover:shadow-2xl/80 hover:shadow-primary/15 active:border-primary/30 active:shadow-2xl/80 active:shadow-primary/15"
                                   >
                                        {/* Icon Box */}
                                        <IconBox icon={item.icon} className='mb-6 w-16 h-16' />
                                        {/* Value */}
                                        <h3 className="poppins text-3xl md:text-4xl font-bold text-primary mb-2 shadow-primary/20 drop-shadow-sm">
                                             {item.value}
                                        </h3>
                                        {/* Label */}
                                        <p className="inter text-base-100/60 font-medium tracking-wide uppercase text-xs md:text-sm">
                                             {item.label}
                                        </p>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </section>
                    {/* cta section */}
                    <CTA></CTA>
               </div>
          </section>
     );
};

export default About;
