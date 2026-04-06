import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import DigitalMarketing from "../pages/Home/Service/DigitalMarketing/DigitalMarketing";
import MotionGraphics from '../pages/Home/Service/MotionGraphics/MotionGraphics';
import SEO_Optimization from '../pages/Home/Service/SEO_Optimization/SEO_Optimization';
import SocialMediaDesign from "../pages/Home/Service/SocialMediaDesign/SocialMediaDesign";
import SocialMediaMarketing from "../pages/Home/Service/SocialMediaMarketing/SocialMediaMarketing";
import WebDevelopment from "../pages/Home/Service/WebDevelopment/WebDevelopment";
import YouTubeThumbnail from "../pages/Home/Service/YouTubeThumbnail/YouTubeThumbnail";
import YouTubeVideoSEO from "../pages/Home/Service/YouTubeVideoSEO/YouTubeVideoSEO";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout />,
          children: [
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: '/about',
                    element: <About />,
               },
               {
                    path: '/services',
                    element: <Services />,
               },
               {
                    path: '/portfolio',
                    element: <Portfolio />,
               },
               {
                    path: '/team',
                    element: <Team />,
               },
               {
                    path: '/contact',
                    element: <Contact />,
               },
               {
                    path: '/services/digital_marketing',
                    element: <DigitalMarketing />
               },
               {
                    path: '/services/motion_graphics',
                    element: <MotionGraphics />
               },
               {
                    path: '/services/seo_optimization',
                    element: <SEO_Optimization />
               },
               {
                    path: '/services/social_media_design',
                    element: <SocialMediaDesign />
               },
               {
                    path: '/services/social_media_marketing',
                    element: <SocialMediaMarketing />
               },
               {
                    path: '/services/web_development',
                    element: <WebDevelopment />
               },
               {
                    path: '/services/youtube_thumbnail_design',
                    element: <YouTubeThumbnail />
               },
               {
                    path: '/services/youtube_video_seo',
                    element: <YouTubeVideoSEO />
               },
          ]
     },
]);
