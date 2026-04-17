import { cardVariants, containerVariants } from "../../utils/animationsValue";
import TeamCard from "../../utils/Cards/TeamCard";
import SectionHeader from "../../utils/SectionHeader";
import CTA from "../Home/CTA/CTA";
import { motion } from 'framer-motion';
import fullTeams from '../../../public/Api/teams.json'
import { useState } from "react";
import TeamModal from "../../components/modals/TeamModal/TeamModal";

const Team = () => {

     const teamMembers = fullTeams?.teams
     const [selectedMember, setSelectedMember] = useState(null);

     return (
          <section className="inter bg-secondary py-20 md:py-24 overflow-hidden text-base-100">

               <div className="py-8 md:py-14 w-full xl:max-w-[75%] mx-auto px-4 md:px-8">
                    <SectionHeader
                         header="Our Team"
                         title1="Meet the"
                         title2="Experts"
                         subtitle="The talented people behind Promozen's success."
                         center={false}
                    />
                    {/* team Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView='show'
                         viewport={{ once: false }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                         {teamMembers.map((member, index) => (
                              <TeamCard
                                   key={`${member.name}-${index}`}
                                   cardVariants={cardVariants}
                                   member={member}
                                   onView={() => setSelectedMember(member)}
                              />
                         ))}
                    </motion.div>
               </div>

               <CTA mb={"mb-2"} />
               {/* modal */}
               {selectedMember && (
                    <TeamModal
                         member={selectedMember}
                         onClose={() => setSelectedMember(null)}
                    />
               )}
          </section>
     );
};

export default Team;