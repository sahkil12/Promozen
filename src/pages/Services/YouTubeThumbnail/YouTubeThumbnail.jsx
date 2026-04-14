import { services } from "../../../utils/cardsData";
import youtube_thumbnail from '../../../../public/Images/services/youtube-thumbnail.jpg'
import ServiceLayout from "../ServiceLayout";
import { FiLayers, FiTarget } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";

const YouTubeThumbnail = () => {

     const serviceData = {
          badge: "Design",

          header: {
               title1: "YouTube",
               title2: "Thumbnail Design",
               subtitle: "Every thumbnail is optimized for maximum visual impact using proven design principles, color psychology, and emotional triggers. We analyze top-performing thumbnails in your niche and create designs that stand out while staying true to your brand."
          },

          serviceImage: youtube_thumbnail,
          serviceAlt: "YouTube Thumbnail Design",

          statsData: [
               { label: "Avg. CTR Increase", value: "35%" },
               { label: "Thumbnails Designed", value: "50+" },
               { label: "Channels Served", value: "20+" },
               { label: "Views Generated", value: "50k+" },
          ],

          about: {
               des1: "Your thumbnail is the first thing viewers see. We design eye-catching, click-worthy thumbnails that increase your video's CTR.",

               des2: "Every thumbnail is optimized for maximum visual impact using proven design principles, color psychology, and emotional triggers. We analyze top-performing thumbnails in your niche and create designs that stand out while staying true to your brand."
          },

          benefitsData: [
               [
                    "High-CTR thumbnail design",
                    "Brand-consistent styling",
                    "Color psychology application",
                    "Custom character illustrations",
               ],
               [
                    "A/B testing variations",
                    "Text overlay optimization",
                    "Competitor analysis",
                    "Batch thumbnail packages",
               ],
          ],

          featuresData: [
               {
                    icon: FiTarget,
                    title: "CTR-Optimized",
                    desc: "Every thumbnail is designed with click-through rate as the primary goal."
               },
               {
                    icon: FiLayers,
                    title: "Niche Research",
                    desc: "We study what works in your specific niche before designing."
               },
               {
                    icon:FaChartBar ,
                    title: "Data-Backed",
                    desc: "We analyze performance data to continuously improve thumbnail effectiveness."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "Video Analysis",
                    desc: "Understand your video content, target audience, and what drives clicks in your niche."
               },
               {
                    id: "02",
                    title: "Concept Design",
                    desc: "Create 2-3 thumbnail concepts per video with different approaches and styles."
               },
               {
                    id: "03",
                    title: "Refinement",
                    desc: "Polish the chosen design with perfect typography, colors, and visual hierarchy."
               },
               {
                    id: "04",
                    title: "Performance Review",
                    desc: "Analyze CTR data across thumbnails and optimize future designs based on results."
               }
          ],

          toolsData: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "TubeBuddy", "VidIQ", "Canva Pro"],

          relatedServices: services.slice(4, 7)
     }


     return (
          <div>
               <ServiceLayout
                    data={serviceData}
               />
          </div>
     );
};

export default YouTubeThumbnail;