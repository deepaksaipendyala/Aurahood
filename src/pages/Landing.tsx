import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Shield, 
  Home, 
  Calendar, 
  Heart, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  const features = [
    {
      icon: Car,
      title: "Safe Rides",
      description: "Get rides from trusted community members with verified profiles and ratings."
    },
    {
      icon: Shield,
      title: "Safety First", 
      description: "Live tracking, emergency contacts, and thorough background checks for peace of mind."
    },
    {
      icon: Home,
      title: "Home Help",
      description: "Find reliable help for daily tasks - from grocery runs to tech support."
    },
    {
      icon: Calendar,
      title: "Event Companions",
      description: "Never go alone to events. Find companions for concerts, movies, and social gatherings."
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Compassionate companions for seniors who need assistance and social connection."
    },
    {
      icon: Zap,
      title: "Aura Points",
      description: "Earn points for helping others, redeem for rewards, and build your community reputation."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Join Your Circle",
      description: "Connect with your campus, neighborhood, or organization community.",
      icon: Users
    },
    {
      step: "2", 
      title: "Request or Offer Help",
      description: "Post what you need or browse requests to help others in your area.",
      icon: Heart
    },
    {
      step: "3",
      title: "Build Trust & Earn Points",
      description: "Complete requests safely, earn Aura Points, and build your community reputation.",
      icon: Award
    }
  ];

  const stats = [
    { value: "50,000+", label: "Community Members" },
    { value: "250,000+", label: "Successful Connections" },
    { value: "98%", label: "Safety Rating" },
    { value: "4.9/5", label: "User Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 pt-16 pb-10 sm:pt-24 sm:pb-16">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 w-full">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-aura text-white">
                  🌟 Building Stronger Communities Together
                </Badge>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Trusted
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Community </span>
                  Companion Network
                </h1>
                <p className="text-base xs:text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Connect with verified community members for safe rides, home help, companionship, and more. 
                  Earn Aura Points by helping others and building meaningful connections.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-smooth w-full sm:w-auto" asChild>
                  <Link
                    to="/auth/signup"
                    className="flex items-center justify-center space-x-2 w-full sm:w-auto text-lg sm:text-xl py-4 px-8 bg-gradient-hero text-white font-bold rounded-2xl shadow-md hover:opacity-90 transition-all duration-200"
                  >
                    <span className="text-xl sm:text-2xl">Get Started Free</span>
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link
                    to="/circles/join"
                    className="flex items-center justify-center w-full sm:w-auto text-lg sm:text-xl py-4 px-8 bg-gradient-hero text-white font-bold rounded-2xl shadow-md hover:opacity-90 transition-all duration-200"
                  >
                    Join Your Circle
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center min-w-[120px]">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full flex justify-center mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Community members helping each other" 
                className="relative z-10 w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need for Safe Community Connections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From transportation to companionship, Aurahood makes it easy to help and be helped by your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-smooth border-0 bg-gradient-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Aurahood Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, safe, and rewarding. Start building connections in your community today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-bounce">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Safety is Our Priority</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every community member is verified, tracked, and rated. We use advanced safety features 
              to ensure every interaction is secure and trustworthy.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                "Verified Profiles",
                "Live Tracking", 
                "Emergency Contacts",
                "Community Ratings"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-4 shadow-soft">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Your Community?</h2>
            <p className="text-xl opacity-90 mb-8">
              Start building meaningful connections, helping your neighbors, and earning Aura Points today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                {/* Use a custom-styled Link for white background and purple text */}
                <Link
                  to="/auth/signup"
                  className="inline-flex items-center justify-center w-full sm:w-auto text-center text-lg sm:text-xl py-4 px-8 border-2 border-white text-white font-semibold rounded-2xl bg-transparent hover:bg-white/10 hover:shadow-md transition-colors duration-200 gap-2"
                >
                  <span className="text-lg sm:text-xl">Create Your Account</span>
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-colors duration-200" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                {/* Use a custom-styled Link for white background and purple text */}
                <Link
                  to="/circles/join"
                  className="inline-flex items-center justify-center w-full sm:w-auto text-center text-lg sm:text-xl py-4 px-8 bg-gradient-hero text-white font-bold rounded-2xl shadow-md hover:opacity-90 transition-all duration-200"
                >
                  Find Your Circle
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Aurahood
                </span>
              </div>
              <p className="text-muted-foreground">
                Building stronger, safer communities through trusted connections.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-smooth">Features</Link></li>
                <li><Link to="/safety" className="hover:text-primary transition-smooth">Safety</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-smooth">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-smooth">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact Us</Link></li>
                <li><Link to="/community" className="hover:text-primary transition-smooth">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/legal/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
                <li><Link to="/legal/terms" className="hover:text-primary transition-smooth">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Aurahood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;