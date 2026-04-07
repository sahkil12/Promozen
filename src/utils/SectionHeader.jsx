
const SectionHeader = ({ header, title1, title2, subtitle, center }) => {
     return (
          <div className={`${center ? "text-center" : ""} mb-16`}>
               <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 block">
                    {header}
               </span>
               <h2 className="text-4xl poppins md:text-5xl font-bold text-base-100 mb-4">
                    {title1} <span className="text-primary">{title2}</span>
               </h2>
               <p className={`text-[#a1a1a1] max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""}`}>
                    {subtitle}
               </p>
          </div>
     );
};

export default SectionHeader;