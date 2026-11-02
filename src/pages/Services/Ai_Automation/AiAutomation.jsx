import { services } from "../../../utils/cardsData";
import ai_automation from '../../../../public/Images/services/ai-automation.jpg'
import ServiceLayout from "../ServiceLayout";
import { AiOutlineSafety } from "react-icons/ai";
import { IoFlashOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";

const AiAutomation = () => {

     const serviceData = {
          badge: "Automation",

          header: {
               title1: "AI",
               title2: "Automation",
               subtitle: "From lead capture and instant follow-up to AI chatbots, CRM automation, and internal dashboards, we map your business processes and rebuild them as smart, self-running workflows. Our team combines automation platforms like n8n and Zapier with AI frameworks like Langflow and all-in-one platforms like GoHighLevel to create systems that respond instantly, work 24/7, and free your team to focus on growth."
          },

          serviceImage: ai_automation,
          serviceAlt: "ai automation",

          statsData: [
               { label: "Hours Saved Monthly", value: "40+" },
               { label: "Less Manual Work", value: "60%" },
               { label: "Automations Built", value: "40+" },
               { label: "Faster Lead Response", value: "3x" },
          ],

          about: {
               des1: "We design and build AI-powered automations and agents using n8n, Zapier, Langflow, and GoHighLevel that connect your tools and run your business on autopilot.",

               des2: "From lead capture and instant follow-up to AI chatbots, CRM automation, and internal dashboards, we map your business processes and rebuild them as smart, self-running workflows. Our team combines automation platforms like n8n and Zapier with AI frameworks like Langflow and all-in-one platforms like GoHighLevel to create systems that respond instantly, work 24/7, and free your team to focus on growth."
          },

          benefitsData: [
               [
                    "Custom workflow automation",
                    "CRM & pipeline automation (GoHighLevel)",
                    "Appointment booking automation",
                    "App & API integrations",
               ],
               [
                    "AI agents & chatbots",
                    "Lead capture & instant follow-up",
                    "Email, SMS & WhatsApp sequences",
                    "Reporting dashboards & alerts",
               ],
          ],

          featuresData: [
               {
                    icon:  IoFlashOutline,
                    title: "Business-First Design",
                    desc: "We automate around your real business processes — not cookie-cutter templates."
               },
               {
                    icon: FiLayers,
                    title: "Platform Experts",
                    desc: "Deep hands-on expertise in n8n, Zapier, Langflow, and GoHighLevel."
               },
               {
                    icon: AiOutlineSafety ,
                    title: "Reliable & Monitored",
                    desc: "Every automation is tested, monitored, and maintained so it never breaks silently."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "Creative Brief",
                    desc: "Define the vision, style, objectives, and key messages for your animation project."
               },
               {
                    id: "02",
                    title: "Storyboarding",
                    desc: "Create detailed storyboards, motion concepts, and style frames for approval."
               },
               {
                    id: "03",
                    title: "Animation Production",
                    desc: "Bring storyboards to life with professional 2D/3D animation and sound design."
               },
               {
                    id: "04",
                    title: "Review & Deliver",
                    desc: "Refine based on feedback and deliver in all required formats and resolutions."
               }
          ],

          toolsData: ["After Effects", "Cinema 4D", "Premiere Pro", "Blender", "Lottie", "DaVinci Resolve"],

          relatedServices: services.slice(1, 4)
     }


     return (
          <div>
               <ServiceLayout
                    data={serviceData}
               />
          </div>
     );
};

export default AiAutomation;