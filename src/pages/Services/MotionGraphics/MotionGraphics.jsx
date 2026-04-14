import { services } from "../../../utils/cardsData";
import motion_graphics from '../../../../public/Images/services/motion-graphics.jpg'
import ServiceLayout from "../ServiceLayout";
import { AiOutlineSafety } from "react-icons/ai";
import { IoFlashOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";

const MotionGraphics = () => {

     const serviceData = {
          badge: "Design",

          header: {
               title1: "Motion",
               title2: "Graphics",
               subtitle: "From logo animations to explainer videos and social media motion content, we combine creativity with storytelling to create memorable visual experiences. Our animations are crafted to engage viewers, simplify complex ideas, and make your brand unforgettable across all platforms."
          },

          serviceImage: motion_graphics,
          serviceAlt: "motion graphics",

          statsData: [
               { label: "Animations Created", value: "100+" },
               { label: "Total Views", value: "500k+" },
               { label: "Client Satisfaction", value: "90%" },
               { label: "Avg. Delivery Time", value: "48h" },
          ],

          about: {
               des1: "Our motion graphics team creates stunning animations that bring your brand to life with creativity and storytelling.",

               des2: "From logo animations to explainer videos and social media motion content, we combine creativity with storytelling to create memorable visual experiences. Our animations are crafted to engage viewers, simplify complex ideas, and make your brand unforgettable across all platforms."
          },

          benefitsData: [
               [
                    "Logo animations",
                    "Social media animations",
                    "Brand intro/outro",
                    "Promotional video ads",
               ],
               [
                    "Explainer videos",
                    "Product showcases",
                    "Animated infographics",
                    "Event & conference visuals",
               ],
          ],

          featuresData: [
               {
                    icon: FiLayers ,
                    title: "Creative Excellence",
                    desc: "Our animations are crafted by experienced motion designers with a keen eye for detail."
               },
               {
                    icon: IoFlashOutline,
                    title: "Fast Delivery",
                    desc: "Quick turnaround without compromising on quality or creativity."
               },
               {
                    icon: AiOutlineSafety ,
                    title: "Full Ownership",
                    desc: "You get complete ownership and source files for all animations we create."
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

export default MotionGraphics;