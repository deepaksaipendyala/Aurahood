import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  Gift, 
  Star, 
  Zap, 
  Filter,
  Search,
  TrendingUp,
  Award,
  ShoppingBag,
  Coffee,
  Film,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Car,
  Heart,
  Crown
} from "lucide-react";

const Rewards = () => {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock rewards data
  const rewards = [
    {
      id: "1",
      name: "Starbucks Gift Card",
      cost: 500,
      description: "$10 Starbucks gift card",
      category: "Food & Beverage",
      image: "☕",
      available: true,
      popularity: 95,
      brand: "Starbucks"
    },
    {
      id: "2", 
      name: "Amazon Gift Card",
      cost: 1000,
      description: "$20 Amazon gift card",
      category: "Shopping",
      image: "📦",
      available: true,
      popularity: 88,
      brand: "Amazon"
    },
    {
      id: "3",
      name: "Movie Theater Tickets",
      cost: 800,
      description: "2 tickets to any movie",
      category: "Entertainment",
      image: "🎬",
      available: true,
      popularity: 72,
      brand: "AMC Theaters"
    },
    {
      id: "4",
      name: "Gym Membership Discount",
      cost: 2000,
      description: "20% off monthly gym membership",
      category: "Health & Fitness",
      image: "💪",
      available: true,
      popularity: 65,
      brand: "Planet Fitness"
    },
    {
      id: "5",
      name: "Uber Gift Card",
      cost: 750,
      description: "$15 Uber ride credits",
      category: "Transportation",
      image: "🚗",
      available: true,
      popularity: 80,
      brand: "Uber"
    },
    {
      id: "6",
      name: "Spotify Premium",
      cost: 1200,
      description: "1 month of Spotify Premium",
      category: "Entertainment",
      image: "🎵",
      available: true,
      popularity: 85,
      brand: "Spotify"
    },
    {
      id: "7",
      name: "Local Coffee Shop",
      cost: 400,
      description: "Free coffee and pastry",
      category: "Food & Beverage",
      image: "🥐",
      available: true,
      popularity: 60,
      brand: "Local Cafe"
    },
    {
      id: "8",
      name: "Book Store Gift Card",
      cost: 600,
      description: "$12 gift card to local bookstore",
      category: "Education",
      image: "📚",
      available: true,
      popularity: 45,
      brand: "Local Bookstore"
    },
    {
      id: "9",
      name: "Gaming Gift Card",
      cost: 900,
      description: "$18 PlayStation Store credit",
      category: "Gaming",
      image: "🎮",
      available: false,
      popularity: 78,
      brand: "PlayStation"
    },
    {
      id: "10",
      name: "Donation to Charity",
      cost: 1500,
      description: "$30 donation to local food bank",
      category: "Charity",
      image: "❤️",
      available: true,
      popularity: 90,
      brand: "Local Food Bank"
    }
  ];

  const redeemedRewards = [
    {
      id: "r1",
      name: "Netflix Gift Card",
      cost: 600,
      description: "$12 Netflix gift card",
      category: "Entertainment",
      image: "🎬",
      redeemedDate: "2024-01-10T10:30:00Z",
      status: "delivered",
      brand: "Netflix"
    },
    {
      id: "r2",
      name: "Coffee Shop Gift Card",
      cost: 300,
      description: "Free coffee and muffin",
      category: "Food & Beverage",
      image: "☕",
      redeemedDate: "2024-01-05T14:20:00Z",
      status: "used",
      brand: "Local Cafe"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: <Gift className="w-4 h-4" /> },
    { id: "Food & Beverage", name: "Food & Beverage", icon: <Coffee className="w-4 h-4" /> },
    { id: "Entertainment", name: "Entertainment", icon: <Film className="w-4 h-4" /> },
    { id: "Shopping", name: "Shopping", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "Health & Fitness", name: "Health & Fitness", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "Transportation", name: "Transportation", icon: <Car className="w-4 h-4" /> },
    { id: "Education", name: "Education", icon: <BookOpen className="w-4 h-4" /> },
    { id: "Gaming", name: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
    { id: "Charity", name: "Charity", icon: <Heart className="w-4 h-4" /> }
  ];

  const filteredRewards = rewards.filter(reward => {
    const matchesSearch = reward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reward.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || reward.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered": return <Badge variant="default" className="bg-green-100 text-green-800">Delivered</Badge>;
      case "used": return <Badge variant="secondary">Used</Badge>;
      case "pending": return <Badge variant="outline">Pending</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 80) return "text-green-600";
    if (popularity >= 60) return "text-yellow-600";
    return "text-gray-600";
  };

  const totalRedeemed = redeemedRewards.reduce((sum, reward) => sum + reward.cost, 0);
  const availablePoints = (user?.auraPoints || 0) - totalRedeemed;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Rewards Center</h1>
            <p className="text-muted-foreground">Redeem your Aura Points for amazing rewards</p>
          </div>

          {/* Points Summary */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-gradient-aura text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{user?.auraPoints?.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Total Points</div>
                  </div>
                  <Zap className="w-8 h-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{availablePoints.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Available to Redeem</div>
                  </div>
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{redeemedRewards.length}</div>
                    <div className="text-sm text-muted-foreground">Rewards Redeemed</div>
                  </div>
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search rewards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.icon}
                  <span className="ml-2 hidden sm:inline">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="available" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="available">Available Rewards</TabsTrigger>
              <TabsTrigger value="redeemed">Redeemed</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <TabsContent value="available" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRewards.map((reward) => (
                  <Card key={reward.id} className={!reward.available ? "opacity-50" : "hover:shadow-lg transition-shadow"}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl">{reward.image}</div>
                        <div className="flex flex-col items-end space-y-1">
                          <Badge variant={reward.available ? "default" : "secondary"} className="text-xs">
                            {reward.available ? "Available" : "Coming Soon"}
                          </Badge>
                          <div className={`text-xs ${getPopularityColor(reward.popularity)}`}>
                            {reward.popularity}% popular
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{reward.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="font-medium">{reward.cost}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{reward.brand}</div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{reward.category}</span>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>{reward.popularity}%</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full" 
                          disabled={!reward.available || availablePoints < reward.cost}
                        >
                          {!reward.available ? "Coming Soon" : 
                           availablePoints < reward.cost ? "Insufficient Points" : "Redeem Now"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="redeemed" className="space-y-4">
              <div className="space-y-3">
                {redeemedRewards.map((reward) => (
                  <Card key={reward.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{reward.image}</div>
                        <div className="flex-1">
                          <div className="font-medium">{reward.name}</div>
                          <div className="text-sm text-muted-foreground">{reward.description}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Redeemed on {new Date(reward.redeemedDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="font-medium">{reward.cost}</span>
                          </div>
                          {getStatusBadge(reward.status)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rewards
                  .filter(reward => reward.available)
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 6)
                  .map((reward) => (
                  <Card key={reward.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl">{reward.image}</div>
                        <div className="flex flex-col items-end space-y-1">
                          <Badge variant="default" className="bg-orange-100 text-orange-800">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                          <div className={`text-xs ${getPopularityColor(reward.popularity)}`}>
                            {reward.popularity}% popular
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{reward.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="font-medium">{reward.cost}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{reward.brand}</div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{reward.category}</span>
                          <div className="flex items-center space-x-1">
                            <Crown className="w-3 h-3 text-yellow-500" />
                            <span>Top Choice</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full" 
                          disabled={availablePoints < reward.cost}
                        >
                          {availablePoints < reward.cost ? "Insufficient Points" : "Redeem Now"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Earning Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Earn More Points</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <div className="font-medium">Share Rides</div>
                  <div className="text-sm text-muted-foreground">Earn 50-150 points per ride</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏠</div>
                  <div className="font-medium">Help Neighbors</div>
                  <div className="text-sm text-muted-foreground">Earn 75-200 points per task</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-medium">Complete Challenges</div>
                  <div className="text-sm text-muted-foreground">Earn bonus points weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="font-medium">Maintain Rating</div>
                  <div className="text-sm text-muted-foreground">Get 10% bonus points</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Rewards;
