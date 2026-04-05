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
