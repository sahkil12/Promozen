import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HiChevronDown, HiBars3, HiXMark } from "react-icons/hi2";
import { 
  FiTarget, FiSearch, FiShare2, FiPenTool, 
  FiYoutube, FiTrendingUp, FiLayers, FiCode 
} from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { title: "Digital Marketing", desc: "Strategic campaigns that drive ROI", icon: <FiTarget /> },
    { title: "SEO Optimization", desc: "Dominate search rankings", icon: <FiSearch /> },
    { title: "Social Media Marketing", desc: "Build brand presence & community", icon: <FiShare2 /> },
    { title: "Social Media Design", desc: "Scroll-stopping creatives", icon: <FiPenTool /> },
    { title: "YouTube Thumbnail Design", desc: "High-CTR thumbnail design", icon: <FiYoutube /> },
    { title: "YouTube Video SEO", desc: "Optimize for visibility & growth", icon: <FiTrendingUp /> },
    { title: "Motion Graphics", desc: "Captivating brand animations", icon: <FiLayers /> },
    { title: "Web Development", desc: "Modern, responsive websites", icon: <FiCode /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-secondary/80 backdrop-blur-lg border-b border-white/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black text-secondary text-xl italic group-hover:scale-110 transition-transform">
            P
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            Promo<span className="text-primary">zen</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-white'}`}>Home</NavLink>
          <NavLink to="/about" className="text-sm font-medium text-white hover:text-primary transition-colors">About</NavLink>
          
          {/* Services Dropdown Trigger */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-primary transition-colors cursor-pointer">
              Services <HiChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-48 mt-4 w-[600px] bg-accent border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {serviceItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`}
                        className="flex gap-4 p-2 rounded-lg hover:bg-white/5 transition-all group/item"
                      >
                        <div className="text-primary text-2xl mt-1 group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link to="/services" className="text-primary text-xs font-bold hover:underline">View All Services →</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/portfolio" className="text-sm font-medium text-white hover:text-primary transition-colors">Portfolio</NavLink>
          <NavLink to="/team" className="text-sm font-medium text-white hover:text-primary transition-colors">Team</NavLink>
          <NavLink to="/contact" className="text-sm font-medium text-white hover:text-primary transition-colors">Contact</NavLink>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block bg-primary hover:bg-yellow-500 text-secondary px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(242,201,76,0.3)] active:scale-95">
            Get Started
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-3xl cursor-pointer"
          >
            {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 h-screen w-full bg-secondary z-[110] flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-white font-bold text-2xl">Promo<span className="text-primary">zen</span></span>
              <HiXMark className="text-white text-4xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
            </div>

            <div className="flex flex-col gap-6 text-xl font-medium">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">About</Link>
              
              <div className="border-y border-white/10 py-4">
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Our Services</p>
                <div className="grid grid-cols-1 gap-4 max-h-[300px] overflow-y-auto pr-2">
                  {serviceItems.map((item, idx) => (
                    <Link key={idx} to="/" className="flex items-center gap-3 text-white text-base">
                      <span className="text-primary">{item.icon}</span> {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-secondary text-center py-4 rounded-xl mt-4 font-bold">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;