import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "./pages/Welcome";
import Memories from "./pages/Memories";
import Wishes from "./pages/Wishes";
import CakeZone from "./pages/CakeZone";
import Finale from "./pages/Finale";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <MusicPlayer />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/cake" element={<CakeZone />} />
            <Route path="/finale" element={<Finale />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
