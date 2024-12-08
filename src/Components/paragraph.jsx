import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Paragraph = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.4", "0.7 start"],
  });

  const text = `We’re a team of dedicated structural and civil engineers committed to bringing visionary designs to life. Our approach blends precision with innovation, crafting solutions that meet each client’s specific goals while pushing the boundaries of engineering excellence. We deliver resilient, sustainable, and functional designs that stand the test of time. We believe in engineering solutions that not only meet today's needs but also anticipate challenges.`;

  const words = text.split(" ");

  return (
    <p
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="flex-wrap flex scroll-smooth"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="mr-3 mt-3 relative">
        <span className="absolute opacity-[0.2]">{children}</span>
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
    </span>
  );
};

export default Paragraph;
