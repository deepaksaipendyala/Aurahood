import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  Leaf, 
  Car, 
  Users, 
  Award, 
  TrendingUp,
  Target,
  Calendar,
  MapPin,
  Clock,
  Star,
  Zap,
  Heart,
  Globe,
  TreePine,
  Recycle,
  Bike
} from "lucide-react";

// Mock data moved outside component
const mockImpactStats = {
    co2Saved: 45.2,
    ridesProvided: 12,
    ridesTaken: 8,
    peopleHelped: 18,
    hoursContributed: 38,
    communityRank: 47,
    totalMembers: 1247
  };

const mockAchievements = [
    {
      id: "1",
      name: "Eco Warrior",
      description: "Saved 50+ lbs of CO₂ emissions",
      icon: <Leaf className="w-6 h-6" />,
      progress: 90,
      target: 50,
      current: 45.2,
      unlocked: false,
      category: "environmental"
    },
    {
      id: "2",
      name: "Community Helper",
      description: "Helped 20+ people in your community",
      icon: <Users className="w-6 h-6" />,
      progress: 90,
      target: 20,
      current: 18,
      unlocked: false,
      category: "social"
    },
    {
      id: "3",
      name: "Ride Share Champion",
      description: "Provided 15+ rides to community members",
      icon: <Car className="w-6 h-6" />,
      progress: 80,
      target: 15,
      current: 12,
      unlocked: false,
      category: "transportation"
    },
    {
      id: "4",
      name: "Time Giver",
      description: "Contributed 50+ hours of community service",
      icon: <Clock className="w-6 h-6" />,
      progress: 76,
      target: 50,
      current: 38,
      unlocked: false,
      category: "time"
    },
    {
      id: "5",
      name: "First Steps",
      description: "Completed your first community request",
      icon: <Star className="w-6 h-6" />,
      progress: 100,
      target: 1,
      current: 1,
      unlocked: true,
      category: "milestone"
    },
    {
      id: "6",
      name: "Trust Builder",
      description: "Maintained 4.5+ trust score for 30 days",
      icon: <Award className="w-6 h-6" />,
      progress: 100,
      target: 30,
      current: 30,
      unlocked: true,
      category: "reputation"
    }
  ];

const mockRecentActivities = [
    {
      id: "1",
      type: "ride_shared",
      description: "Provided ride to Sarah from NC State to RDU Airport",
      impact: { co2Saved: 2.3, peopleHelped: 1 },
      date: "2024-01-15T10:30:00Z",
      location: "NC State → RDU Airport"
    },
    {
      id: "2",
      type: "home_help",
      description: "Helped Mike with grocery shopping for elderly neighbor",
      impact: { co2Saved: 1.2, peopleHelped: 1 },
      date: "2024-01-14T14:20:00Z",
      location: "Harris Teeter, Raleigh"
    },
    {
      id: "3",
      type: "tech_support",
      description: "Provided laptop setup assistance to Emma",
      impact: { co2Saved: 0.8, peopleHelped: 1 },
      date: "2024-01-13T19:45:00Z",
      location: "NC State Campus"
    },
    {
      id: "4",
      type: "event_companion",
      description: "Accompanied Alex to Durham Performing Arts Center",
      impact: { co2Saved: 3.1, peopleHelped: 1 },
      date: "2024-01-12T18:00:00Z",
      location: "Durham Performing Arts Center"
    }
  ];

