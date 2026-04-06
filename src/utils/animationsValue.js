 export const heroContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: .20
      },
    }
  }

 export const heroChildVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

export const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.09,
          },
     },
};

export const cardVariants = {
     hidden: { opacity: 0, y: 40 },
     show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeIn" } },
};

export const textContainerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.05,
          },
     },
};

export const textVariants = {
     hidden: { opacity: 0, x: -15 },
     show: { opacity: 1, x: 0, transition: { duration: 0.46, ease: "easeOut" } },
};

export const container = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: {
               staggerChildren: 0.12
          }
     }
};

export const item = {
     hidden: {
          opacity: 0,
          y: 25
     },
     show: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.5,
               ease: "easeOut"
          }
     }
};