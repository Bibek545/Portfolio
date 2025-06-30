import {React, useEffect, useRef} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';


const AnimationSection = ({children, variantType = "fadeUp"}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  const variants = {
    fadeUp: {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    },
        fadeLeft: {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    },    zoomIn: {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1},
    },
  }

  useEffect(()=> {
    if(isInView) {
        controls.start("visible");
    } else {
        controls.start("hidden")
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref = {ref}
      initial = "hidden"
      animate = {controls}
      transition={{duration: 0.8, ease: "easeOut"}}
      variants={variants[variantType]}

    >
        {children}
    </motion.section>
  );


};

export default AnimationSection;