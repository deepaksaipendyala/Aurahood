import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  Users,
  MessageCircle,
  Heart,
  Star,
  TrendingUp,
  Globe,
  Calendar,
  MapPin,
  Award,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  UserPlus,
  ThumbsUp,
  Share2,
  Bookmark,
  Filter,
  Search
} from "lucide-react";

const Community = () => {
  const communityStats = [
    { value: "0+", label: "Active Members", icon: Users },
    { value: "0", label: "Circles", icon: Globe },
    { value: "0+", label: "Connections Made", icon: Heart },
    { value: "0", label: "Events This Month", icon: Calendar }
  ];

  const recentActivities = [
    {
      user: "Sarah M.",
      action: "offered a ride",
      location: "Downtown to Airport",
      time: "2 hours ago",
      avatar: "SM",
      points: 15
    },
    {
      user: "Mike R.",
      action: "helped with groceries",
      location: "Senior Center",
      time: "4 hours ago",
      avatar: "MR",
      points: 20
    },
    {
      user: "Emma L.",
      action: "found event companion",
      location: "Concert at Arena",
      time: "6 hours ago",
      avatar: "EL",
      points: 25
    },
    {
      user: "David K.",
      action: "provided home help",
      location: "Tech Support",
      time: "8 hours ago",
      avatar: "DK",
      points: 18
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Cleanup Day",
      date: "March 15, 2024",
      location: "Central Park",
      attendees: 25,
      type: "Community Service",
      organizer: "City Council"
    },
    {
      title: "Senior Tech Workshop",
      date: "March 18, 2024",
      location: "Community Center",
      attendees: 12,
      type: "Education",
      organizer: "Tech Volunteers"
    },
    {
      title: "Neighborhood Potluck",
      date: "March 22, 2024",
      location: "Oak Street Park",
      attendees: 40,
      type: "Social",
      organizer: "Resident Association"
    }
  ];

  const topHelpers = [
    {
      name: "Sarah Chen",
      avatar: "SC",
      points: 1250,
      helps: 45,
      rating: 4.9,
      badges: ["Ride Hero", "Senior Helper", "Event Organizer"]
    },
    {
      name: "Mike Rodriguez",
      avatar: "MR",
      points: 980,
      helps: 38,
      rating: 4.8,
      badges: ["Home Helper", "Tech Support"]
    },
    {
      name: "Emma Liu",
      avatar: "EL",
      points: 875,
      helps: 32,
      rating: 4.9,
      badges: ["Event Companion", "Community Leader"]
    }
  ];

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect, share experiences, and get advice from fellow community members",
      action: "Join Discussion"
    },
    {
      icon: Calendar,
      title: "Local Events",
      description: "Discover and join community events, meetups, and volunteer opportunities",
      action: "Browse Events"
    },
    {
      icon: Users,
      title: "Circle Groups",
      description: "Join neighborhood, campus, or interest-based circles to connect locally",
      action: "Find Circles"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Earn badges, recognition, and build your reputation in the community",
      action: "View Badges"
    }
  ];

  const testimonials = [
    {
      quote: "Aurahood has connected me with amazing neighbors who've become like family. The community support is incredible!",
      author: "Maria Santos",
      role: "Senior Resident",
      avatar: "MS"
    },
    {
      quote: "As a student, Aurahood helped me find rides and make friends. It's made my campus experience so much better.",
      author: "Alex Johnson",
      role: "University Student",
      avatar: "AJ"
    },
    {
      quote: "I love helping others through Aurahood. The points system and recognition make it rewarding to give back.",
      author: "Dr. Sarah Kim",
      role: "Community Helper",
      avatar: "SK"
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
              Join Our Amazing
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with neighbors, build meaningful relationships, and make a positive impact 
              in your community. Together, we're stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/auth/signup" className="flex items-center">
                  Join Community
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link to="/features" className="flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Community Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </section>

          {/* Community Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Community Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {feature.action}
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Recent Activity */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Recent Community Activity</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                          {activity.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            <span className="text-primary">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.location}</p>
                          <p className="text-xs text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.time}
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          +{activity.points} pts
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Top Helpers */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Top Community Helpers</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {topHelpers.map((helper, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gradient-hero text-white rounded-full flex items-center justify-center font-semibold">
                          {helper.avatar}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{helper.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{helper.points} points</span>
                            <span>{helper.helps} helps</span>
                            <span className="flex items-center">
                              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                              {helper.rating}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {helper.badges.map((badge, badgeIndex) => (
                              <Badge key={badgeIndex} variant="outline" className="text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Leaderboard
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Community Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <span className="text-sm text-muted-foreground">{event.attendees} attending</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        Organized by {event.organizer}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-hero rounded-3xl text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-xl opacity-90 mb-8">
                Be part of something bigger. Connect with your neighbors, help those in need, 
                and build lasting relationships in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth/signup">Join Now</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Community;
