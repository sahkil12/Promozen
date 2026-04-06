import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HiChevronDown, HiBars3, HiXMark } from "react-icons/hi2";
import {
  FiTarget, FiSearch, FiShare2, FiPenTool,
  FiYoutube, FiTrendingUp, FiLayers, FiCode
} from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeClass = ({ isActive }) => `${isActive ? 'text-primary' : 'text-base-100/75'}`
  const desktopActiveClass = ({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary font-semibold' : 'text-base-100/85'}` 

  const serviceItems = [
    { title: "Digital Marketing", desc: "Strategic campaigns that drive ROI", icon: <FiTarget /> },
    { title: "Web Development", desc: "Modern, responsive websites", icon: <FiCode /> },
    { title: "Motion Graphics", desc: "Captivating brand animations", icon: <FiLayers /> },
    { title: "SEO Optimization", desc: "Dominate search rankings", icon: <FiSearch /> },
    { title: "Social Media Marketing", desc: "Build brand presence & community", icon: <FiShare2 /> },
    { title: "Social Media Design", desc: "Scroll-stopping creatives", icon: <FiPenTool /> },
    { title: "YouTube Thumbnail Design", desc: "High-CTR thumbnail design", icon: <FiYoutube /> },
    { title: "YouTube Video SEO", desc: "Optimize for visibility & growth", icon: <FiTrendingUp /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
        ? "bg-secondary/80 backdrop-blur-lg border-b border-base-100/5 py-3.5"
        : "bg-transparent py-5"
        }`}
    >
      <div className="lg:max-w-3/4 mx-auto px-5 lg:px-5 flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/Promozen-logo.png" className="w-10" alt="Logo" />
          <span className="text-base-100 font-bold text-2xl tracking-tight poppins">
            Promo<span className="text-primary">zen</span>
          </span>
        </Link>

        <div className="flex gap-10">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9 inter">
            <NavLink to="/" className={desktopActiveClass}>Home</NavLink>
            <NavLink to="/about" className={desktopActiveClass}>About</NavLink>

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-base-100/85 hover:text-primary transition-colors cursor-pointer">
                Services <HiChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-48 mt-4 w-[650px] bg-accent border border-base-100/10 rounded-xl p-6 shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          to={`/services/${item.title.toLowerCase().replace(/ /g, '_')}`}
                          className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all group/item"
                        >
                          <div className="text-primary text-xl transition-transform bg-primary/5 py-3 px-3 rounded-xl flex items-center ">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-base-100 font-semibold text-sm mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-base-100/5">
                      <Link to="/services" className="text-primary flex items-center gap-1 group text-xs font-bold hover:underline">View All Services <FaArrowRightLong /></Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/portfolio" className={desktopActiveClass}>Portfolio</NavLink>
            <NavLink to="/team" className={desktopActiveClass}>Team</NavLink>
            <NavLink to="/contact" className={desktopActiveClass}>Contact</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block bg-primary text-secondary px-6 py-2.5 rounded-lg font-bold inter text-sm transition-all hover:drop-shadow-[0_0_10px_rgba(242,201,76,0.1)] active:scale-95">
              Get Started
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-base-100/90 text-3xl cursor-pointer"
            >
              {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed inset-0 h-fit w-full z-[110] flex flex-col p-6 lg:hidden transition-all duration-400 inter
              ${scrolled
                ? "mt-16 bg-[#0B0B0B] backdrop-blur-3xl "
                : "mt-20 bg-[#0B0B0B]/60 backdrop-blur-xl "
              }`}
          >
            {/* Nav Links [Mark: Change] */}
            <div className="flex flex-col gap-8 text-lg font-medium overflow-y-auto pb-10">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={activeClass}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={activeClass}>About</NavLink>

              <div className="flex flex-col">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-base-100/75 w-full text-left"
                >
                  Services
                  <HiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-y-scroll flex flex-col gap-5 mt-5 ml-2 border-l border-base-100/10 pl-5"
                    >
                      {serviceItems?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 text-base-100/55 text-sm hover:text-primary transition-colors"
                        >
                          <span className="text-primary text-lg">{item.icon}</span>
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)} className={activeClass}>Portfolio</NavLink>
              <NavLink to="/team" onClick={() => setMobileMenuOpen(false)} className={activeClass}>Team</NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={activeClass}>Contact</NavLink>
              {/* Mobile CTA [Mark: Change] */}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-secondary text-center text-[15px] py-2.5 rounded-xl mt-3 font-bold tracking-wide active:scale-95 transition-transform">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;