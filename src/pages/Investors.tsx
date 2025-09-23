import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Target,
  Globe,
  Zap,
  Award,
  BarChart3,
  MapPin,
  Clock,
  DollarSign,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Investors = () => {
  const tractionMetrics = [
    { label: "Total Users", value: "0+", icon: Users },
    { label: "Monthly Active Users", value: "0+", icon: TrendingUp },
    { label: "Active Circles", value: "0+", icon: Globe },
    { label: "Request Fulfillment Rate", value: "0%", icon: Target },
    { label: "Median Match Time", value: "0h", icon: Clock },
    { label: "On-Time Rate", value: "0%", icon: CheckCircle },
    { label: "Average Rating", value: "0/5", icon: Award },
    { label: "CO₂ Saved", value: "Infinite tons", icon: Shield }
  ];

  const businessModel = [
    {
      title: "Freemium Core",
      description: "Basic usage free for all community members",
      revenue: "User acquisition"
    },
    {
      title: "Premium Subscriptions",
      description: "$5-8/month for priority matching, larger credit lines, and calendar autopilot",
      revenue: "Recurring revenue"
    },
    {
      title: "B2B SaaS Circles",
      description: "Private circles + analytics for universities, RWAs, senior orgs, and employers",
      revenue: "High-value contracts"
    },
    {
      title: "Reward Partnerships",
      description: "Brand partnerships for point redemptions (transit, dining, essentials)",
      revenue: "Revenue share & fees"
    },
    {
      title: "Point Top-ups",
      description: "Small loyalty-style purchases (no cash-out)",
      revenue: "Transaction fees"
    }
  ];

  const marketOpportunity = [
    {
      icon: Users,
      title: "Fragmented Market",
      description: "Liquidity exists in ride boards, WhatsApp groups, and neighbor apps, but no system for trust, reciprocity, and impact measurement."
    },
    {
      icon: Target,
      title: "Institutional Demand",
      description: "Universities and cities want measurable impact on mobility, sustainability, and social isolation."
    },
    {
      icon: Shield,
      title: "Tech Stack Maturity",
      description: "Identity verification, masked calling, live location, and lightweight routing make this safe at scale."
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Category Depth First",
      description: "Focused on escorted mobility + companionship, not a generic barter marketplace"
    },
    {
      title: "Impact-Weighted Currency",
      description: "Aura Points boost for CO₂-saving carpools, elder care, and reliability streaks"
    },
    {
      title: "Micro-circles with Credit Lines",
      description: "New members can request before they earn, eliminating the cold-start problem"
    },
    {
      title: "Safety by Default",
      description: "Built-in verification, masked communications, live location, check-ins, and SOS features"
    }
  ];

  const roadmap = [
    { quarter: "Q4 2025", items: ["Recurring appointments + carpool routing groups", "Accessibility profiles and training modules"] },
    { quarter: "Q1 2026", items: ["Point market-maker 2.0 (forecasting, fairness guards)", "National rewards + donation matching"] },
    { quarter: "Q2 2026", items: ["Open APIs for impact reporting", "Expand to +6 cities with partner MOUs"] },
    { quarter: "Q3 2026", items: ["Advanced safety features", "Enterprise integrations"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Community Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Aurahood is building the operating system for community help - measurable, safe, and reciprocal. 
              Join us in creating infrastructure that reduces cars, increases safety, and eliminates isolation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Mail className="w-5 h-5 mr-2" />
                Get Investor Deck
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>

          {/* The Short Version */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">The Short Version</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Aurahood is a community companion network where people earn and spend <strong>Aura Points</strong> for 
                high-trust, real-world help, campus ↔ airport carpools, clinic/grocery companionship for seniors, 
                and quick home/event help. We start with <strong>students and seniors</strong>, measure 
                <strong> CO₂ saved</strong> and <strong>care hours</strong>, and sell 
                <strong> private circles + impact dashboards</strong> to universities, RWAs, senior orgs, and employers.
              </p>
            </CardContent>
          </Card>

          {/* Why Now */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Why Now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {marketOpportunity.map((item, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What's Different */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Our Competitive Edge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-aura rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Model */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Business Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessModel.map((model, index) => (
                  <div key={index} className="border rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold text-lg">{model.title}</h3>
                    <p className="text-muted-foreground text-sm">{model.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {model.revenue}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traction */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Current Traction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tractionMetrics.map((metric, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Go-to-Market */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Go-to-Market Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Campus → City Expansion
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 4 US universities + nearby senior centers/hospitals</li>
                    <li>• 2 neighborhoods per city</li>
                    <li>• Anchor moments: semester move weeks, grocery runs, clinic days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Community Building
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ambassadors + liaisons: student teams and partner org contacts</li>
                    <li>• Pilot partnerships with universities and senior organizations</li>
                    <li>• Reward partnerships with local businesses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Product Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roadmap.map((quarter, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-aura rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Q{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{quarter.quarter}</h3>
                      <ul className="space-y-1">
                        {quarter.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Deepak Sai Pendyala</h3>
                <p className="text-muted-foreground">
                  Masters in Computer Science @ NCSU, specializing in multi-agent systems and real-world AI. 
                  Ex - Amazon, SproutsAI  with expertise in building scalable, 
                  real-world technology solutions.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Early Team</h4>
                  <p className="text-sm text-muted-foreground">Full-stack, mobile, data, community ops, safety ops</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Advisors</h4>
                  <p className="text-sm text-muted-foreground">University mobility, elder-care, city sustainability experts</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Network</h4>
                  <p className="text-sm text-muted-foreground">Strong connections in academia and community organizations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funding */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Funding & Use of Capital</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Pre-seed Round</h3>
                <p className="text-xl text-muted-foreground">Targeting <strong>$500K - $750K</strong></p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Use of Funds</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Product & Engineering</span>
                      <Badge variant="default">50%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Safety & Verification</span>
                      <Badge variant="default">20%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pilots & Partnerships</span>
                      <Badge variant="default">15%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Community Operations</span>
                      <Badge variant="default">10%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Legal & Compliance</span>
                      <Badge variant="default">5%</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">What We're Looking For</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500" />
                      Warm intros to university mobility leads
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500" />
                      Senior-care organization connections
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500" />
                      Transit and mobility partners
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500" />
                      Investors aligned with sustainability + community infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Build the Future Together?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in creating infrastructure that makes "neighbors helping neighbors" 
                the default, not the exception. Let's build communities that are safer, 
                more sustainable, and more connected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                  <Mail className="w-5 h-5 mr-2" />
                  investors@aurahood.org
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Deck available on request • Pilots in Raleigh-Durham and Austin
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Investors;
