import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AtomicStructure from "./pages/AtomicStructure";
import Waves from "./pages/Waves";
import Optics from "./pages/Optics";
import Triangles from "./pages/Triangles";
import Fluids from "./pages/Fluids"; 
import DocumentationPage from "./pages/Documentation";
import TutorialsPage from "./pages/Tutorials"; // New: Import Tutorials page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/atomic-structure" element={<AtomicStructure />} />
          <Route path="/waves" element={<Waves />} />
          <Route path="/optics" element={<Optics />} />
          <Route path="/triangles" element={<Triangles />} />
          <Route path="/fluids" element={<Fluids />} /> 
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} /> {/* New: Add Tutorials route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;