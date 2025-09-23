import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  Phone, 
  AlertTriangle,
  CheckCircle,
  UserCheck,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Star,
  ArrowRight,
  Heart,
  Zap,
  Globe
} from "lucide-react";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "Comprehensive background checks and identity verification for all community members.",
      details: [
        "Government ID verification",
        "Background screening",
        "Social media verification",
        "Reference checks"
      ]
    },
    {
      icon: Eye,
      title: "Live Tracking",
      description: "Real-time location sharing and monitoring during all interactions.",
      details: [
        "GPS tracking during rides",
        "Route monitoring",
        "Location sharing with emergency contacts",
        "Automatic check-ins"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "24/7 emergency support with instant access to local authorities.",
      details: [
        "One-tap emergency button",
        "Direct connection to 911",
        "Emergency contact notifications",
        "Crisis intervention support"
      ]
    },
    {
      icon: MessageCircle,
      title: "Secure Communication",
      description: "Encrypted messaging with built-in safety features and reporting tools.",
      details: [
        "End-to-end encryption",
        "Photo/video sharing",
        "Voice message support",
        "Incident reporting system"
      ]
    },
    {
      icon: Shield,
      title: "Safety Monitoring",
      description: "AI-powered monitoring and human oversight for all platform activities.",
      details: [
        "Behavioral pattern analysis",
        "Real-time risk assessment",
        "Proactive safety interventions",
        "Continuous monitoring"
      ]
    },
    {
      icon: Star,
      title: "Community Ratings",
      description: "Transparent rating system that builds trust and accountability.",
      details: [
        "Mutual rating system",
        "Detailed feedback collection",
        "Trust score calculation",
        "Community moderation"
      ]
    }
  ];

  const safetySteps = [
    {
      step: "1",
      title: "Verification",
      description: "Complete identity verification and background check before joining.",
      icon: UserCheck
    },
    {
      step: "2",
      title: "Matching",
      description: "Our algorithm matches you with verified, trustworthy community members.",
      icon: Users
    },
    {
      step: "3",
      title: "Monitoring",
      description: "All interactions are monitored with live tracking and safety features.",
      icon: Eye
    },
    {
      step: "4",
      title: "Support",
      description: "24/7 emergency support is always available when you need it.",
      icon: Phone
    }
  ];

  const safetyTips = [
    {
      icon: MapPin,
      title: "Share Your Location",
      description: "Always share your location with trusted contacts during interactions."
    },
    {
      icon: MessageCircle,
      title: "Communicate Through App",
      description: "Keep all communication within the app for safety and support."
    },
    {
      icon: Clock,
      title: "Plan Ahead",
      description: "Schedule interactions during safe hours and in well-lit areas."
    },
    {
      icon: Heart,
      title: "Trust Your Instincts",
      description: "If something feels wrong, cancel the interaction and report it."
    }
  ];

  const emergencyFeatures = [
    {
      title: "Emergency Button",
      description: "One-tap access to emergency services with automatic location sharing.",
      icon: AlertTriangle
    },
    {
      title: "Panic Mode",
      description: "Silent emergency activation that notifies contacts and authorities.",
      icon: Shield
    },
    {
      title: "Live Monitoring",
      description: "Real-time monitoring by our safety team during high-risk interactions.",
      icon: Eye
    },
    {
      title: "Incident Response",
      description: "Immediate response team deployment for safety incidents.",
      icon: Phone
    }
  ];

  const safetyStats = [
    { value: "99.8%", label: "Safe Interactions", icon: CheckCircle },
    { value: "< 2min", label: "Emergency Response", icon: Clock },
    { value: "24/7", label: "Safety Monitoring", icon: Shield },
    { value: "100%", label: "Verified Users", icon: UserCheck }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Safety First
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Safety is Our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Top Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We've built comprehensive safety features and protocols to ensure every interaction 
              on Aurahood is secure, monitored, and protected. Your peace of mind matters to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/auth/signup" className="flex items-center">
                  Join Safely
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link to="/features" className="flex items-center">
                  View Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Safety Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {safetyStats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </section>

          {/* Safety Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Safety Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

          {/* How Safety Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Safety System Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetySteps.map((step, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader className="flex flex-col items-center p-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-hero text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Emergency Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Features
              </Badge>
              <h2 className="text-3xl font-bold mb-4">When You Need Help Immediately</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our emergency features are designed to get you help quickly and efficiently 
                when you need it most.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6 border-red-200">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Safety Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Safety Tips for All Users</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Community Safety */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Community-Driven Safety</h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Safety is a community effort. Every member plays a role in maintaining 
                    a safe environment through reporting, rating, and supporting each other.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <Link to="/auth/signup" className="flex items-center">
                        Join Our Safe Community
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      <Link to="/features" className="flex items-center">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-hero rounded-3xl text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Safe Community?</h2>
              <p className="text-xl opacity-90 mb-8">
                Experience the peace of mind that comes with our comprehensive safety features 
                and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth/signup">Get Started Safely</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Safety;
