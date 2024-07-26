  "use client";
  import React, { useCallback, useEffect, useState } from "react";
  import { AnimatePresence, motion } from "framer-motion";

  const FlipWords = ({ words, duration = 3000, className }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
      const word = words[(words.indexOf(currentWord) + 1) % words.length];
      setCurrentWord(word);
      setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
      if (!isAnimating) {
        const timer = setTimeout(() => {
          startAnimation();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [isAnimating, duration, startAnimation]);

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className={`z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2 ${className}`}
          key={currentWord}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.08, duration: 0.1 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    );
  };

  export default FlipWords;
