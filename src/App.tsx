import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Circles from "./pages/Circles";
import Requests from "./pages/Requests";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/signin" element={<Auth />} />
          <Route path="/auth/signup" element={<Auth />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/circles/:id" element={<div>Circle Details - Coming Soon</div>} />
          <Route path="/circles/join" element={<div>Join Circle - Coming Soon</div>} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/new" element={<div>New Request - Coming Soon</div>} />
          <Route path="/requests/:id" element={<div>Request Details - Coming Soon</div>} />
          <Route path="/wallet" element={<div>Wallet - Coming Soon</div>} />
          <Route path="/impact" element={<div>Impact - Coming Soon</div>} />
          <Route path="/rewards" element={<div>Rewards - Coming Soon</div>} />
          <Route path="/profile" element={<div>Profile - Coming Soon</div>} />
          <Route path="/admin" element={<div>Admin - Coming Soon</div>} />
          <Route path="/legal/terms" element={<div>Terms - Coming Soon</div>} />
          <Route path="/legal/privacy" element={<div>Privacy - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
