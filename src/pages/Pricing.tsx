import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  CheckCircle,
  ArrowRight,
  Zap,
  Crown,
  Building,
  Users,
  Shield,
  Star,
  Heart,
  Car,
  Home,
  Calendar,
  Phone,
  MessageCircle,
  Globe
} from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for getting started and helping your community",
      icon: Heart,
      popular: false,
      features: [
        "Basic ride sharing",
        "Home help requests",
        "Community matching",
        "Basic safety features",
        "Standard support",
        "Aura Points earning"
      ],
      limitations: [
        "Limited to 5 requests per month",
        "Standard matching speed",
        "Basic profile verification"
      ]
    },
    {
      name: "Premium",
      price: "$5",
      period: "/month",
      description: "Enhanced features for active community members",
      icon: Crown,
      popular: true,
      features: [
        "Unlimited requests",
        "Priority matching",
        "Advanced safety features",
        "24/7 premium support",
        "Enhanced profile verification",
        "Extended Aura Points credit line",
        "Calendar integration",
        "Group coordination tools"
      ],
      limitations: []
    },
    {
      name: "Pro",
      price: "$8",
      period: "/month",
      description: "Maximum features for power users and helpers",
      icon: Star,
      popular: false,
      features: [
        "Everything in Premium",
        "Advanced analytics",
        "Custom matching preferences",
        "Priority emergency support",
        "Advanced scheduling tools",
        "Team coordination features",
        "API access",
        "Custom notifications"
      ],
      limitations: []
    }
  ];

  const businessPlans = [
    {
      name: "University Circle",
      price: "Custom",
      description: "Private circle for university communities",
      icon: Building,
      features: [
        "Custom branded experience",
        "Advanced analytics dashboard",
        "Administrative controls",
        "Safety monitoring tools",
        "Integration with campus systems",
        "Dedicated support team",
        "Custom reporting",
        "Student engagement tools"
      ]
    },
    {
      name: "Senior Organization",
      price: "Custom",
      description: "Specialized platform for senior care organizations",
      icon: Users,
      features: [
        "Senior-focused matching",
        "Family coordination tools",
        "Health monitoring integration",
        "Caregiver management",
        "Emergency response systems",
        "Compliance reporting",
        "Custom safety protocols",
        "Multi-location support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete solution for large organizations",
      icon: Globe,
      features: [
        "Multi-organization management",
        "Advanced security features",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label options",
        "Advanced analytics",
        "Custom development",
        "Priority support"
      ]
    }
  ];

  const features = [
    {
      icon: Car,
      title: "Safe Rides",
      description: "Verified drivers with real-time tracking and emergency support"
    },
    {
      icon: Home,
      title: "Home Help",
      description: "Reliable assistance for daily tasks and home maintenance"
    },
    {
      icon: Calendar,
      title: "Event Companions",
      description: "Find companions for social events and activities"
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Specialized companionship and assistance for seniors"
    },
    {
      icon: Shield,
      title: "Safety Features",
      description: "Comprehensive safety monitoring and emergency support"
    },
    {
      icon: Zap,
      title: "Aura Points",
      description: "Earn and redeem points for community contributions"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts. All payments are processed securely."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits as needed."
    },
    {
      question: "Do you offer discounts for students or seniors?",
      answer: "Yes, we offer 50% off our Premium plan for verified students and seniors. Contact support to verify your eligibility."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period."
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
              Simple, Transparent
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and upgrade as you grow. 
              All plans include our core safety features and community access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/auth/signup" className="flex items-center">
                  Start Free Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/features" className="flex items-center">
                  View Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Individual Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Individual Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-hero">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold">
                      {plan.price}
                      {plan.period && <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-xs text-muted-foreground">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-hero hover:opacity-90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link to="/auth/signup">
                        {plan.name === 'Community' ? 'Get Started Free' : 'Start Free Trial'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Business Plans */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Building className="w-4 h-4 mr-2" />
                Business Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Custom Solutions for Organizations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored platforms for universities, senior organizations, and enterprises 
                with advanced features and dedicated support.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {businessPlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link to="/contact">Contact Sales</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features Included */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">All Plans Include</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-hero rounded-3xl text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of community members who are already using Aurahood 
                to help each other and build stronger connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth/signup">Start Free Today</Link>
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

export default Pricing;
