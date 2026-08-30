import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedHeading
 * Renders an editorial heading where each word gracefully glides in from bottom
 * with a soft blur-to-sharp transition and staggered rhythmic timing.
 */
export function AnimatedHeading({
  text,
  className = '',
  style = {},
  tag = 'h2',
  delay = 0,
  staggerDelay = 0.06,
  highlightWord = null,
  highlightStyle = {}
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const Component = motion[tag] || motion.h2;

  return (
    <Component
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em', ...style }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, idx) => {
        const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={idx}
            variants={wordVariants}
            style={{
              display: 'inline-block',
              ...(isHighlight ? highlightStyle : {})
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
}

/**
 * AnimatedParagraph
 * Smoothly reveals paragraphs with blur fade and upward drift.
 */
export function AnimatedParagraph({
  children,
  className = '',
  style = {},
  delay = 0.2
}) {
  return (
    <motion.p
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.p>
  );
}

/**
 * AnimatedBadge
 * Smooth glowing pop-in for badges and metadata chips.
 */
export function AnimatedBadge({
  children,
  className = 'warm-badge',
  style = {},
  delay = 0.1
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.88, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, y: -2 }}
    >
      {children}
    </motion.div>
  );
}
