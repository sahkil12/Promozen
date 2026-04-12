const IconBox = ({
     icon,
     size = "w-14 h-14",
     textSize = "text-2xl",
     className = "",
}) => {
     return (
          <div
               className={`
        ${size} ${textSize}
        rounded-2xl 
        border border-primary/15 
        flex items-center justify-center 
        text-primary 
        bg-primary/10 
        transition-all duration-300
        shadow-[0_0_15px_rgba(242,201,76,0.1)]

        group-hover:bg-primary/15 
        group-hover:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] 
        group-hover:border-primary/20 

        group-active:bg-primary/15 
        group-active:drop-shadow-[0_0_20px_rgba(242,201,76,0.5)] 
        group-active:border-primary/20

        ${className}
      `}
          >
               {icon}
          </div>
     );
};

export default IconBox;