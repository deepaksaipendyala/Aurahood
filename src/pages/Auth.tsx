import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/contexts/UserContext";
import { Mail, ArrowLeft, Check, Eye, EyeOff, User, Lock } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { login, register, demoLogin, isLoading, isAuthenticated } = useUser();

  // Form state
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailSent, setEmailSent] = useState(false);

  // Set signup state based on route
  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      setIsSignUp(true);
    } else if (location.pathname === "/auth/signin") {
      setIsSignUp(false);
    }
  }, [location.pathname]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required";
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      if (isSignUp) {
        await register(formData.name, formData.email, formData.password);
        toast({
          title: "Welcome to Aurahood!",
          description: "Your account has been created successfully.",
        });
      } else {
        await login(formData.email, formData.password);
        toast({
          title: "Welcome back!",
          description: "You have been signed in successfully.",
        });
      }
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDemoLogin = async () => {
    try {
      await demoLogin();
      toast({
        title: "Demo login successful!",
        description: "You are now logged in as a demo user.",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Demo login failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleGoogleAuth = async () => {
    toast({
      title: "Coming soon!",
      description: "Google sign-in will be available in the next update.",
    });
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-success" />
            </div>
            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              We've sent a secure sign-in link to <strong>{formData.email}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>Click the link in your email to sign in securely.</p>
              <p className="mt-2">Don't see it? Check your spam folder.</p>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setEmailSent(false)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign in
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Aurahood
            </span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {isSignUp ? "Create your account" : "Welcome back"}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignUp 
                ? "Join your community and start building connections" 
                : "Sign in to your Aurahood account"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">

            {/* Google Sign In */}
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleAuth}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Demo Login */}
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Logging in as Demo...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Try Demo (POC)</span>
                </div>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`pl-10 ${errors.name ? "border-destructive" : ""}`}
                      required={isSignUp}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className={`pl-10 pr-10 ${errors.password ? "border-destructive" : ""}`}
                        required={isSignUp}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className={`pl-10 pr-10 ${errors.confirmPassword ? "border-destructive" : ""}`}
                        required={isSignUp}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                    )}
                  </div>
                </>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-hero hover:opacity-90 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>{isSignUp ? "Creating account..." : "Signing in..."}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>{isSignUp ? "Create Account" : "Sign In"}</span>
                  </div>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"
                }
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        {isSignUp && (
          <div className="text-center text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link to="/legal/terms" className="underline hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/legal/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Aurahood</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;