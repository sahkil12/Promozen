import Achievements from "./Achievements/Achievements";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
     return (
          <div>
               <Hero></Hero>
               <Service></Service>
               <WhyChooseUs></WhyChooseUs>
               <Achievements></Achievements>
               <FeaturedProjects></FeaturedProjects>
          </div>
     );
};

export default Home;