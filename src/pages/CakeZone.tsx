import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import confetti from "canvas-confetti";
import Sparkles from "@/components/Sparkles";

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
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-800 via-pink-700 to-purple-900">
        <Sparkles />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-pacifico mb-8"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FFD700, #FF69B4, #BA55D3, #87CEEB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255,255,255,0.4)',
            }}
          >
            Chal ab wish soch ek dimag mein🌸❤️ Jaldiii😼
          </motion.h1>

          {/* Cake & Candles */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: candlesLit ? [0, 1, -1, 0] : 0 }}
                transition={{ duration: 0.5, repeat: candlesLit ? Infinity : 0 }}
                className="text-9xl"
              >
                🎂
              </motion.div>

              <AnimatePresence>
                {candlesLit && [0, 0.1, 0.2].map((delay, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className={`absolute top-0 left-[${33 * idx + 1}%] -translate-x-1/2 -translate-y-8`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay }}
                      className={idx === 0 ? "text-4xl" : "text-3xl"}
                    >
                      🔥
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Instruction Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 handwritten"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FF69B4, #FFD700, #BA55D3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
            }}
          >
            Jaldiii se apni wish sochle aur blow candle pe click krde🥹🌸❤️😚
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="space-y-4">
            {candlesLit ? (
              <Button
                onClick={blowCandles}
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all animate-pulse"
              >
                Blow Candles 🎂
              </Button>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                <Button
                  onClick={() => navigate("/finale")}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all"
                >
                  Next <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Congratulatory Text */}
          {!candlesLit && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl mt-8 handwritten"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFD700, #FF69B4, #BA55D3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 15px rgba(255,255,255,0.4)',
              }}
            >
              💐🌸TERI WISH JARUR PURI HOGIIIII!!🥳🪅🎊
            </motion.p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CakeZone;
