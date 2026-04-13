import Achievements from "./Achievements/Achievements";
import CTA from "./CTA/CTA";
import FAQs from "./FAQs/FAQs";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Hero from "./Hero/Hero";
import HowWeWork from "./HowWeWork/HowWeWork";
import Service from "./Service/Service";
import TeamSection from "./TeamSection/TeamSection";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
     return (
          <div>
               <Hero />
               <Service />
               <WhyChooseUs />
               <Achievements />
               <FeaturedProjects />
               <HowWeWork />
               <Testimonials />
               <TeamSection />
               <FAQs></FAQs>
               <CTA></CTA>
          </div >
     );
};

export default Home;