
const BgGridDesign = () => {
     return (
          < div
               className="absolute inset-0 z-0 opacity-10"
               style={{
                    backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
               }
               }
          ></div >
     );
};

export default BgGridDesign;