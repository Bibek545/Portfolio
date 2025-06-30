import {React, useEffect, useRef} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';


const AnimationSection = ({children}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(()=> {
    if(isInView) {
        controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref = {ref}
      initial = "hidden"
      animate = {controls}
      transition={{duration: 0.8, ease: "easeOut"}}
      variants={{
        hidden: {opacity: 0, y: 50 },
        visible: {opacity: 1, y: 0}
      }}

    >
        {children}
    </motion.section>
  );


};

export default AnimationSection;