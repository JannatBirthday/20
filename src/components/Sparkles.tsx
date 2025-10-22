import { motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";

const Sparkles = () => {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    size: 10 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{ left: sparkle.left, top: sparkle.top }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <SparklesIcon
            className="text-gold"
            size={sparkle.size}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;
