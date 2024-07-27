
import { motion } from 'framer-motion';
//
const varWrapEnter = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

// ----------------------------------------------------------------------


export default function MotionContainer({ open, children, ...other }: any) {
  return (
    <motion.div initial={false} animate={open ? 'animate' : 'exit'} variants={varWrapEnter} {...other}>
      {children}
    </motion.div>
  );
}
