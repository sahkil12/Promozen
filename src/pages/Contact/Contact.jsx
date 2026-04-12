import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import IconBox from '../../utils/IconBox';

const Contact = () => {
     const contactDetails = [
          {
               icon: <FiMail />,
               title: "Email",
               value: "promozenagency@gmail.com",
               link: "mailto:promozenagency@gmail.com"
          },
          {
               icon: <FiPhone />,
               title: "Phone",
               value: "+880 1345 295225",
               value2: "+880 1744 597267",
               link: "tel:+8801345295225"
          },
          {
               icon: <FiMapPin />,
               title: "Location",
               value: "Patiya, Chittagong, Bangladesh",
               link: "#"
          },
          {
               icon: <FiClock />,
               title: "Working Hours",
               value: "Sat - Thu: 10AM - 8PM",
               link: "#"
          }
     ];

     return (
          <section className="bg-secondary py-24 md:py-32 text-base-100 inter">
               <div className="w-full xl:max-w-[75%] mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="mb-16">
                         <span className="text-primary font-bold uppercase tracking-widest text-sm">Contact Us</span>
                         <h2 className="poppins text-5xl md:text-6xl font-bold mt-4">Let's <span className="text-primary">Talk</span></h2>
                         <p className="text-[#a1a1a1] mt-6 max-w-xl text-lg">
                              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                         {/* Left Side: Contact Form */}
                         <motion.div
                              initial={{ opacity: 0, x: -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="lg:col-span-7"
                         >
                              <form className="space-y-6">
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input
                                             type="text"
                                             placeholder="Your Name"
                                             className="w-full bg-base-200 border border-base-100/5 rounded-xl p-4 outline-none focus:border-primary/50 transition-all"
                                        />
                                        <input
                                             type="email"
                                             placeholder="Your Email"
                                             className="w-full bg-base-200 border border-base-100/5 rounded-xl p-4 outline-none focus:border-primary/50 transition-all"
                                        />
                                   </div>
                                   <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-base-200 border border-base-100/5 rounded-xl p-4 outline-none focus:border-primary/50 transition-all"
                                   />
                                   <textarea
                                        rows="6"
                                        placeholder="Your Message"
                                        className="w-full bg-base-200 border border-base-100/5 rounded-xl p-4 outline-none focus:border-primary/50 transition-all resize-none"
                                   ></textarea>

                                   <button className="flex items-center gap-2 bg-primary text-base-200 font-bold py-4 px-10 cursor-pointer rounded-xl hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.3)] group transition-all">
                                        Send Message <FiSend className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-active:translate-x-1 group-active:-translate-y-1'/>
                                   </button>
                              </form>
                         </motion.div>
                         {/* Right Side: Contact Info */}
                         <motion.div
                              initial={{ opacity: 0, x: 40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="lg:col-span-5 space-y-5"
                         >
                              {contactDetails.map((info, index) => (
                                   <div key={index} className="bg-base-200/50 border border-base-100/5 p-5 rounded-2xl flex items-center gap-5 group hover:border-primary/25 transition-all duration-300 hover:-translate-y-1.5 active:border-primary/25 active:-translate-y-1.5">

                                        <IconBox icon={info.icon} className='' />
                                        <div>
                                             <p className="text-xs poppins text-base-100/56 uppercase tracking-wider font-bold">{info.title}</p>
                                             <p className="text-base-100/90 font-medium mt-1">{info.value}</p>
                                        </div>
                                   </div>
                              ))}
                         </motion.div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="mt-20 w-full h-[450px] rounded-[2rem] overflow-hidden border border-base-100/5"
                    >
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.682021115!2d91.8415!3d22.281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2f9630737409%3A0xf639a0391d4e68e4!2sPatiya!5e0!3m2!1sen!2sbd!4v1713000000000!5m2!1sen!2sbd"
                              width="100%"
                              height="100%"
                              style={{ border: 0, filter: 'invert(0.15) contrast(1)' }}
                              allowFullScreen=""
                              loading="lazy"
                         ></iframe>
                    </motion.div>
               </div>
          </section>
     );
};

export default Contact;