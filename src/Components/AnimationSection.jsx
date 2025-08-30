import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const DEFAULT_DURATION = 0.8;

const VARIANTS = {
  fadeUp:    { hidden: { opacity: 0, y:  50 }, visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0 } },
  zoomIn:    { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimationSection({
  children,
  variantType = "fadeUp",
  className = "",
  delay = 0,
  duration = DEFAULT_DURATION,
  once = true,          // animate only the first time it enters view
  amount = 0.3,         // how much should be in view before triggering
  stagger = 0,          // > 0 enables child staggering
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else if (!once) controls.start("hidden");
  }, [isInView, once, controls]);

  const asContainer = stagger > 0;

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={
        asContainer
          ? {
              hidden: { opacity: 1 }, // keep container visible; children animate
              visible: {
                opacity: 1,
                transition: { staggerChildren: stagger, delayChildren: delay },
              },
            }
          : VARIANTS[variantType] ?? VARIANTS.fadeUp
      }
      transition={{ duration, ease: "easeOut", delay: asContainer ? 0 : delay }}
    >
      {asContainer
        ? (
          // wrap children so each gets item variant
          <div className="contents">
            {Array.isArray(children)
              ? children.map((child, i) => (
                  <motion.div key={i} variants={VARIANTS[variantType] ?? VARIANTS.fadeUp}>
                    {child}
                  </motion.div>
                ))
              : <motion.div variants={VARIANTS[variantType] ?? VARIANTS.fadeUp}>{children}</motion.div>}
          </div>
        )
        : children}
    </motion.section>
  );
}
