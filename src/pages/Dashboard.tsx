import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  Plus, 
  HandHeart, 
  Clock, 
  TrendingUp, 
  Users, 
  MapPin,
  Calendar,
  Award,
  Zap,
  Car,
  Home,
  Shield
} from "lucide-react";

const Dashboard = () => {
  // Mock data - in real app, this would come from Supabase
  const user = {
    name: "Alex Chen",
    auraPoints: 1250,
    trustScore: 4.8,
    completedRequests: 23,
    helpedMembers: 18,
    co2Saved: 45.2,
    hoursContributed: 38
  };

  const circles = [
    { id: "1", name: "NCSU Campus", members: 1200, type: "campus" },
    { id: "2", name: "Downtown Raleigh", members: 850, type: "rwa" }
  ];

  const activeRequests = [
    {
      id: "1",
      title: "Ride to Airport",
      type: "ride",
      time: "Tomorrow 6:00 AM",
      status: "matched",
      helper: "Sarah K.",
      auraPoints: 25
    },
    {
      id: "2", 
      title: "Help Moving Furniture",
      type: "home_help",
      time: "This Weekend",
      status: "open",
      auraPoints: 40
    }
  ];

  const nearbyRequests = [
    {
      id: "3",
      title: "Grocery Store Companion",
      type: "escort",
      distance: "0.8 miles",
      time: "In 2 hours",
      auraPoints: 15,
      requester: "Maria G."
    },
    {
      id: "4",
      title: "Tech Support Help",
      type: "home_help", 
      distance: "1.2 miles",
      time: "This evening",
      auraPoints: 20,
      requester: "Robert P."
    },
    {
      id: "5",
      title: "Concert Companion",
      type: "event_help",
      distance: "2.1 miles", 
      time: "Friday night",
      auraPoints: 30,
      requester: "Jamie L."
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ride": return Car;
      case "escort": return Shield;
      case "home_help": return Home;
      case "event_help": return Calendar;
      default: return HandHeart;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ride": return "bg-blue-100 text-blue-800";
      case "escort": return "bg-green-100 text-green-800";
      case "home_help": return "bg-purple-100 text-purple-800";
      case "event_help": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening in your community today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-aura text-white border-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <div>
                    <div className="text-2xl font-bold">{user.auraPoints.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Aura Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{user.trustScore}</div>
                    <div className="text-sm text-muted-foreground">Trust Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <HandHeart className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold">{user.helpedMembers}</div>
                    <div className="text-sm text-muted-foreground">People Helped</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <div>
                    <div className="text-2xl font-bold">{user.co2Saved}</div>
                    <div className="text-sm text-muted-foreground">lbs CO₂ Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button size="lg" className="h-20 flex-col space-y-2" asChild>
                      <Link to="/requests/new">
                        <Plus className="w-6 h-6" />
                        <span>Post a Request</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-20 flex-col space-y-2" asChild>
                      <Link to="/requests?filter=open">
                        <HandHeart className="w-6 h-6" />
                        <span>Offer to Help</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Your Active Requests */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Your Active Requests</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/requests">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  {activeRequests.length > 0 ? (
                    <div className="space-y-4">
                      {activeRequests.map((request) => {
                        const Icon = getTypeIcon(request.type);
                        return (
                          <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium">{request.title}</h4>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span>{request.time}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant={request.status === "matched" ? "default" : "secondary"}>
                                {request.status === "matched" ? `Matched with ${request.helper}` : "Open"}
                              </Badge>
                              <div className="text-sm text-muted-foreground mt-1">
                                {request.auraPoints} points
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <HandHeart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No active requests</p>
                      <Button variant="outline" className="mt-4" asChild>
                        <Link to="/requests/new">Post Your First Request</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Nearby Requests */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Nearby Requests</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/requests?filter=nearby">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nearbyRequests.map((request) => {
                      const Icon = getTypeIcon(request.type);
                      return (
                        <div key={request.id} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-smooth cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(request.type)}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-medium text-sm">{request.title}</h5>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>{request.distance}</span>
                                <span>{request.time}</span>
                                <span>by {request.requester}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-aura-gold">+{request.auraPoints}</div>
                            <Button size="sm" variant="ghost" className="h-6 text-xs">
                              Help
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Circles */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Your Circles</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/circles">Manage</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {circles.map((circle) => (
                      <Link 
                        key={circle.id} 
                        to={`/circles/${circle.id}`}
                        className="block p-3 hover:bg-muted/50 rounded-lg transition-smooth"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{circle.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {circle.members.toLocaleString()} members
                            </p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {circle.type}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/circles/join">Join Another Circle</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Impact Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Your Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Goal</span>
                      <span>{user.hoursContributed}/50 hours</span>
                    </div>
                    <Progress value={(user.hoursContributed / 50) * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">CO₂ Saved</span>
                      <span className="text-sm font-medium">{user.co2Saved} lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Hours Contributed</span>
                      <span className="text-sm font-medium">{user.hoursContributed} hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Requests Completed</span>
                      <span className="text-sm font-medium">{user.completedRequests}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/impact">View Detailed Impact</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Level Progress */}
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-aura rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">Community Champion</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      250 points to next level
                    </p>
                    <Progress value={83} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;