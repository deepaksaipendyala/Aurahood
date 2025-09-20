import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  MapPin, 
  Plus, 
  Search, 
  Calendar,
  MessageSquare,
  TrendingUp,
  ExternalLink
} from "lucide-react";

const Circles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app, this would come from Supabase
  const userCircles = [
    {
      id: "1",
      name: "NCSU Campus",
      type: "campus",
      members: 1247,
      activeRequests: 23,
      joinedAt: "3 months ago",
      role: "member",
      description: "NC State University students and staff community",
      recentActivity: "5 new requests today"
    },
    {
      id: "2", 
      name: "Downtown Raleigh",
      type: "rwa",
      members: 856,
      activeRequests: 12,
      joinedAt: "1 month ago",
      role: "member",
      description: "Downtown Raleigh residents and workers",
      recentActivity: "2 new requests today"
    }
  ];

  const discoverCircles = [
    {
      id: "3",
      name: "Triangle Senior Care",
      type: "senior",
      members: 432,
      activeRequests: 18,
      description: "Dedicated support for seniors in the Triangle area",
      category: "Care & Support"
    },
    {
      id: "4",
      name: "Duke University",
      type: "campus", 
      members: 892,
      activeRequests: 31,
      description: "Duke University student community",
      category: "Campus"
    },
    {
      id: "5",
      name: "Cary Family Network",
      type: "rwa",
      members: 678,
      activeRequests: 15,
      description: "Families helping families in Cary",
      category: "Family & Community"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "campus": return "bg-blue-100 text-blue-800";
      case "rwa": return "bg-green-100 text-green-800"; 
      case "senior": return "bg-purple-100 text-purple-800";
      case "org": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "campus": return "Campus";
      case "rwa": return "Residential";
      case "senior": return "Senior Care";
      case "org": return "Organization";
      default: return "Community";
    }
  };

  const handleJoinByCode = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would validate and join via Supabase
    toast({
      title: "Joining circle...",
      description: `Attempting to join with code: ${inviteCode}`,
    });
    setIsJoinDialogOpen(false);
    setInviteCode("");
  };

  const filteredDiscoverCircles = discoverCircles.filter(circle =>
    circle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    circle.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Circles</h1>
              <p className="text-muted-foreground">Connect with communities around you</p>
            </div>
            
            <Dialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Join Circle</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join a Circle</DialogTitle>
                  <DialogDescription>
                    Enter an invite code to join a specific community circle
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleJoinByCode} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="inviteCode">Invite Code</Label>
                    <Input
                      id="inviteCode"
                      placeholder="Enter invite code (e.g., NCSU2025)"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Join Circle
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Your Circles */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Your Communities</span>
                    <Badge variant="secondary">{userCircles.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {userCircles.length > 0 ? (
                    <div className="space-y-4">
                      {userCircles.map((circle) => (
                        <Card key={circle.id} className="hover:shadow-card transition-smooth cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-lg font-semibold">{circle.name}</h3>
                                  <Badge className={getTypeColor(circle.type)}>
                                    {getTypeLabel(circle.type)}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground text-sm mb-3">
                                  {circle.description}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm" asChild>
                                <Link to={`/circles/${circle.id}`}>
                                  <ExternalLink className="w-4 h-4" />
                                </Link>
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-lg font-semibold">{circle.members.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Members</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-semibold text-accent">{circle.activeRequests}</div>
                                <div className="text-xs text-muted-foreground">Active Requests</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-semibold text-primary">{circle.role}</div>
                                <div className="text-xs text-muted-foreground">Your Role</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Joined {circle.joinedAt}
                              </span>
                              <span className="text-success">
                                {circle.recentActivity}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">No circles yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Join your first community circle to start connecting with others
                      </p>
                      <Button onClick={() => setIsJoinDialogOpen(true)}>
                        Join Your First Circle
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Discover Circles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Discover New Circles</span>
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex-1 relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search circles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {filteredDiscoverCircles.map((circle) => (
                      <div key={circle.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium">{circle.name}</h4>
                            <Badge variant="outline" className={getTypeColor(circle.type)}>
                              {getTypeLabel(circle.type)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {circle.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{circle.members.toLocaleString()} members</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{circle.activeRequests} active requests</span>
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="font-semibold">
                      {userCircles.reduce((sum, circle) => sum + circle.members, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Active Requests</span>
                    <span className="font-semibold text-accent">
                      {userCircles.reduce((sum, circle) => sum + circle.activeRequests, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Your Circles</span>
                    <span className="font-semibold text-primary">{userCircles.length}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p><strong>Sarah M.</strong> posted a ride request in NCSU Campus</p>
                        <p className="text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p><strong>Mike R.</strong> offered help in Downtown Raleigh</p>
                        <p className="text-muted-foreground">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p>New member <strong>Alex K.</strong> joined NCSU Campus</p>
                        <p className="text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Circle Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Circle Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/circles/create">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Circle
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Events
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Nearby Circles
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Circles;