const Impact = () => {
  const { user } = useUser();
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "ride_shared": return <Car className="w-5 h-5 text-blue-500" />;
      case "home_help": return <Heart className="w-5 h-5 text-green-500" />;
      case "tech_support": return <Zap className="w-5 h-5 text-purple-500" />;
      case "event_companion": return <Users className="w-5 h-5 text-orange-500" />;
      default: return <Star className="w-5 h-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "environmental": return "text-green-600 bg-green-100";
      case "social": return "text-blue-600 bg-blue-100";
      case "transportation": return "text-purple-600 bg-purple-100";
      case "time": return "text-orange-600 bg-orange-100";
      case "milestone": return "text-yellow-600 bg-yellow-100";
      case "reputation": return "text-indigo-600 bg-indigo-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Impact</h1>
            <p className="text-muted-foreground">Track your positive contributions to the community and environment</p>
          </div>

          {/* Impact Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{mockImpactStats.co2Saved.toFixed(2)}</div>
                    <div className="text-sm opacity-90">lbs CO₂ Saved</div>
                  </div>
                  <Leaf className="w-8 h-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{mockImpactStats.peopleHelped}</div>
                    <div className="text-sm opacity-90">People Helped</div>
                  </div>
                  <Users className="w-8 h-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{mockImpactStats.hoursContributed}</div>
                    <div className="text-sm opacity-90">Hours Contributed</div>
                  </div>
                  <Clock className="w-8 h-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">#{mockImpactStats.communityRank}</div>
                    <div className="text-sm opacity-90">Community Rank</div>
                  </div>
                  <Award className="w-8 h-8 opacity-80" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environmental Impact Visualization */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-600" />
                <span>Environmental Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="text-2xl font-bold text-green-600">{mockImpactStats.co2Saved.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">lbs CO₂ Saved</div>
                  <div className="text-xs text-muted-foreground mt-1">Equivalent to {Math.round(mockImpactStats.co2Saved * 2.2)} miles driven</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <div className="text-2xl font-bold text-blue-600">{mockImpactStats.ridesProvided}</div>
                  <div className="text-sm text-muted-foreground">Rides Shared</div>
                  <div className="text-xs text-muted-foreground mt-1">Prevented {(mockImpactStats.ridesProvided * 2.3).toFixed(2)} lbs CO₂</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌳</div>
                  <div className="text-2xl font-bold text-green-600">{Math.round(mockImpactStats.co2Saved * 0.1)}</div>
                  <div className="text-sm text-muted-foreground">Tree Equivalents</div>
                  <div className="text-xs text-muted-foreground mt-1">Trees that would absorb this CO₂</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="achievements" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activities">Recent Activities</TabsTrigger>
              <TabsTrigger value="goals">Goals & Targets</TabsTrigger>
            </TabsList>

            <TabsContent value="achievements" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {mockAchievements.map((achievement) => (
                  <Card key={achievement.id} className={achievement.unlocked ? "border-green-200 bg-green-50" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getCategoryColor(achievement.category)}`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{achievement.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                        {achievement.unlocked && (
                          <Badge variant="default" className="bg-green-600">Unlocked</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.current}/{achievement.target}</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                        {!achievement.unlocked && (
                          <p className="text-xs text-muted-foreground">
                            {achievement.target - achievement.current} more to unlock
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-4">
              <div className="space-y-3">
                {mockRecentActivities.map((activity) => (
                  <Card key={activity.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-muted rounded-lg">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.description}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{activity.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(activity.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex space-x-4 mt-2 text-xs">
                            <div className="flex items-center space-x-1 text-green-600">
                              <Leaf className="w-3 h-3" />
                              <span>{activity.impact.co2Saved.toFixed(2)} lbs CO₂ saved</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600">
                              <Users className="w-3 h-3" />
                              <span>{activity.impact.peopleHelped} person helped</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Goals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Help 25 People</span>
                        <span>{mockImpactStats.peopleHelped}/25</span>
                      </div>
                      <Progress value={(mockImpactStats.peopleHelped / 25) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Save 60 lbs CO₂</span>
                        <span>{mockImpactStats.co2Saved.toFixed(2)}/60</span>
                      </div>
                      <Progress value={(mockImpactStats.co2Saved / 60) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Contribute 50 Hours</span>
                        <span>{mockImpactStats.hoursContributed}/50</span>
                      </div>
                      <Progress value={(mockImpactStats.hoursContributed / 50) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{mockImpactStats.totalMembers}</div>
                      <div className="text-sm text-muted-foreground">Total Community Members</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-semibold">2,847</div>
                        <div className="text-xs text-muted-foreground">Total Rides Shared</div>
                      </div>
                      <div>
                        <div className="text-xl font-semibold">12,456</div>
                        <div className="text-xs text-muted-foreground">People Helped</div>
                      </div>
                      <div>
                        <div className="text-xl font-semibold">8,923</div>
                        <div className="text-xs text-muted-foreground">lbs CO₂ Saved</div>
                      </div>
                      <div>
                        <div className="text-xl font-semibold">4,567</div>
                        <div className="text-xs text-muted-foreground">Hours Contributed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Impact;
