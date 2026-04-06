import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
     return (
          <div className="bg-secondary text-accent overflow-x-hidden">
               <Navbar></Navbar>
               <section className="min-h-[calc(100vh-460px)]">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;