import { motion } from 'framer-motion';
import { FiZap, FiLock, FiLayers } from 'react-icons/fi';
import { services } from '../../../utils/cardsData'
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import ServiceLayout from '../ServiceLayout';

const WebDevelopment = () => {

     const serviceData = {
          badge: "Development",

          header: {
               title1: "Web",
               title2: "Development",
               subtitle: "From landing pages to full web applications, our development team creates fast, secure, and conversion-optimized digital experiences. We focus on clean code, modern frameworks, and user-centric design to deliver websites that not only look world-class but also perform exceptionally across all devices."
          },

          serviceImage: web_dev,
          serviceAlt: "web development",

          statsData: [
               { label: "Projects Completed", value: "50+" },
               { label: "Client Satisfaction", value: "95%" },
               { label: "Page Load Speed", value: "< 3s" },
               { label: "Happy Clients", value: "30+" },
          ],

          about: {
               des1: "We build high-performance websites that are stunning and drive results using the latest technologies.",
               des2: "From landing pages to full web applications, our development team creates fast, secure, and conversion-optimized digital experiences. We focus on clean code, modern frameworks, and user-centric design to deliver websites that not only look world-class but also perform exceptionally across all devices."
          },

          benefitsData: [
               [
                    "Performance optimization",
                    "CMS integration",
                    "E-commerce solutions",
                    "Ongoing maintenance & support"
               ],
               [
                    "Custom UI/UX Design",
                    "Responsive development",
                    "SEO Optimization",
                    "Clean Codebase"
               ]
          ],

          featuresData: [
               {
                    icon: FiZap,
                    title: "Lightning Fast",
                    desc: "We optimize every line of code to ensure your site loads in a blink."
               },
               {
                    icon: FiLock,
                    title: "Secure & Reliable",
                    desc: "Industry-standard security protocols to keep your data safe."
               },
               {
                    icon: FiLayers,
                    title: "Scalable Architecture",
                    desc: "Built with future growth in mind, easily add new features."
               }
          ],

          processData: [
               {
                    id: "01",
                    title: "Discovery & Planning",
                    desc: "Understand your goals, audience, technical requirements, and competitive landscape."
               },
               {
                    id: "02",
                    title: "Design & Prototype",
                    desc: "Create wireframes, visual designs, and interactive prototypes for approval."
               },
               {
                    id: "03",
                    title: "Development",
                    desc: "Build your website with clean code, modern frameworks, and best practices."
               },
               {
                    id: "04",
                    title: "Launch & Support",
                    desc: "Deploy, test, optimize, and provide ongoing maintenance and support."
               }
          ],

          toolsData: ["React", "Node.js", "MongoDB", "Tailwind", "Next.js", "Typescript"],

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

export default WebDevelopment;