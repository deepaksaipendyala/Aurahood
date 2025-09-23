import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  Wallet as WalletIcon, 
  Plus, 
  Minus, 
  TrendingUp, 
  TrendingDown,
  Gift,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Award,
  History,
  Filter
} from "lucide-react";

// Mock data moved outside component to prevent recreation on every render
const mockTransactions = [
    {
      id: "1",
      type: "earned",
      amount: 150,
      description: "Helped Sarah with grocery shopping",
      category: "Home Help",
      date: "2024-01-15T10:30:00Z",
      status: "completed",
      fromUser: "Sarah Chen",
      location: "Harris Teeter, Raleigh"
    },
    {
      id: "2", 
      type: "spent",
      amount: -75,
      description: "Requested ride to airport",
      category: "Transportation",
      date: "2024-01-14T08:15:00Z",
      status: "completed",
      toUser: "Mike Johnson",
      location: "RDU Airport"
    },
    {
      id: "3",
      type: "earned",
      amount: 200,
      description: "Provided tech support for laptop setup",
      category: "Tech Support",
      date: "2024-01-13T19:45:00Z",
      status: "completed",
      fromUser: "Emma Davis",
      location: "NC State Campus"
    },
    {
      id: "4",
      type: "bonus",
      amount: 50,
      description: "Weekly community helper bonus",
      category: "Bonus",
      date: "2024-01-12T00:00:00Z",
      status: "completed",
      fromUser: "Aurahood System",
      location: "Community Rewards"
    },
    {
      id: "5",
      type: "spent",
      amount: -100,
      description: "Requested event companion",
      category: "Companionship",
      date: "2024-01-11T14:20:00Z",
      status: "pending",
      toUser: "Alex Rodriguez",
      location: "Durham Performing Arts Center"
    }
  ];

const mockRewards = [
    {
      id: "1",
      name: "Starbucks Gift Card",
      cost: 500,
      description: "$10 Starbucks gift card",
      category: "Food & Beverage",
      image: "☕",
      available: true
    },
    {
      id: "2", 
      name: "Amazon Gift Card",
      cost: 1000,
      description: "$20 Amazon gift card",
      category: "Shopping",
      image: "📦",
      available: true
    },
    {
      id: "3",
      name: "Movie Theater Tickets",
      cost: 800,
      description: "2 tickets to any movie",
      category: "Entertainment",
      image: "🎬",
      available: true
    },
    {
      id: "4",
      name: "Gym Membership Discount",
      cost: 2000,
      description: "20% off monthly gym membership",
      category: "Health & Fitness",
      image: "💪",
      available: false
    }
  ];

const Wallet = () => {
  const { user } = useUser();
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Use memoized calculations for better performance
  const { totalEarned, totalSpent, netEarned } = useMemo(() => {
    const earned = mockTransactions.filter(t => t.type === "earned" || t.type === "bonus").reduce((sum, t) => sum + t.amount, 0);
    const spent = Math.abs(mockTransactions.filter(t => t.type === "spent").reduce((sum, t) => sum + t.amount, 0));
    return {
      totalEarned: earned,
      totalSpent: spent,
      netEarned: earned - spent
    };
  }, []);

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "earned": return <ArrowUpRight className="w-4 h-4 text-green-500" />;
      case "spent": return <ArrowDownLeft className="w-4 h-4 text-red-500" />;
      case "bonus": return <Gift className="w-4 h-4 text-purple-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>;
      case "pending": return <Badge variant="secondary">Pending</Badge>;
      case "cancelled": return <Badge variant="destructive">Cancelled</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Wallet</h1>
            <p className="text-muted-foreground">Manage your Aura Points and transactions</p>
          </div>

          {/* Balance Card */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-aura text-white border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center space-x-2">
                      <WalletIcon className="w-6 h-6" />
                      <span>Current Balance</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">{user?.auraPoints?.toLocaleString()}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-200">Total Earned</div>
                      <div className="text-xl font-semibold">+{totalEarned.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-red-200">Total Spent</div>
                      <div className="text-xl font-semibold">-{totalSpent.toLocaleString()}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link to="/requests/new">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Request
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Gift className="w-4 h-4 mr-2" />
                    Redeem Rewards
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Net Earned</span>
                      <span className={`font-medium ${netEarned >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {netEarned >= 0 ? '+' : ''}{netEarned.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Transactions</span>
                      <span className="font-medium">{mockTransactions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active Requests</span>
                      <span className="font-medium">2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="transactions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Transaction History</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                {mockTransactions.map((transaction) => (
                  <Card key={transaction.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-muted rounded-lg">
                            {getTransactionIcon(transaction.type)}
                          </div>
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.category} • {transaction.fromUser || transaction.toUser}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(transaction.date).toLocaleDateString()} • {transaction.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                          </div>
                          <div className="text-sm">
                            {getStatusBadge(transaction.status)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Available Rewards</h2>
                <Badge variant="outline" className="text-sm">
                  {user?.auraPoints} Points Available
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockRewards.map((reward) => (
                  <Card key={reward.id} className={!reward.available ? "opacity-50" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">{reward.image}</div>
                        <Badge variant={reward.available ? "default" : "secondary"}>
                          {reward.available ? "Available" : "Coming Soon"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{reward.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="font-medium">{reward.cost}</span>
                          </div>
                          <Button 
                            size="sm" 
                            disabled={!reward.available || (user?.auraPoints || 0) < reward.cost}
                            className={!reward.available ? "opacity-50" : ""}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <h2 className="text-xl font-semibold">Spending Analytics</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Category Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Transportation", amount: 175, percentage: 35, color: "bg-blue-500" },
                        { name: "Home Help", amount: 150, percentage: 30, color: "bg-green-500" },
                        { name: "Tech Support", amount: 200, percentage: 25, color: "bg-purple-500" },
                        { name: "Companionship", amount: 100, percentage: 10, color: "bg-orange-500" }
                      ].map((category) => (
                        <div key={category.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{category.name}</span>
                              <span>{category.amount.toFixed(2)} pts</span>
                            </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${category.color}`}
                              style={{ width: `${category.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Earnings</span>
                        </div>
                        <span className="font-medium text-green-600">+23%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingDown className="w-4 h-4 text-red-500" />
                          <span className="text-sm">Spending</span>
                        </div>
                        <span className="font-medium text-red-600">-12%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span className="text-sm">Community Rank</span>
                        </div>
                        <span className="font-medium">#47</span>
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

export default Wallet;
