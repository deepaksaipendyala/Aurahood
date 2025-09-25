import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Building,
  Heart,
  Shield,
  ArrowRight,
  Globe,
  Calendar,
  User
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "team@aurahood.org",
      link: "mailto:team@aurahood.org",
      availability: "Response within 24 hours",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Investor Relations",
      description: "For investors and partnerships",
      contact: "investors@aurahood.org",
      link: "mailto:investors@aurahood.org",
      availability: "Business hours response",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Building,
      title: "Business Inquiries",
      description: "For enterprise and business partnerships",
      contact: "deepaksaip@aurahood.org",
      link: "mailto:deepaksaip@aurahood.org",
      availability: "Response within 48 hours",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available 24/7",
      availability: "Instant response",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const categories = [
    "General Inquiry",
    "Technical Support",
    "Account Issues",
    "Safety Concerns",
    "Billing & Payments",
    "Feature Request",
    "Partnership Inquiry",
    "Media & Press",
    "Other"
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Raleigh-Durham, NC"]
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Live Chat", "Email: 24 hours", "Phone: Mon-Fri 9AM-6PM EST"]
    },
    {
      icon: Globe,
      title: "Service Areas",
      details: ["Raleigh-Durham",  "Expanding nationwide"]
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
              Get in
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions, feedback, or need help? We're here to assist you. 
              Reach out through any of the methods below and we'll get back to you promptly.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How to Reach Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-3">{method.description}</p>
                  <p className="font-medium text-primary mb-2">
                    {method.link ? (
                      <a 
                        href={method.link} 
                        className="hover:underline hover:text-primary/80 transition-colors"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      method.contact
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  All fields are required for the best support experience.
                </p>

                {isSubmitted ? (
                  <Card className="p-8 text-center border-green-200 bg-green-50">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </Card>
                ) : (
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="Brief description of your inquiry"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Please provide as much detail as possible about your inquiry..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Card>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Office Information</h2>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <ul className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Community First</h3>
                    <p className="text-muted-foreground mb-4">
                      We're committed to building stronger communities through safe, 
                      reliable connections. Your feedback helps us improve.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/community">Join Our Community</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Safety Center</h3>
                <p className="text-muted-foreground mb-4">Learn about our safety features and guidelines</p>
                <Button variant="outline" asChild>
                  <Link to="/safety">Visit Safety Center</Link>
                </Button>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-muted-foreground mb-4">Find answers to common questions</p>
                <Button variant="outline" asChild>
                  <Link to="/help">Browse Help Center</Link>
                </Button>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground mb-4">Connect with other Aurahood members</p>
                <Button variant="outline" asChild>
                  <Link to="/community">Join Community</Link>
                </Button>
              </Card>
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
                  <Link to="/auth/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
