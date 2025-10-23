import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import memory1 from "@/assets/memories/memory1.jpg";
import memory2 from "@/assets/memories/memory2.jpg";
import memory3 from "@/assets/memories/memory3.jpg";
import memory4 from "@/assets/memories/memory4.jpg";

const Memories = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { id: 1, src: memory1, alt: "🥹" },
    { id: 2, src: memory2, alt: "raat wale ullu hai ham😔" },
    { id: 3, src: memory3, alt: "Python talks and laughs" },
    { id: 4, src: memory4, alt: "Jab we met😭🌸" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 px-4 relative overflow-hidden bg-gradient-to-b from-purple-800 via-pink-700 to-purple-900">
        <FloatingHearts />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-pacifico text-center mb-6"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FF69B4, #BA55D3, #FFD700, #87CEEB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(255,255,255,0.5)',
            }}
          >
            Aur bhi achhi achhi chats hai par mauke par yahi mili🤣❤️
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p
              className="text-lg md:text-xl text-center handwritten leading-relaxed"
              style={{
                color: '#FFE4F7',
                textShadow: '0 0 5px rgba(255,255,255,0.3)',
              }}
            >
              Dekh 😭 , btw socha nhi tha merko firse telegram pe koi dost milegi itni pyari
              tu toh pyar ke sath sath sundar bhi hai🏵😼😚
            </p>
          </motion.div>

          {/* Photo Grid */}
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
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
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

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate("/wishes")}
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Memories;
