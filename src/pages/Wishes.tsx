import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";
import Sparkles from "@/components/Sparkles";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";

const Wishes = () => {
  const navigate = useNavigate();
  const [currentWish, setCurrentWish] = useState(0);

  const wishes = [
    "Allah kre tera ye saal teri smile ki tarah sundar jaye🥹🏵❤️✨",
    "Meri pyari bestieeee You deserve alottt.. Sad na hua kr chhoti chhoti baato pe🌟",
    "Thank you for beingg my bestf anddd I will be always here for you no mattee what🌸💖",
  ];

  useEffect(() => {
    if (currentWish < wishes.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWish(prev => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentWish, wishes.length]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Sparkles />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-pacifico mb-12 text-gradient-magical glow-text"
          >
            My Wishes for You 💫
          </motion.h1>

          <div className="space-y-8 mb-12 min-h-[200px] flex flex-col justify-center">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentWish >= index ? 1 : 0,
                  y: currentWish >= index ? 0 : 20
                }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl handwritten leading-relaxed text-foreground/90">
                  {wish}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", bounce: 0.5 }}
            className="mb-12"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-8xl inline-block"
            >
              🎂
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <Button
              onClick={() => navigate("/cake")}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-float"
            >
              Next <Cake className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Floating hearts around */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-20 left-10 text-4xl"
          >
            💖
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-32 right-10 text-4xl"
          >
            💗
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-32 left-20 text-4xl"
          >
            💝
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Wishes;
