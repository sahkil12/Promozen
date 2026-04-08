import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arif Rahman",
      role: "Founder & CEO",
      bgColor: "bg-gray-800"
    },
    {
      name: "Nusrat Jahan",
      role: "Creative Director",
      bgColor: "bg-gray-700"
    },
    {
      name: "Tanvir Hossain",
      role: "Lead Developer",
      bgColor: "bg-gray-800"
    },
    {
      name: "Fatima Khan",
      role: "Marketing Strategist",
      bgColor: "bg-gray-700"
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-secondary text-base-100 overflow-hidden inter">
      {/* Background Grid Effect */}
      <BgGridDesign />

      <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">
        {/* Header */}
        <SectionHeader
          header="Our Team"
          title1="Meet the"
          title2="Experts"
          center={true}
        />
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl bg-[#121212]/50 border transition-all duration-500 overflow-hidden border-base-100/5 hover:border-primary/50`}
            >
              {/* Image Placeholder */}
              <div className={`relative  ${member.bgColor} transition-transform duration-500 group-hover:scale-105`}>
                <img src="" alt="" className='h-90' />
                {/* Social Icons Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-300 overflow-hidden p-2">
                  {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center text-base-200 text-xs hover:bg-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:-translate-y-1 active:scale-105"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-6 text-center">
                <h4 className={`text-xl font-semibold mb-1 transition-colors text-base-100 group-hover:text-primary poppins`}>
                  {member.name}
                </h4>
                <p className="text-primary/90 text-xs font-medium uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Footer Link */}
        <div className="flex justify-center">
          <Link
            to={'/team'}
            className="flex items-center gap-2 text-primary font-bold group"
          >
            Meet The Full Team
            <FiArrowRight className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;