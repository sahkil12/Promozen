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
                    title: "Discovery & Mapping",
                    desc: "We audit your current workflows and identify the tasks that waste the most time and money."
               },
               {
                    id: "02",
                    title: "Blueprint Design",
                    desc: "We design the automation architecture — triggers, AI agents, and every tool in the chain."
               },
               {
                    id: "03",
                    title: "Build & Integrate",
                    desc: "We build the workflows in n8n, Zapier, Langflow, or GoHighLevel and connect all your apps."
               },
               {
                    id: "04",
                    title: "Test, Launch & Optimize",
                    desc: "We test every path, launch your automations, then continuously monitor and improve them."
               }
          ],

          toolsData: ["n8n", "Zapier", "Langflow", "GoHighLevel", "OpenAI", "Make"],

          relatedServices: services.slice(2, 5)
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