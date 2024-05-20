'use client';

import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-20 z-50 h-1 w-full origin-left bg-green-500"
    />
  );
};

export default ScrollProgressBar;
