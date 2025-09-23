import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Circles from "./pages/Circles";
import Requests from "./pages/Requests";
import Wallet from "./pages/Wallet";
import Impact from "./pages/Impact";
import Rewards from "./pages/Rewards";
import CreateRequest from "./pages/CreateRequest";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Investors from "./pages/Investors";
import Features from "./pages/Features";
import Safety from "./pages/Safety";
import Pricing from "./pages/Pricing";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/signin" element={<Auth />} />
          <Route path="/auth/signup" element={<Auth />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/circles/:id" element={<div>Circle Details - Coming Soon</div>} />
          <Route path="/circles/join" element={<div>Join Circle - Coming Soon</div>} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/new" element={<CreateRequest />} />
          <Route path="/requests/:id" element={<div>Request Details - Coming Soon</div>} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/features" element={<Features />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/admin" element={<div>Admin - Coming Soon</div>} />
          <Route path="/legal/terms" element={<div>Terms - Coming Soon</div>} />
          <Route path="/legal/privacy" element={<div>Privacy - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
