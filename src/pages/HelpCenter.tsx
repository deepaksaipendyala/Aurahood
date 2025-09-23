import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  Search,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Users,
  Car,
  Home,
  Calendar,
  Heart,
  Zap,
  ArrowRight,
  ChevronRight,
  Book,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Learn how to join and set up your account",
      articles: [
        "How to create an account",
        "Setting up your profile",
        "Verification process",
        "Joining your first circle"
      ]
    },
    {
      icon: Car,
      title: "Rides & Transportation",
      description: "Everything about safe rides and carpooling",
      articles: [
        "Requesting a ride",
        "Offering rides",
        "Safety during rides",
        "Emergency procedures"
      ]
    },
    {
      icon: Home,
      title: "Home Help",
      description: "Getting and providing home assistance",
      articles: [
        "Requesting home help",
        "Types of home assistance",
        "Safety guidelines",
        "Payment and tips"
      ]
    },
    {
      icon: Calendar,
      title: "Events & Companions",
      description: "Finding companions for events and activities",
      articles: [
        "Finding event companions",
        "Creating event groups",
        "Safety at events",
        "Group coordination"
      ]
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Companionship and care for seniors",
      articles: [
        "Senior care services",
        "Family coordination",
        "Health considerations",
        "Long-term arrangements"
      ]
    },
    {
      icon: Zap,
      title: "Aura Points",
      description: "Earning, spending, and managing points",
      articles: [
        "How to earn points",
        "Redeeming rewards",
        "Point transfers",
        "Credit line management"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How do I verify my identity?",
      category: "Getting Started",
      icon: Shield
    },
    {
      title: "What safety features are available?",
      category: "Safety",
      icon: Shield
    },
    {
      title: "How do I earn Aura Points?",
      category: "Aura Points",
      icon: Zap
    },
    {
      title: "Can I cancel a ride request?",
      category: "Rides & Transportation",
      icon: Car
    },
    {
      title: "How do I report a safety concern?",
      category: "Safety",
      icon: AlertCircle
    },
    {
      title: "What payment methods are accepted?",
      category: "Billing & Payments",
      icon: FileText
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Aurahood?",
      answer: "Simply sign up for a free account, complete your profile verification, and join a circle in your area. You can start requesting or offering help immediately!"
    },
    {
      question: "Is Aurahood safe to use?",
      answer: "Yes! We have comprehensive safety features including identity verification, background checks, live tracking, emergency support, and 24/7 monitoring."
    },
    {
      question: "How much does Aurahood cost?",
      answer: "Aurahood offers a free Community plan with basic features. Premium plans start at $5/month for enhanced features and priority matching."
    },
    {
      question: "What types of help can I request?",
      answer: "You can request rides, home help, event companions, elder care, and more. Our platform supports a wide range of community assistance needs."
    },
    {
      question: "How do Aura Points work?",
      answer: "Aura Points are earned by helping others in your community. You can use them to request help or redeem rewards from our partners."
    },
    {
      question: "Can I use Aurahood in my city?",
      answer: "Aurahood is currently available in select cities. Check our coverage map or contact support to see if we're available in your area."
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
              How can we
              <span className="bg-gradient-hero bg-clip-text text-transparent"> help you?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions, learn how to use Aurahood effectively, 
              and get support when you need it.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-hero hover:opacity-90">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Support Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportOptions.map((option, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{option.availability}</p>
                  <Button className="w-full" asChild>
                    <Link to="/contact">{option.action}</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Popular Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <article.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.category}</p>
                      <ChevronRight className="w-4 h-4 text-muted-foreground mt-2" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="flex items-center text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          <ChevronRight className="w-3 h-3 mr-2" />
                          {article}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
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
                  <h3 className="font-semibold mb-3 flex items-start">
                    <HelpCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-16 bg-gradient-hero rounded-3xl text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl opacity-90 mb-8">
                Our support team is here to help you 24/7. Get in touch and we'll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/community">Join Community</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
