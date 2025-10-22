import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import confetti from "canvas-confetti";

const CakeZone = () => {
  const navigate = useNavigate();
  const [candlesLit, setCandlesLit] = useState(true);

  const blowCandles = () => {
    setCandlesLit(false);
    
    // Massive confetti explosion!
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#FF69B4', '#BA55D3', '#87CEEB', '#FFD700'],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#FF69B4', '#BA55D3', '#87CEEB', '#FFD700'],
      });
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 100,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#FF69B4', '#BA55D3', '#87CEEB', '#FFD700'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Play sound effect (optional)
    const audio = new Audio();
    // You can add a pop sound here if you have one
    // audio.src = "/sounds/pop.mp3";
    // audio.play();
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-pacifico mb-8 text-gradient-magical glow-text"
          >
            Make a Wish! 🎂
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              {/* Birthday Cake */}
              <motion.div
                animate={{ 
                  rotate: candlesLit ? [0, 1, -1, 0] : 0
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: candlesLit ? Infinity : 0
                }}
                className="text-9xl"
              >
                🎂
              </motion.div>
              
              {/* Candles with flames */}
              <AnimatePresence>
                {candlesLit && (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: Infinity
                        }}
                        className="text-4xl"
                      >
                        🔥
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-2 left-1/3 -translate-x-1/2 -translate-y-8"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: Infinity,
                          delay: 0.1
                        }}
                        className="text-3xl"
                      >
                        🔥
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-2 left-2/3 -translate-x-1/2 -translate-y-8"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: Infinity,
                          delay: 0.2
                        }}
                        className="text-3xl"
                      >
                        🔥
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 handwritten"
          >
            Make a wish, bestie 💫 — because today, the universe celebrates YOU!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            {candlesLit ? (
              <Button
                onClick={blowCandles}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse"
              >
                Blow Candles 🎂
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <Button
                  onClick={() => navigate("/finale")}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Next <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </motion.div>

          {!candlesLit && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl mt-8 handwritten text-primary"
            >
              ✨ Your wish is on its way to the stars! ✨
            </motion.p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CakeZone;
