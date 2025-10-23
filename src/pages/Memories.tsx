import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";
import memory1 from "@/assets/memories/memory1.jpg";
import memory2 from "@/assets/memories/memory2.jpg";
import memory3 from "@/assets/memories/memory3.jpg";
import memory4 from "@/assets/memories/memory4.jpg";

const Memories = () => {
  const navigate = useNavigate();

  const photos = [
    { id: 1, src: memory1, alt: "Our fun chat memories" },
    { id: 2, src: memory2, alt: "Late night conversations" },
    { id: 3, src: memory3, alt: "Python talks and laughs" },
    { id: 4, src: memory4, alt: "When we first met" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 px-4 relative overflow-hidden">
        <FloatingHearts />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-pacifico text-center mb-6 text-gradient-magical glow-text"
          >
            Our Beautiful Memories 📸
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-center handwritten leading-relaxed">
              Every memory with you shines brighter than any star. From all our laughs to late-night talks, 
              you've been my constant source of joy. You're not just my bestie — you're a part of my heart forever 💕
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative group"
              >
                <div className="aspect-square rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 
                  }}
                >
                  <div className="absolute top-2 right-2 text-2xl">✨</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate("/wishes")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Memories;
