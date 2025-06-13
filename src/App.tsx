import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Kids from "./pages/Kids";
import Categories from "./pages/Categories";
import Challenges from "./pages/Challenges";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import CreateGame from "./pages/CreateGame";
import GameBoard from "./pages/GameBoard";
import RingGame from "./pages/RingGame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/help" element={<Help />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/game-board" element={<GameBoard />} />
          <Route path="/ring-game" element={<RingGame />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
