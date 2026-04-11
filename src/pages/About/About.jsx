import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle, FiTarget, FiEye, FiAward, FiHeart, FiZap, FiUsers, FiShield, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { aboutMissions } from '../../utils/About_page_data';

const About = () => {

     return (
          <section className="inter bg-secondary py-24 md:py-28 px-6 overflow-hidden">
               <div className="w-full xl:max-w-[75%] mx-auto py-8 md:py-14 px-4 md:px-6">
                    {/* header part */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    <section className="py-20 md:py-36 text-base-100">
                         <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                              {aboutMissions?.map((item, i) => (
                                   <motion.div key={i} className="bg-base-200 p-10 rounded-xl border-2 border-primary/10 hover:border-primary/25 transition-all duration-300 group hover:drop-shadow-[0_0_30px_rgba(242,201,76,0.07)] active:drop-shadow-[0_0_30px_rgba(242,201,76,0.07)]">
                                        {/* icon */}
                                        <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center text-primary text-2xl mb-6 transition-all duration-300 shadow-[0_0_15px_rgba(242,201,76,0.1)] group-hover:bg-primary/10 group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-hover:border-primary/20 group-active:bg-primary/10 group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] group-active:border-primary/20">
                                             {item.icon}
                                        </div>
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
                         </div>
                    </section>
               </div>
          </section>
     );
};

export default About;




// import { motion } from 'framer-motion';
// import { FiArrowUpRight, FiCheckCircle, FiTarget, FiEye, FiAward, FiHeart, FiZap, FiUsers, FiShield, FiTrendingUp } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const About = () => {
//     const fadeIn = {
//         initial: { opacity: 0, y: 20 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true },
//         transition: { duration: 0.6 }
//     };

//     return (
//         <main className="bg-secondary text-base-100 overflow-hidden inter">
//             {/* 1. Hero Section */}
//


//   {/* 2. Mission & Vision */}
//   <section className="py-20 px-6 bg-base-200/30">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {[
//               { title: "Our Mission", icon: <FiTarget />, desc: "To empower businesses with innovative digital strategies that drive growth and create lasting impact.", points: ["Data-driven approach", "Client-centric solutions", "Continuous innovation"] },
//               { title: "Our Vision", icon: <FiEye />, desc: "To become the most trusted digital partner globally, known for setting new standards in digital excellence.", points: ["Global reach", "Market leadership", "Sustainable growth"] }
//           ].map((item, i) => (
//               <motion.div key={i} {...fadeIn} className="bg-base-300 p-10 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group">
//                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-secondary transition-all">
//                       {item.icon}
//                   </div>
//                   <h3 className="poppins text-2xl font-bold mb-4">{item.title}</h3>
//                   <p className="text-[#a1a1a1] mb-6">{item.desc}</p>
//                   <ul className="space-y-3">
//                       {item.points.map((p, j) => (
//                           <li key={j} className="flex items-center gap-3 text-sm font-medium">
//                               <FiCheckCircle className="text-primary" /> {p}
//                           </li>
//                       ))}
//                   </ul>
//               </motion.div>
//           ))}
//       </div>
//   </section>



//             {/* 3. Our Journey (Timeline) */}
//             <section className="py-24 px-6">
//                 <div className="max-w-4xl mx-auto text-center mb-16">
//                     <span className="text-primary poppins font-bold uppercase tracking-widest text-sm">Our Journey</span>
//                     <h2 className="poppins text-4xl md:text-5xl font-bold mt-4">Building Brands <span className="text-primary">Since 2025</span></h2>
//                 </div>
//                 <div className="max-w-5xl mx-auto relative border-l-2 border-primary/20 ml-6 md:ml-auto">
//                     {[
//                         { year: "2025 Q1", title: "The Beginning", desc: "Started our journey in Feni with a vision to redefine digital marketing." },
//                         { year: "2025 Q2", title: "First 20 Clients", desc: "Successfully delivered high-impact campaigns for our first batch of clients." },
//                         { year: "2025 Q3", title: "Team Expansion", desc: "Moved to a larger office and hired top-tier talent from across the country." },
//                         { year: "2025 Q4", title: "50+ Happy Clients", desc: "Reached a major milestone of serving 50+ brands globally." }
//                     ].map((step, i) => (
//                         <motion.div key={i} {...fadeIn} className="mb-12 ml-10 relative">
//                             <div className="absolute -left-[51px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-secondary shadow-[0_0_15px_rgba(242,201,76,0.5)]" />
//                             <div className="bg-base-300 p-8 rounded-2xl border border-white/5 inline-block max-w-lg">
//                                 <span className="text-primary font-bold text-sm uppercase mb-2 block">{step.year}</span>
//                                 <h4 className="poppins text-xl font-bold mb-2">{step.title}</h4>
//                                 <p className="text-[#a1a1a1]">{step.desc}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>



//             {/* 4. What Drives Us (Values) */}
//             <section className="py-24 px-6 bg-base-200/50">
//                 <div className="max-w-7xl mx-auto text-center mb-16">
//                     <span className="text-primary poppins font-bold uppercase tracking-widest text-sm">Our Values</span>
//                     <h2 className="poppins text-4xl font-bold mt-4">What Drives <span className="text-primary">Us</span></h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//                     {[
//                         { title: "Excellence", icon: <FiAward />, desc: "We strive for perfection in every project we undertake." },
//                         { title: "Passion", icon: <FiHeart />, desc: "Our love for digital marketing fuels our creativity." },
//                         { title: "Innovation", icon: <FiZap />, desc: "Always staying ahead with the latest technologies." },
//                         { title: "Collaboration", icon: <FiUsers />, desc: "We work as an extension of your team." },
//                         { title: "Transparency", icon: <FiShield />, desc: "Open communication and honest reporting at every step." },
//                         { title: "Results", icon: <FiTrendingUp />, desc: "Focusing on metrics that actually grow your business." }
//                     ].map((val, i) => (
//                         <div key={i} className="bg-base-300 p-8 rounded-2xl border border-white/5 hover:bg-primary/5 transition-all">
//                             <div className="text-primary text-3xl mb-4">{val.icon}</div>
//                             <h4 className="poppins text-xl font-bold mb-2">{val.title}</h4>
//                             <p className="text-[#a1a1a1] text-sm">{val.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>



//             {/* 5. Stats Section */}
//             <section className="py-20 px-6">
//                 <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
//                     {[
//                         { label: "Projects Completed", value: "200+" },
//                         { label: "Happy Clients", value: "50+" },
//                         { label: "Years Experience", value: "1+" },
//                         { label: "Client Retention", value: "98%" }
//                     ].map((stat, i) => (
//                         <div key={i} className="text-center p-8 bg-base-300 rounded-3xl border border-white/5">
//                             <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
//                             <p className="text-[#a1a1a1] text-sm font-medium">{stat.label}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 6. Meet The Experts */}
//             <section className="py-24 px-6">
//                 <div className="max-w-7xl mx-auto text-center mb-16">
//                     <span className="text-primary poppins font-bold uppercase tracking-widest text-sm">Our Team</span>
//                     <h2 className="poppins text-4xl font-bold mt-4">Meet the <span className="text-primary">Experts</span></h2>
//                 </div>
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {[
//                         { name: "Arif Rahman", role: "Founder & CEO", img: "https://i.ibb.co/vzPRY87/team1.jpg" },
//                         { name: "Nusrat Jahan", role: "Creative Director", img: "https://i.ibb.co/Vv0mRkM/team2.jpg" },
//                         { name: "Tanvir Hossain", role: "Lead Developer", img: "https://i.ibb.co/vzPRY87/team1.jpg" },
//                         { name: "Fatima Khan", role: "Marketing Strategist", img: "https://i.ibb.co/Vv0mRkM/team2.jpg" }
//                     ].map((member, i) => (
//                         <motion.div key={i} {...fadeIn} className="group">
//                             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
//                                 <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                             </div>
//                             <h4 className="poppins text-xl font-bold">{member.name}</h4>
//                             <p className="text-primary text-sm font-medium">{member.role}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* 7. CTA Section */}
//             <section className="py-24 px-6">
//                 <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
//                     <h2 className="poppins text-secondary text-4xl md:text-5xl font-bold mb-6 relative z-10">
//                         Ready to Join 50+ Brands <br /> That Trust Us?
//                     </h2>
//                     <p className="text-secondary/80 text-lg mb-10 max-w-xl mx-auto relative z-10">
//                         Let's discuss how Promozen can help your brand grow digitally.
//                     </p>
//                     <Link to="/contact" className="inline-block bg-secondary text-primary font-black py-5 px-12 rounded-2xl hover:scale-105 transition-transform relative z-10">
//                         Get In Touch
//                     </Link>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default About;