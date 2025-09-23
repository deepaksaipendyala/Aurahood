import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
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
  Clock,
  MapPin,
  Phone,
  Star,
  Globe,
  Lock,
  Eye,
  MessageCircle,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Car,
      title: "Safe Rides",
      description: "Get rides from trusted community members with verified profiles and ratings.",
      details: [
        "Verified driver profiles",
        "Real-time GPS tracking",
        "Emergency contact integration",
        "Route optimization"
      ]
    },
    {
      icon: Shield,
      title: "Safety First", 
      description: "Live tracking, emergency contacts, and thorough background checks for peace of mind.",
      details: [
        "Background verification",
        "Live location sharing",
        "Emergency SOS button",
        "24/7 safety monitoring"
      ]
    },
    {
      icon: Home,
      title: "Home Help",
      description: "Find reliable help for daily tasks - from grocery runs to tech support.",
      details: [
        "Task categorization",
        "Local helper matching",
        "Scheduled assistance",
        "Quality assurance"
      ]
    },
    {
      icon: Calendar,
      title: "Event Companions",
      description: "Never go alone to events. Find companions for concerts, movies, and social gatherings.",
      details: [
        "Event discovery",
        "Companion matching",
        "Group coordination",
        "Social networking"
      ]
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Compassionate companions for seniors who need assistance and social connection.",
      details: [
        "Specialized senior care",
        "Companion matching",
        "Health monitoring",
        "Family coordination"
      ]
    },
    {
      icon: Zap,
      title: "Aura Points",
      description: "Earn points for helping others, redeem for rewards, and build your community reputation.",
      details: [
        "Point earning system",
        "Reward redemption",
        "Reputation building",
        "Community recognition"
      ]
    }
  ];

  const safetyFeatures = [
    {
      icon: Lock,
      title: "Identity Verification",
      description: "Multi-step verification process including ID checks and background screening."
    },
    {
      icon: Eye,
      title: "Live Tracking",
      description: "Real-time location sharing during all interactions for safety and peace of mind."
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "24/7 emergency support with instant access to local authorities when needed."
    },
    {
      icon: MessageCircle,
      title: "Secure Communication",
      description: "Encrypted messaging system with built-in safety features and reporting tools."
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Community Impact",
      description: "Measure and track your positive impact on the community through CO₂ savings and care hours."
    },
    {
      icon: Globe,
      title: "Local Focus",
      description: "Connect with people in your immediate area for more meaningful and convenient interactions."
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Quick matching and efficient coordination to save time for both helpers and those in need."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Rating and review system ensures high-quality interactions and continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Community Connection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how Aurahood's comprehensive platform makes community help safe, 
              efficient, and rewarding for everyone involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/auth/signup" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link to="/auth/signin" className="flex items-center">
                  Try Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Core Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Safety Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Safety & Security
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Your Safety is Our Priority</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've built comprehensive safety features to ensure every interaction 
                is secure, monitored, and protected.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader className="flex flex-col items-center p-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-hero text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Aurahood?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-hero rounded-3xl text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of community members who are already using Aurahood 
                to help each other and build stronger connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth/signup">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/safety">Learn About Safety</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Features;
