import { services } from "../../../utils/cardsData";
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import ServiceLayout from "../ServiceLayout";
import { FiTarget } from "react-icons/fi";
import { IoFlashOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const SocialMediaMarketing = () => {

     const serviceData = {
          badge: "Marketing",

          header: {
               title1: "Social",
               title2: "Media Marketing",
               subtitle: "Our team stays ahead of trends and algorithms to ensure your brand stays relevant and visible. We craft platform-specific strategies that resonate with your target audience, foster meaningful conversations, and drive measurable business outcomes through social channels."
          },

          serviceImage: web_dev,
          serviceAlt: "Social Media Marketing",

          statsData: [
               { label: "Avg. Engagement Boost", value: "200%" },
               { label: "Followers Generated", value: "20K+" },
               { label: "Brands Managed", value: "30+" },
               { label: "Campaigns Launched", value: "200+" },
          ],

          about: {
               des1: "We create and manage social media strategies that build genuine engagement, grow your following, and convert fans into customers.",

               des2: "Our team stays ahead of trends and algorithms to ensure your brand stays relevant and visible. We craft platform-specific strategies that resonate with your target audience, foster meaningful conversations, and drive measurable business outcomes through social channels."
          },

          benefitsData: [
               [
                    "Platform-specific strategy",
                    "Community management",
                    "Paid social advertising",
                    "Brand voice development",
               ],
               [
                    "Content calendar planning",
                    "Influencer partnerships",
                    "Social listening & analytics",
                    "Crisis management",
               ],
          ],

          featuresData: [
               {
                    icon: LuUsers ,
                    title: "Community Builders",
                    desc: "We don't just post — we build engaged communities around your brand."
               },
               {
                    icon: IoFlashOutline,
                    title: "Trend-Forward",
                    desc: "We stay ahead of algorithm changes and viral trends to keep you relevant."
               },
               {
                    icon: FiTarget,
                    title: "Audience-First",
                    desc: "Every piece of content is crafted with your target audience in mind."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "Platform Audit",
                    desc: "Evaluate your current social presence, audience demographics, and growth opportunities."
               },
               {
                    id: "02",
                    title: "Content Strategy",
                    desc: "Develop a content plan with themes, formats, and posting schedules for each platform."
               },
               {
                    id: "03",
                    title: "Execution & Management",
                    desc: "Daily posting, active engagement, community management, and real-time responses."
               },
               {
                    id: "04",
                    title: "Growth & Reporting",
                    desc: "Track metrics, analyze trends, and optimize for continuous audience growth."
               }
          ],

          toolsData: ["Hootsuite", "Buffer", "Canva Pro", "Meta Business Suite", "Sprout Social", "Later"],

          relatedServices: services.slice(0, 3)
     }


     return (
          <div>
               <ServiceLayout
                    data={serviceData}
               />
          </div>
     );
};

export default SocialMediaMarketing;