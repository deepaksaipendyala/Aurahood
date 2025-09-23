import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Home, 
  Users, 
  HelpCircle, 
  Wallet, 
  TrendingUp, 
  Gift, 
  User, 
  Settings, 
  LogOut,
  Shield,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUser();
  
  const currentPath = location.pathname;
  
  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/circles", label: "Circles", icon: Users },
    { href: "/requests", label: "Requests", icon: HelpCircle },
    { href: "/wallet", label: "Wallet", icon: Wallet },
    { href: "/impact", label: "Impact", icon: TrendingUp },
    { href: "/rewards", label: "Rewards", icon: Gift },
  ];

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Aurahood
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/auth/signin">Sign In</Link>
              </Button>
              <Button variant="default" className="bg-gradient-hero hover:opacity-90" asChild>
                <Link to="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
              Aurahood
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.href;
              
              return (
                <Button
                  key={link.href}
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  asChild
                  className="transition-smooth"
                >
                  <Link to={link.href} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Aura Points Badge */}
            <div className="hidden sm:flex items-center space-x-1 bg-gradient-aura rounded-full px-3 py-1">
              <Wallet className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">{user?.auraPoints?.toLocaleString()}</span>
            </div>

            {/* Admin Access */}
            {user?.roles.includes("admin") && (
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin" className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Admin</span>
                </Link>
              </Button>
            )}

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.avatar || ""} alt={user?.name || ""} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name?.split(' ').map(n => n[0]).join('') || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        Trust: {user?.trustScore}⭐
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {user?.roles[0]}
                      </Badge>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPath === link.href;
                
                return (
                  <Button
                    key={link.href}
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to={link.href} className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  </Button>
                );
              })}
              
              {/* Mobile Aura Points */}
              <div className="flex items-center justify-center space-x-2 py-3">
                <div className="bg-gradient-aura rounded-full px-4 py-2 flex items-center space-x-2">
                  <Wallet className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold">
                    {user?.auraPoints?.toLocaleString()} Aura Points
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;