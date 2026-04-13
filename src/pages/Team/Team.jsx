import { cardVariants, containerVariants } from "../../utils/animationsValue";
import TeamCard from "../../utils/Cards/TeamCard";
import SectionHeader from "../../utils/SectionHeader";
import CTA from "../Home/CTA/CTA";
import { motion } from 'framer-motion';
import fullTeams from '../../../public/Api/teams.json'

const Team = () => {

     const teamMembers = fullTeams?.teams

     return (
          <section className="inter bg-secondary py-20 md:py-24 overflow-hidden text-base-100">

               <div className="py-8 md:py-14 w-full xl:max-w-[75%] mx-auto px-6 md:px-8">
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
                         viewport={{ once: true }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                         {teamMembers.map((member, index) => (
                              <TeamCard
                                   key={index}
                                   cardVariants={cardVariants}
                                   member={member}
                              />
                         ))}
                    </motion.div>

                    <CTA mb={"mb-2"} />
               </div>
          </section>
     );
};

export default Team;