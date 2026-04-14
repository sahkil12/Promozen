import { services } from "../../../utils/cardsData";
import seo from '../../../../public/Images/services/seo-service.jpg'
import ServiceLayout from "../ServiceLayout";
import { FiLayers } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

const SEO_Optimization = () => {

     const serviceData = {
          badge: "SEO",

          header: {
               title1: "SEO",
               title2: "Optimization",
               subtitle: "We establish your brand as an authority in your industry and drive long-term organic growth. Our approach combines technical expertise with creative content strategies, ensuring your website not only ranks higher but also delivers an exceptional user experience that converts visitors into customers."
          },

          serviceImage: seo,
          serviceAlt: "seo optimization",

          statsData: [
               { label: "Avg. Organic Growth", value: "200%" },
               { label: "Avg. Ranking Position", value: "Top 5-10" },
               { label: "Keywords on Page 1", value: "80%" },
               { label: "Sites Optimized", value: "30+" },
          ],

          about: {
               des1: "Our SEO services go beyond basic keyword optimization. We implement comprehensive technical SEO, content strategy, and link building campaigns.",

               des2: "We establish your brand as an authority in your industry and drive long-term organic growth. Our approach combines technical expertise with creative content strategies, ensuring your website not only ranks higher but also delivers an exceptional user experience that converts visitors into customers."
          },

          benefitsData: [
               [
                    "Technical SEO audit & fixes",
                    "Keyword research & strategy",
                    "On-page & off-page optimization",
                    "Link building campaigns",
               ],
               [
                    "Local SEO optimization",
                    "Content strategy & creation",
                    "Schema markup implementation",
                    "Core Web Vitals optimization",
               ],
          ],

          featuresData: [
               {
                    icon: AiOutlineSafety,
                    title: "White-Hat Only",
                    desc: "We use only ethical, Google-approved SEO practices for lasting results."
               },
               {
                    icon: FiLayers ,
                    title: "Full-Stack SEO",
                    desc: "Technical, on-page, off-page, and content — we cover every angle."
               },
               {
                    icon: FaChartBar ,
                    title: "Transparent Reporting",
                    desc: "Detailed monthly reports with rankings, traffic, and actionable insights."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "SEO Audit",
                    desc: "Comprehensive analysis of your website's SEO health, technical issues, and ranking opportunities."
               },
               {
                    id: "02",
                    title: "Keyword Strategy",
                    desc: "Research and target the most valuable keywords with high intent and reasonable competition."
               },
               {
                    id: "03",
                    title: "On & Off-Page SEO",
                    desc: "Optimize your site architecture, content, and build authority through quality backlinks."
               },
               {
                    id: "04",
                    title: "Track & Scale",
                    desc: "Monitor rankings, analyze traffic patterns, and continuously improve to stay ahead."
               }
          ],

          toolsData: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Moz", "Surfer SEO"],

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
export default SEO_Optimization;