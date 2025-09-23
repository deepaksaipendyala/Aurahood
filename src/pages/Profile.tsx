import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  User,
  Mail,
  Calendar,
  MapPin,
  Shield,
  Star,
  Award,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Heart,
  Car,
  Home,
  MessageCircle,
  Camera,
  Edit,
  Check,
  X,
  Settings,
  Bell,
  Lock
} from "lucide-react";

const Profile = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || "",
    bio: "",
    location: "Raleigh, NC",
    phone: "",
    preferences: {
      notifications: true,
      publicProfile: true,
      showLocation: true
    }
  });

  // Mock profile data
  const profileStats = {
    totalRequests: 23,
    totalHelped: 18,
    totalHours: 38,
    totalPoints: user?.auraPoints || 1250,
    trustScore: user?.trustScore || 4.8,
    memberSince: "2023-08-15",
    lastActive: "2024-01-15T10:30:00Z"
  };

  const achievements = [
    {
      id: "1",
      name: "First Steps",
      description: "Completed your first community request",
      icon: <Star className="w-5 h-5" />,
      earnedDate: "2023-08-20",
      category: "milestone"
    },
    {
      id: "2",
      name: "Trust Builder",
      description: "Maintained 4.5+ trust score for 30 days",
      icon: <Shield className="w-5 h-5" />,
      earnedDate: "2023-12-15",
      category: "reputation"
    },
    {
      id: "3",
      name: "Community Helper",
      description: "Helped 10+ people in your community",
      icon: <Users className="w-5 h-5" />,
      earnedDate: "2024-01-10",
      category: "social"
    },
    {
      id: "4",
      name: "Eco Warrior",
      description: "Saved 25+ lbs of CO₂ emissions",
      icon: <TrendingUp className="w-5 h-5" />,
      earnedDate: "2024-01-12",
      category: "environmental"
    }
  ];

  const recentActivities = [
    {
      id: "1",
      type: "helped",
      description: "Provided ride to Sarah from NC State to RDU Airport",
      date: "2024-01-15T10:30:00Z",
      points: 150,
      category: "transportation"
    },
    {
      id: "2",
      type: "requested",
      description: "Requested help with grocery shopping",
      date: "2024-01-14T14:20:00Z",
      points: -75,
      category: "home_help"
    },
    {
      id: "3",
      type: "helped",
      description: "Provided tech support for laptop setup",
      date: "2024-01-13T19:45:00Z",
      points: 200,
      category: "tech_support"
    }
  ];

  const skills = [
    { name: "Driving", level: 95, category: "transportation" },
    { name: "Tech Support", level: 88, category: "technology" },
    { name: "Home Help", level: 82, category: "household" },
    { name: "Pet Care", level: 75, category: "care" },
    { name: "Grocery Shopping", level: 90, category: "errands" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "helped": return <Heart className="w-4 h-4 text-green-500" />;
      case "requested": return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Star className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "transportation": return <Car className="w-4 h-4" />;
      case "home_help": return <Home className="w-4 h-4" />;
      case "tech_support": return <MessageCircle className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const handleSave = () => {
    updateUser({
      name: editData.name,
      // Add other fields as needed
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || "",
      bio: "",
      location: "Raleigh, NC",
      phone: "",
      preferences: {
        notifications: true,
        publicProfile: true,
        showLocation: true
      }
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your profile and view your community impact</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="relative inline-block">
                      <Avatar className="w-24 h-24 mx-auto">
                        <AvatarImage src={user?.avatar || ""} alt={user?.name} />
                        <AvatarFallback className="bg-gradient-hero text-white text-2xl">
                          {user?.name?.split(" ").map(n => n[0]).join("") || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                        variant="secondary"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold">{user?.name}</h2>
                      <p className="text-muted-foreground">{user?.email}</p>
                      <div className="flex items-center justify-center space-x-1 mt-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Raleigh, NC</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{profileStats.trustScore}</span>
                      <span className="text-sm text-muted-foreground">Trust Score</span>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsEditing(!isEditing)}
                      className="w-full"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{profileStats.totalRequests}</div>
                      <div className="text-sm text-muted-foreground">Requests</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{profileStats.totalHelped}</div>
                      <div className="text-sm text-muted-foreground">People Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{profileStats.totalHours}</div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{profileStats.totalPoints}</div>
                      <div className="text-sm text-muted-foreground">Points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Member Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Member Since</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Joined</span>
                      <span className="text-sm font-medium">
                        {new Date(profileStats.memberSince).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last Active</span>
                      <span className="text-sm font-medium">
                        {new Date(profileStats.lastActive).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Award className="w-5 h-5" />
                        <span>Skills & Expertise</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bio */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <div className="space-y-4">
                          <textarea
                            className="w-full p-3 border rounded-lg resize-none"
                            rows={4}
                            placeholder="Tell the community about yourself..."
                            value={editData.bio}
                            onChange={(e) => setEditData({...editData, bio: e.target.value})}
                          />
                          <div className="flex space-x-2">
                            <Button size="sm" onClick={handleSave}>
                              <Check className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button size="sm" variant="outline" onClick={handleCancel}>
                              <X className="w-4 h-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-muted-foreground">
                          {editData.bio || "No bio provided yet. Click 'Edit Profile' to add one."}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="activities" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                            <div className="p-2 bg-muted rounded-lg">
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{activity.description}</div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {new Date(activity.date).toLocaleDateString()} • {activity.category}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`font-medium ${activity.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {activity.points > 0 ? '+' : ''}{activity.points}
                              </div>
                              <div className="text-xs text-muted-foreground">points</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements & Badges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {achievements.map((achievement) => (
                          <div key={achievement.id} className="p-4 border rounded-lg">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                {achievement.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{achievement.name}</div>
                                <div className="text-sm text-muted-foreground">{achievement.description}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                                </div>
                              </div>
                              <Badge variant="default" className="bg-green-100 text-green-800">
                                Earned
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy & Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Bell className="w-4 h-4" />
                            <span>Email Notifications</span>
                          </div>
                          <Button variant="outline" size="sm">
                            {editData.preferences.notifications ? "Enabled" : "Disabled"}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>Public Profile</span>
                          </div>
                          <Button variant="outline" size="sm">
                            {editData.preferences.publicProfile ? "Public" : "Private"}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Show Location</span>
                          </div>
                          <Button variant="outline" size="sm">
                            {editData.preferences.showLocation ? "Visible" : "Hidden"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="w-4 h-4 mr-2" />
                          Account Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Lock className="w-4 h-4 mr-2" />
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                          <X className="w-4 h-4 mr-2" />
                          Deactivate Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
