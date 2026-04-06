import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import DigitalMarketing from "../pages/Services/DigitalMarketing/DigitalMarketing";
import MotionGraphics from '../pages/Services/MotionGraphics/MotionGraphics';
import SEO_Optimization from '../pages/Services/SEO_Optimization/SEO_Optimization';
import SocialMediaDesign from "../pages/Services/SocialMediaDesign/SocialMediaDesign";
import SocialMediaMarketing from "../pages/Services/SocialMediaMarketing/SocialMediaMarketing";
import WebDevelopment from "../pages/Services/WebDevelopment/WebDevelopment";
import YouTubeThumbnail from "../pages/Services/YouTubeThumbnail/YouTubeThumbnail";
import YouTubeVideoSEO from "../pages/Services/YouTubeVideoSEO/YouTubeVideoSEO";

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
