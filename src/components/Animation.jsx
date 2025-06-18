import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

function Animation() {
  const texts = [
    "ARARA TV WORLD WIDE",
    "Arara church was Based in Nekemte, East Wollega, Oromia, Ethiopia"
];

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {

        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        }
      } else {
        // Deleting
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-2xl font-bold bg-black/80 px-4 py-6 rounded-2xl inline-block max-w-xl"
    >
      <h1 className="text-blue-400 mb-2">
        {currentTextIndex === 0 && (
          <>
            {displayedText}
            <span className="animate-pulse">|</span>
          </>
        )}
      </h1>
      <h2 className="font-bold leading-tight">
        {currentTextIndex === 1 && (
          <>
            {displayedText}
            <span className="animate-pulse">|</span>
          </>
        )}
      </h2>
    </motion.span>
  );
}

export default Animation;
