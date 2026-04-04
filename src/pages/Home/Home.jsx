import Hero from "./Hero/Hero";
import Service from "./Service/Service";

const Home = () => {
     return (
          <div>
               <Hero></Hero>
               <Service></Service>
               <div className="border bg-secondary h-screen"></div>
          </div>
     );
};

export default Home;