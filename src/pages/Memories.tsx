import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const Memories = () => {
  const navigate = useNavigate();

  // Placeholder photos - you can replace these with actual images
  const photos = [
    { id: 1, placeholder: "📸 Memory 1" },
    { id: 2, placeholder: "📸 Memory 2" },
    { id: 3, placeholder: "📸 Memory 3" },
    { id: 4, placeholder: "📸 Memory 4" },
    { id: 5, placeholder: "📸 Memory 5" },
    { id: 6, placeholder: "📸 Memory 6" },
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
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center text-4xl overflow-hidden">
                  {photo.placeholder}
                  {/* Replace with actual images:
                  <img 
                    src="/path/to/image.jpg" 
                    alt="Memory"
                    className="w-full h-full object-cover"
                  />
                  */}
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
