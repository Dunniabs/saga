import type { MotionProps } from "framer-motion";

export const opacityInViewVariants: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.3 },
};

export const imageLoadVariants: MotionProps = {
  variants: {
    loaded: {
      opacity: 1,
    },
    loading: {
      opacity: 0,
    },
  },
  transition: {
    duration: 0.25,
  },
};

export const pageWrapperTransitionVariants: MotionProps = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
