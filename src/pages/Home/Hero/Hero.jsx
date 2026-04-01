import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0B0B0B] overflow-hidden flex items-center justify-center">
      {/* Background Grid - ঐ ইমেজের মতো গ্রিড ইফেক্ট দিতে */}
      <div className="absolute inset-0 z-0 opacity-30" 
        style={{ backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 lg:pt-0 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
           <span className="inline-block px-4 py-1.5 rounded-full bg-accent border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
             ● Premium Digital Agency
           </span>
           <h1 className="text-5xl lg:text-8xl font-bold text-white leading-[1.1]">
             We Grow Your <br />
             Brand <span className="text-primary italic">Digitally</span>
           </h1>
           <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
             We craft data-driven digital strategies that transform brands, drive conversions, and deliver measurable results for businesses worldwide.
           </p>
           {/* Buttons... */}
        </div>
        
        {/* Right side image section matching your reference */}
        <div className="flex-1 relative">
          <img src="/public/Promozen team.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;