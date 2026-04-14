import { services } from "../../../utils/cardsData";
import ServiceLayout from "../ServiceLayout";
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import { FiTarget } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";

const DigitalMarketing = () => {
     
      const serviceData = {
               badge: "Marketing",
     
               header: {
                    title1: "Digital",
                    title2: "Marketing",
                    subtitle: "We analyze your market, identify opportunities, and craft multi-channel campaigns that drive real business results. Our team stays ahead of trends, algorithm changes, and industry shifts to ensure your brand maintains a competitive edge. From paid advertising to email campaigns, we create comprehensive strategies that engage your audience at every touchpoint of their journey."
               },
     
               serviceImage: web_dev,
               serviceAlt: "digital marketing",
     
               statsData: [
                    { label: "Avg. Traffic Increase", value: "250%" },
                    { label: "Avg. ROAS", value: "2.0x" },
                    { label: "Lower CPA", value: "40%" },
                    { label: "Campaigns Managed", value: "100+" },
               ],
     
               about: {
                    des1: "Our digital marketing services combine creative excellence with data-driven strategy to deliver campaigns that not only look great but perform exceptionally.",

                    des2: "We analyze your market, identify opportunities, and craft multi-channel campaigns that drive real business results. Our team stays ahead of trends, algorithm changes, and industry shifts to ensure your brand maintains a competitive edge. From paid advertising to email campaigns, we create comprehensive strategies that engage your audience at every touchpoint of their journey."
               },
     
               benefitsData: [
                    [
                         "Multi-channel campaign management",
                         "Audience targeting & segmentation",
                         "A/B testing & experimentation",
                         "Competitor analysis & benchmarking"
                    ],
                    [
                         "Performance tracking & analytics",
                         "Conversion rate optimization",
                         "Monthly performance reports",
                         "Marketing funnel optimization"
                    ]
               ],
     
               featuresData: [
                    {
                         icon: FiTarget,
                         title: "Precision Targeting",
                         desc: "We reach your ideal customers using advanced audience segmentation."
                    },
                    {
                         icon: FaChartBar ,
                         title: "Data-Driven Decisions",
                         desc: "Every strategy is backed by analytics and real performance data."
                    },
                    {
                         icon: IoFlashOutline,
                         title: "Agile Optimization",
                         desc: "We continuously test and optimize for peak campaign performance."
                    }
               ],
     
               processData: [
                    {
                         id: "01",
                         title: "Audit & Research",
                         desc: "We analyze your current digital presence, audience behavior, and competitive landscape to find opportunities."
                    },
                    {
                         id: "02",
                         title: "Strategy Development",
                         desc: "We create a comprehensive digital marketing plan with clear KPIs tailored to your goals."
                    },
                    {
                         id: "03",
                         title: "Campaign Launch",
                         desc: "We execute campaigns across all relevant channels with precision targeting and creative excellence."
                    },
                    {
                         id: "04",
                         title: "Monitor & Optimize",
                         desc: "Continuous optimization based on real-time data, A/B tests, and performance insights."
                    }
               ],
     
               toolsData: ["Google Ads", "Meta Ads Manager", "Google Analytics", "HubSpot", "Mailchimp", "SEMrush"],
     
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
export default DigitalMarketing;