'use client';

import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="w-full h-1 bg-green-500 fixed top-20 left-0 z-50 origin-left"
    />
  );
};

export default ScrollProgressBar;
