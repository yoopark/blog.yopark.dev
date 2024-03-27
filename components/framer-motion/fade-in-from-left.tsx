'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const FadeInFromLeft = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 1, x: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromLeft;
