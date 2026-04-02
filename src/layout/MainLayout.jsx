import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
     return (
          <div className="bg-base-200 text-accent overflow-x-hidden">
               <Navbar></Navbar>
               <section className="min-h-[calc(100vh-743px)]">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;