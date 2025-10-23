import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import Sparkles from "@/components/Sparkles";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const Finale = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-900 to-pink-900">
        <Sparkles />
        <FloatingHearts />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 1 }}
            className="mb-8"
          >
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,105,180,0.5)",
                  "0 0 40px rgba(186,85,211,0.5)",
                  "0 0 20px rgba(255,105,180,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl md:text-7xl font-pacifico text-white mb-6"
            >
              YOU'LL ALWAYS BE MY FAVOURITE BESTIE 😘❤️
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl handwritten leading-relaxed max-w-3xl mx-auto text-white">
              PYARI JANNAT🌸💐 HAPPY BRDAY ONCE AGAIN, I KNW DUSRA DIN CHADH GYA PAR KYA HI KRU BTATI TU HAI NHI😭
              KHAIR I WISH TERI YE SAAL BOHT HI ACHHA JAYE TU KHUSH HO TU KAMYAAB HO TUJHE BOHT TARAKKI MILE AUR 
              I HOPE HAM DONO BHI AISE HI BESTF BANKE RAHE AAGE BHI💐🌸 ANYWAYS MAI HMESHA TERE SATH RHUNGA NO MATTER
              WHAT HAPPENS OK?😚🏵 KABHI BHI KHUDKO AKELA MT SAMJHNA KIUKI I'M ALWAYS HERE!! AND, DHYAN RAKHA KARO APNA🌸❤️
            </p>
          </motion.div>

          {/* Decorative butterflies */}
          <div className="absolute top-4 left-4 animate-float pointer-events-none" style={{ zIndex: 1 }}>
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl"
            >
              🦋
            </motion.div>
          </div>
          <div className="absolute top-4 right-4 animate-float pointer-events-none" style={{ zIndex: 1 }}>
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, -20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="text-4xl"
            >
              🦋
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-6"
          >
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Replay from Start
            </Button>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-lg handwritten text-white">
                Made with love by <span className="text-pink-400 font-semibold">Ansh</span> 💕
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block ml-2"
                >
                  ❤️
                </motion.span>
              </p>
            </motion.div>
          </motion.div>

          {/* Floating quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <p className="text-lg handwritten text-white italic border-l-4 border-pink-400 pl-4">
              "Best friends are like stars — even if you can't always see them, you know they're always there." ⭐
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Finale;
