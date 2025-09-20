import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  Plus, 
  Search, 
  Filter,
  Car, 
  Shield, 
  Home, 
  Calendar,
  Clock,
  MapPin,
  User,
  Star,
  MessageSquare
} from "lucide-react";

const Requests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data - in real app, this would come from Supabase
  const myRequests = [
    {
      id: "1",
      title: "Ride to Airport",
      category: "ride",
      status: "matched",
      description: "Need a ride to RDU airport for 6 AM flight",
      fromLocation: "NCSU Campus",
      toLocation: "RDU Airport",
      startTime: "2024-01-15T06:00:00",
      auraPoints: 25,
      helper: {
        name: "Sarah K.",
        rating: 4.9,
        avatar: null
      },
      createdAt: "2024-01-10T10:00:00"
    },
    {
      id: "2",
      title: "Help Moving Furniture",
      category: "home_help", 
      status: "open",
      description: "Need help moving a couch and table to new apartment",
      fromLocation: "Avent Ferry Rd",
      toLocation: "Centennial Campus",
      startTime: "2024-01-20T14:00:00",
      auraPoints: 40,
      createdAt: "2024-01-12T15:00:00"
    }
  ];

  const availableRequests = [
    {
      id: "3",
      title: "Grocery Store Companion",
      category: "escort",
      status: "open",
      description: "Senior needs assistance with grocery shopping",
      fromLocation: "Downtown Raleigh",
      toLocation: "Harris Teeter",
      startTime: "2024-01-16T10:00:00",
      auraPoints: 15,
      requester: {
        name: "Maria G.",
        rating: 4.7,
        avatar: null
      },
      distance: "0.8 miles",
      createdAt: "2024-01-14T09:00:00"
    },
    {
      id: "4",
      title: "Tech Support Help",
      category: "home_help",
      status: "open", 
      description: "Need help setting up new computer and internet",
      fromLocation: "Cary",
      toLocation: "Same location",
      startTime: "2024-01-17T18:00:00",
      auraPoints: 20,
      requester: {
        name: "Robert P.",
        rating: 4.8,
        avatar: null
      },
      distance: "1.2 miles",
      createdAt: "2024-01-13T16:00:00"
    },
    {
      id: "5",
      title: "Concert Companion", 
      category: "event_help",
      status: "open",
      description: "Looking for someone to attend concert with for safety",
      fromLocation: "Red Hat Amphitheater",
      toLocation: "Same location",
      startTime: "2024-01-19T19:00:00",
      auraPoints: 30,
      requester: {
        name: "Jamie L.",
        rating: 4.9,
        avatar: null
      },
      distance: "2.1 miles",
      createdAt: "2024-01-11T20:00:00"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ride": return Car;
      case "escort": return Shield;
      case "home_help": return Home;
      case "event_help": return Calendar;
      default: return Plus;
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-blue-100 text-blue-800";
      case "matched": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const filterRequests = (requests: any[]) => {
    return requests.filter(request => {
      const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           request.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || request.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || request.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  const RequestCard = ({ request, showRequester = false, showHelper = false }: any) => {
    const Icon = getTypeIcon(request.category);
    const dateTime = formatDateTime(request.startTime);
    
    return (
      <Card className="hover:shadow-card transition-smooth">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4 flex-1">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(request.category)}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-lg">{request.title}</h3>
                  <Badge className={getStatusColor(request.status)}>
                    {request.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-3">{request.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{request.fromLocation}</span>
                    {request.toLocation !== request.fromLocation && (
                      <>
                        <span>→</span>
                        <span>{request.toLocation}</span>
                      </>
                    )}
                  </div>
                  {request.distance && (
                    <div className="flex items-center space-x-1">
                      <span>•</span>
                      <span>{request.distance}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{dateTime.date} at {dateTime.time}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-semibold text-aura-gold mb-2">
                +{request.auraPoints} points
              </div>
              {request.status === "open" && (
                <Button size="sm">
                  {showRequester ? "Offer Help" : "Edit"}
                </Button>
              )}
              {request.status === "matched" && showHelper && (
                <div className="text-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{request.helper.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs">{request.helper.rating}</span>
                  </div>
                </div>
              )}
              {request.status === "matched" && showRequester && (
                <div className="text-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{request.requester.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs">{request.requester.rating}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {showRequester && (
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">{request.requester.name}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-muted-foreground">{request.requester.rating} rating</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Message
                </Button>
                <Button size="sm">
                  Offer Help
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Requests</h1>
              <p className="text-muted-foreground">Help others or get the support you need</p>
            </div>
            
            <Button className="flex items-center space-x-2" asChild>
              <Link to="/requests/new">
                <Plus className="w-4 h-4" />
                <span>New Request</span>
              </Link>
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="ride">Rides</SelectItem>
                    <SelectItem value="escort">Escort</SelectItem>
                    <SelectItem value="home_help">Home Help</SelectItem>
                    <SelectItem value="event_help">Event Help</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="matched">Matched</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="available" className="space-y-6">
            <TabsList className="grid w-full md:w-auto md:grid-cols-2">
              <TabsTrigger value="available">Available to Help</TabsTrigger>
              <TabsTrigger value="mine">My Requests</TabsTrigger>
            </TabsList>

            <TabsContent value="available" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Requests You Can Help With</h2>
                <Badge variant="secondary">
                  {filterRequests(availableRequests).length} available
                </Badge>
              </div>
              
              {filterRequests(availableRequests).length > 0 ? (
                <div className="space-y-4">
                  {filterRequests(availableRequests).map((request) => (
                    <RequestCard key={request.id} request={request} showRequester={true} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">No requests found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filters to find requests you can help with
                    </p>
                    <Button variant="outline" onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("all");
                      setStatusFilter("all");
                    }}>
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="mine" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Requests</h2>
                <Badge variant="secondary">
                  {filterRequests(myRequests).length} requests
                </Badge>
              </div>
              
              {filterRequests(myRequests).length > 0 ? (
                <div className="space-y-4">
                  {filterRequests(myRequests).map((request) => (
                    <RequestCard key={request.id} request={request} showHelper={true} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Plus className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">No requests yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Create your first request to get help from your community
                    </p>
                    <Button asChild>
                      <Link to="/requests/new">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Request
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Requests;