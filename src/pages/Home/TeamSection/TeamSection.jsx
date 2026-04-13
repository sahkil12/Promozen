import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import TeamCard from '../../../utils/Cards/TeamCard';

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
      experience: '1+ year experience',
      description: 'Building Modern Website with responsive & modern features and technology to grow your business more fastest.',
      skills: ['react, next.js, mongodb, express.js, node.js, typescript']
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
        <div
          className="absolute bottom-1/5 md:top-1/2 right-1/3 md:right-10 w-[400px] h-44 bg-primary/15 blur-[120px] rounded-full">
        </div>
        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView='show'
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              cardVariants={cardVariants}
              member={member}
            />
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