import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../../../utils/SectionHeader';
import BgGridDesign from '../../../utils/BgGridDesign';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import { cardVariants, containerVariants } from '../../../utils/animationsValue';
import TeamCard from '../../../utils/Cards/TeamCard';
import fullTeams from '../../../../public/Api/teams.json'
import { useState } from 'react';
import TeamModal from '../../../components/modals/TeamModal/TeamModal';

const TeamSection = () => {

  const teamMembers = fullTeams?.teams
  const [selectedMember, setSelectedMember] = useState(null);

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
              key={`${member.name}-${index}`}
              cardVariants={cardVariants}
              member={member}
              onView={() => setSelectedMember(member)}
            />
          ))}
        </motion.div>
        {/* Footer Link */}
        <div className="flex justify-center ">
          <Link
            to={'/team'}
            className="flex items-center gap-2 text-primary font-bold group"
          >
            Meet The Full Team
            <FiArrowRight className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
          </Link>
        </div>
        {/* modal */}
        {selectedMember && (
          <TeamModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </section>
  );
};

export default TeamSection;