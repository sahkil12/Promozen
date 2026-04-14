import { services } from "../../../utils/cardsData";
import web_dev from '../../../../public/Images/services/web_devlopment.webp'
import ServiceLayout from "../ServiceLayout";
import { IoFlashOutline } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const YouTubeVideoSEO = () => {

     const serviceData = {
          badge: "SEO",

          header: {
               title1: "YouTube",
               title2: "Video SEO",
               subtitle: "We convert watchers into loyal subscribers through strategic optimization of every element — from titles and descriptions to tags, playlists, and end screens. Our comprehensive approach covers both on-video and channel-level optimization for maximum growth."
          },

          serviceImage: web_dev,
          serviceAlt: "YouTube Video SEO",

          statsData: [
               { label: "Avg. View Increase", value: "200%" },
               { label: "Subscribers Generated", value: "10K+" },
               { label: "Channels Optimized", value: "30+" },
               { label: "Avg. Video Ranking", value: "Top 10" },
          ],

          about: {
               des1: "YouTube is the world's second-largest search engine. Our YouTube SEO services ensure your videos rank higher and reach more viewers.",

               des2: "We convert watchers into loyal subscribers through strategic optimization of every element — from titles and descriptions to tags, playlists, and end screens. Our comprehensive approach covers both on-video and channel-level optimization for maximum growth."
          },

          benefitsData: [
               [
                    "Video keyword research",
                    "Tag & category strategy",
                    "End screen & card strategy",
                    "Competitor channel analysis",
               ],
               [
                    "Title & description optimization",
                    "Playlist optimization",
                    "Channel SEO audit",
                    "YouTube Analytics interpretation",
               ],
          ],

          featuresData: [
               {
                    icon: FaChartBar,
                    title: "Algorithm Expertise",
                    desc: "We understand YouTube's algorithm and how to work with it."
               },
               {
                    icon: FiTarget,
                    title: "Search Intent Focus",
                    desc: "We target keywords with high intent for maximum viewer engagement."
               },
               {
                    icon: IoFlashOutline,
                    title: "Fast Implementation",
                    desc: "Quick optimization turnaround so your content starts ranking sooner."
               },

          ],

          processData: [
               {
                    id: "01",
                    title: "Channel Audit",
                    desc: "Analyze your channel's current SEO performance, metadata gaps, and growth opportunities."
               },
               {
                    id: "02",
                    title: "Keyword Research",
                    desc: "Identify high-value, low-competition keywords for your niche and content strategy."
               },
               {
                    id: "03",
                    title: "Video Optimization",
                    desc: "Optimize titles, descriptions, tags, thumbnails, and metadata for every video."
               },
               {
                    id: "04",
                    title: "Growth Tracking",
                    desc: "Monitor views, rankings, watch time, and subscriber growth with regular reports."
               }
          ],

          toolsData: ["TubeBuddy", "VidIQ", "Ahrefs", "Google Trends", "YouTube Studio", "Keyword Tool"],

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

export default YouTubeVideoSEO;