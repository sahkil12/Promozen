import { services } from "../../../utils/cardsData";
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import ServiceLayout from "../ServiceLayout";
import { FiLayers, FiTarget } from "react-icons/fi";
import { IoFlashOutline } from "react-icons/io5";

const SocialMediaDesign = () => {

     const serviceData = {
          badge: "Design",

          header: {
               title1: "Social",
               title2: "Media Design",
               subtitle: "From feed posts to stories and reels covers, we ensure every visual communicates your brand's premium quality. Our designers combine aesthetic excellence with strategic thinking, creating visuals that not only look beautiful but also drive action and engagement."
          },

          serviceImage: web_dev,
          serviceAlt: "Social Media Design",

          statsData: [
               { label: "Designs Created", value: "150+" },
               { label: "Avg. Engagement Lift", value: "3x" },
               { label: "Brands Styled", value: "25+" },
               { label: "Avg. Turnaround", value: "24h" },
          ],

          about: {
               des1: "Our design team creates stunning social media graphics that align with your brand identity and stop users mid-scroll.",

               des2: "From feed posts to stories and reels covers, we ensure every visual communicates your brand's premium quality. Our designers combine aesthetic excellence with strategic thinking, creating visuals that not only look beautiful but also drive action and engagement."
          },

          benefitsData: [
               [
                    "Brand-consistent designs",
                    "Story & reel templates",
                    "Event & promotion graphics",
                    "Custom illustration",
               ],
               [
                    "Feed aesthetic planning",
                    "Carousel post designs",
                    "Brand guideline development",
                    "Animated post designs",
               ],
          ],

          featuresData: [
               {
                    icon: FiLayers ,
                    title: "Pixel-Perfect Quality",
                    desc: "Every design is meticulously crafted with attention to detail."
               },
               {
                    icon: IoFlashOutline,
                    title: "Quick Turnaround",
                    desc: "Most designs delivered within 24 hours — without compromising quality."
               },
               {
                    icon: FiTarget,
                    title: "Conversion-Focused",
                    desc: "Designs that don't just look good — they drive clicks and engagement."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "Brand Discovery",
                    desc: "Understand your brand aesthetics, colors, typography, and visual preferences."
               },
               {
                    id: "02",
                    title: "Design Concepts",
                    desc: "Create initial design templates, mood boards, and style guides for approval."
               },
               {
                    id: "03",
                    title: "Production",
                    desc: "Produce high-quality graphics on schedule for all platforms and formats."
               },
               {
                    id: "04",
                    title: "Iterate & Refine",
                    desc: "Continuously improve designs based on engagement data and feedback."
               }
          ],

          toolsData: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "After Effects", "Procreate"],

          relatedServices: services.slice(5, 8)
     }


     return (
          <div>
               <ServiceLayout
                    data={serviceData}
               />
          </div>
     );
};
export default SocialMediaDesign;