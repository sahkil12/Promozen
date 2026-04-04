import { FiArrowUpRight, FiPlayCircle } from "react-icons/fi";
import { motion } from 'framer-motion';

const Hero = () => {

  const heroContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: .20
      },
    }
  }

  const heroChildVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0B0B0B] overflow-hidden flex items-center justify-center pt-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      {/* Subtle Glow */}
      <div className="absolute top-1/4 md:top-1/10 -right-20 md:right-20 w-[550px] h-96 bg-primary/10 blur-[110px] rounded-full"></div>

      <div className="absolute bottom-1/4 left-20 lg:bottom-1/6 lg:left-220 w-[300px] h-80 bg-primary/10 blur-[110px] rounded-full hidden md:flex"></div>

      <div className="relative z-10 w-full xl:max-w-[75%] mx-auto px-3 md:px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 inter pt-10 md:pt-0">
        {/* Left Side: Content */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
          className="flex-6 space-y-8 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            variants={heroChildVariants}
            className="flex items-center justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Premium Digital Agency
            </span>
          </motion.div>
          {/* Heading */}
          <motion.h1
            variants={heroChildVariants}
            className="text-5xl poppins md:text-6xl lg:text-7xl font-bold text-white leading-tight lg:leading-[1.1]">
            We Grow Your <br />
            Brand <span className="text-primary drop-shadow-[0_0_15px_rgba(242,201,76,0.3)]">Digitally</span>
          </motion.h1>
          {/* Description */}
          <motion.p
            variants={heroChildVariants}
            className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We craft data-driven digital strategies that transform brands, drive conversions, and deliver measurable results for businesses worldwide.
          </motion.p>
          {/* Action Buttons */}
          <motion.div
            variants={heroChildVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <button className="btn btn-primary h-auto py-4 px-8 rounded-xl font-bold text-base border-none hover:scale-105 transition-transform flex items-center gap-2 group text-base-200">
              Start a Project <FiArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="btn btn-ghost h-auto py-4 px-8 rounded-xl font-bold text-base text-white border border-white/10 hover:bg-white/5 flex items-center gap-2">
              <FiPlayCircle size={22} className="text-primary animate-pulse" /> View Our Work
            </button>
          </motion.div>
          {/* Stats Row */}
          <motion.div
            variants={heroChildVariants}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="30+" label="Clients Served" />
            <StatItem number="100+" label="Projects Delivered" />
            <StatItem number="98%" label="Client Satisfaction" />
            <StatItem number="2025" label="Founded" />
          </motion.div>
        </motion.div>
        {/* Right Side: Image Card with Glassmorphism */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-5 relative group">
          <div className="relative p-2 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-sm shadow-2xl hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.1)] transition-all duration-300 hover:-translate-y-1.5">
            <img
              src="/Promozen team.jpeg"
              className="rounded-[1.8rem] w-full h-[560px] object-cover object-top"
              alt="Promozen Team"
            />
            {/* Team Info Overlay */}
            <div className="absolute bottom-4 left-6 right-6 p-5 rounded-2xl bg-secondary/60 backdrop-blur-md border border-white/10 flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              <div>
                <p className="text-white font-bold text-sm">The Promozen Team</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Ready to grow your brand</p>
              </div>
            </div>
          </div>
          {/* Background decorative element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/15 
          rounded-[2rem] transition-all group-hover:-bottom-4 group-hover:-right-4"></div>
        </motion.div>
      </div>
    </section>
  );
};
// Reusable Stat Component
const StatItem = ({ number, label }) => (
  <div className="text-center lg:text-left space-y-1">
    <h3 className="text-2xl lg:text-3xl font-black text-primary drop-shadow-[0_0_50px_rgba(242,201,76,0.3)]">{number}</h3>
    <p className="text-gray-500 text-[11px] uppercase tracking-widest font-semibold">{label}</p>
  </div>
);

export default Hero;