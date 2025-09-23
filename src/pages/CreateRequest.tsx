import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  ArrowLeft,
  Car,
  Home,
  Users,
  Clock,
  MapPin,
  Calendar,
  DollarSign,
  MessageCircle,
  Shield,
  Star,
  Zap,
  Plus,
  X,
  AlertCircle
} from "lucide-react";

const CreateRequest = () => {
  const navigate = useNavigate();
  const { user } = useToast();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    date: "",
    time: "",
    duration: "",
    urgency: "normal",
    budget: "",
    requirements: [] as string[],
    additionalInfo: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    {
      id: "transportation",
      name: "Transportation",
      icon: <Car className="w-5 h-5" />,
      description: "Rides, carpooling, airport trips",
      basePrice: 75,
      examples: ["Airport pickup", "Grocery store run", "Doctor appointment", "Campus ride"]
    },
    {
      id: "home_help",
      name: "Home Help",
      icon: <Home className="w-5 h-5" />,
      description: "Household tasks and maintenance",
      basePrice: 50,
      examples: ["Grocery shopping", "Pet care", "House cleaning", "Moving help"]
    },
    {
      id: "companionship",
      name: "Companionship",
      icon: <Users className="w-5 h-5" />,
      description: "Social activities and events",
      basePrice: 60,
      examples: ["Movie companion", "Walking buddy", "Event partner", "Study group"]
    },
    {
      id: "tech_support",
      name: "Tech Support",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Technology assistance and setup",
      basePrice: 80,
      examples: ["Laptop setup", "Phone help", "Software install", "WiFi setup"]
    },
    {
      id: "elder_care",
      name: "Elder Care",
      icon: <Shield className="w-5 h-5" />,
      description: "Assistance for seniors",
      basePrice: 70,
      examples: ["Medication reminder", "Doctor visits", "Grocery help", "Companion care"]
    }
  ];

  const urgencyLevels = [
    { value: "low", label: "Low", color: "bg-green-100 text-green-800", description: "Flexible timing" },
    { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-800", description: "Standard priority" },
    { value: "high", label: "High", color: "bg-orange-100 text-orange-800", description: "Urgent but not emergency" },
    { value: "emergency", label: "Emergency", color: "bg-red-100 text-red-800", description: "Immediate assistance needed" }
  ];

  const durations = [
    { value: "15min", label: "15 minutes" },
    { value: "30min", label: "30 minutes" },
    { value: "1hour", label: "1 hour" },
    { value: "2hours", label: "2 hours" },
    { value: "half-day", label: "Half day (4 hours)" },
    { value: "full-day", label: "Full day (8 hours)" },
    { value: "custom", label: "Custom duration" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleRequirementToggle = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    if (!formData.duration) {
      newErrors.duration = "Please select duration";
    }

    if (formData.budget && isNaN(Number(formData.budget))) {
      newErrors.budget = "Budget must be a valid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Request Created!",
        description: "Your request has been posted and is visible to the community.",
      });
      
      navigate("/requests");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCategory = categories.find(cat => cat.id === formData.category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/requests">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Requests
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold mb-2">Create New Request</h1>
            <p className="text-muted-foreground">Tell the community how they can help you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Request Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Need ride to airport tomorrow"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className={errors.title ? "border-destructive" : ""}
                  />
                  {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Category *</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.category === category.id
                            ? "border-primary bg-primary/5"
                            : "border-muted hover:border-primary/50"
                        }`}
                        onClick={() => handleInputChange("category", category.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            formData.category === category.id ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{category.name}</div>
                            <div className="text-sm text-muted-foreground">{category.description}</div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Zap className="w-3 h-3 text-primary" />
                              <span className="text-xs text-primary">~{category.basePrice} points</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about what you need help with..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className={errors.description ? "border-destructive" : ""}
                    rows={4}
                  />
                  <div className="text-xs text-muted-foreground">
                    {formData.description.length}/500 characters (minimum 20)
                  </div>
                  {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Location & Timing */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="location"
                      placeholder="e.g., NC State Campus, Raleigh"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className={`pl-10 ${errors.location ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className={`pl-10 ${errors.date ? "border-destructive" : ""}`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        className={`pl-10 ${errors.time ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Duration *</Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                    <SelectTrigger className={errors.duration ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.duration && <p className="text-sm text-destructive">{errors.duration}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Additional Details */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Urgency Level</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {urgencyLevels.map((level) => (
                      <div
                        key={level.value}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.urgency === level.value
                            ? "border-primary bg-primary/5"
                            : "border-muted hover:border-primary/50"
                        }`}
                        onClick={() => handleInputChange("urgency", level.value)}
                      >
                        <Badge className={`mb-2 ${level.color}`}>{level.label}</Badge>
                        <div className="text-sm text-muted-foreground">{level.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (Optional)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="budget"
                      placeholder="Maximum points you're willing to pay"
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      className={`pl-10 ${errors.budget ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.budget && <p className="text-sm text-destructive">{errors.budget}</p>}
                  {selectedCategory && (
                    <p className="text-xs text-muted-foreground">
                      Suggested: ~{selectedCategory.basePrice} points
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Requirements (Optional)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Background check required",
                      "Must have car",
                      "Non-smoker preferred",
                      "Pet-friendly",
                      "Wheelchair accessible",
                      "Weekend availability"
                    ].map((requirement) => (
                      <div
                        key={requirement}
                        className={`p-2 border rounded cursor-pointer transition-all ${
                          formData.requirements.includes(requirement)
                            ? "border-primary bg-primary/5"
                            : "border-muted hover:border-primary/50"
                        }`}
                        onClick={() => handleRequirementToggle(requirement)}
                      >
                        <div className="text-sm">{requirement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any other details or special instructions..."
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preview & Submit */}
            <Card>
              <CardHeader>
                <CardTitle>Preview & Submit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{formData.title || "Request Title"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedCategory?.name || "Category"} • {formData.location || "Location"}
                      </p>
                    </div>
                    <Badge className={urgencyLevels.find(u => u.value === formData.urgency)?.color}>
                      {urgencyLevels.find(u => u.value === formData.urgency)?.label || "Normal"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formData.description || "Description will appear here..."}
                  </p>
                  <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formData.date || "Date"}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{formData.time || "Time"}</span>
                    </div>
                    {formData.budget && (
                      <div className="flex items-center space-x-1">
                        <Zap className="w-3 h-3" />
                        <span>{formData.budget} points</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" asChild>
                    <Link to="/requests">Cancel</Link>
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="bg-gradient-hero hover:opacity-90">
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Creating Request...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Create Request</span>
                      </div>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateRequest;
