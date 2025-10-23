import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles as SparklesIcon } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF69B4', '#BA55D3', '#87CEEB', '#FFD700'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF69B4', '#BA55D3', '#87CEEB', '#FFD700'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-800 via-pink-700 to-purple-900">
        <FloatingHearts />
        <Sparkles />

        {/* Floating emojis */}
        <div className="absolute top-4 left-4 md:left-1/4 animate-float pointer-events-none" style={{ zIndex: 1 }}>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="text-6xl emoji-clear">🎈</motion.div>
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-float pointer-events-none" style={{ zIndex: 1 }}>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} className="text-6xl emoji-clear">🎂</motion.div>
        </div>
        <div className="absolute top-4 right-4 md:right-1/4 animate-float pointer-events-none" style={{ zIndex: 1 }}>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2, ease: "easeInOut" }} className="text-6xl emoji-clear">🎈</motion.div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Sparkle Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mb-8"
          >
            <SparklesIcon className="w-20 h-20 mx-auto text-yellow-400 animate-sparkle" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-pacifico mb-6"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FF69B4, #BA55D3, #87CEEB, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 10px rgba(255,255,255,0.5)', // soft glow
            }}
          >
            🎉 Happy Birthday to the Most Amaazinggg Bestiee ever🥹❤️ 🎉
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 handwritten max-w-2xl mx-auto"
            style={{
              color: '#FFE4F7', // pastel pink
              textShadow: '0 0 5px rgba(255,255,255,0.3)', // subtle glow
            }}
          >
            Jyada khaas nhi bas next next karti jao sundar pari😭🌸💖
          </motion.p>

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-4 justify-center items-center"
          >
            <Button
              onClick={() => navigate("/memories")}
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all animate-float"
            >
              Next <Gift className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Welcome;
