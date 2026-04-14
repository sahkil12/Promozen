
import { services } from "../../../utils/cardsData";
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import ServiceLayout from "../ServiceLayout";

const SocialMediaDesign = () => {

     const serviceData = {
          badge: "",

          header: {
               title1: "",
               title2: "",
               subtitle: ""
          },

          serviceImage: web_dev,
          serviceAlt: "",

          statsData: [
               { label: "", value: "" },
               { label: "", value: "" },
               { label: "", value: "" },
               { label: "", value: "" },
          ],

          about: {
               des1: "",

               des2: ""
          },

          benefitsData: [
               [
                    "",
                    "",
                    "",
                    "",
               ],
               [
                    "",
                    "",
                    "",
                    "",
               ],
          ],

          featuresData: [
               {
                    icon: '',
                    title: "",
                    desc: ""
               },
               {
                    icon: '',
                    title: "",
                    desc: ""
               },
               {
                    icon: '',
                    title: "",
                    desc: ""
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "",
                    desc: ""
               },
               {
                    id: "02",
                    title: "",
                    desc: ""
               },
               {
                    id: "03",
                    title: "",
                    desc: ""
               },
               {
                    id: "04",
                    title: "",
                    desc: ""
               }
          ],

          toolsData: ["", "", "", "", "", ""],

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
export default SocialMediaDesign;