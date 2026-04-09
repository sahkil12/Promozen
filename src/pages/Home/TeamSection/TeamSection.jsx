import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mustafa Tazwer",
      role: "Web Developer",
      image: "/Images/Team/team-1.jpeg",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/"
      },
      experience: '',
      description: '',
      skills: ['']
    },
    {
      name: "Mohinul islam",
      role: "Graphics Designer",
      image: "/Images/Team/team-2.jpeg",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Tanvir Hossain",
      role: "SEO Expert",
      image: "/Images/Team/team-3.jpeg",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Morshed Khan",
      role: "Motion Design Expert",
      image: "/Images/Team/team-6.jpeg",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/"
      }
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView='show'
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative rounded-3xl bg-base-200/55 border-2 transition-all duration-500 overflow-hidden border-primary/5 hover:border-primary/35 active:border-primary/35
              hover:shadow-primary/20 active:shadow-primary/20 shadow-2xl/50 cursor-pointer
                `}
            >
              {/* Image Placeholder */}
              <div className={`relative transition-transform duration-500 group-hover:scale-105 overflow-hidden`}>
                {/* image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className='h-86 w-full' />
                {/* Social Icons Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-400 overflow-hidden p-2">

                  {[
                    { icon: FaFacebookF, link: member.social.facebook },
                    { icon: FaLinkedinIn, link: member.social.linkedin },
                    { icon: FaTwitter, link: member.social.twitter }
                  ].map(({ icon: Icon, link }, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/95 flex items-center justify-center text-base-200 text-xs hover:bg-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:-translate-y-1 active:scale-105"
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
        </motion.div>
        {/* Footer Link */}
        <div className="flex justify-center mb-28 md:mb-40">
          <Link
            to={'/team'}
            className="flex items-center gap-2 text-primary font-bold group"
          >
            Meet The Full Team
            <FiArrowRight className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
          </Link>
        </div>
        {/* cta card */}
        <CTA></CTA>
      </div>
    </section>
  );
};

export default TeamSection;