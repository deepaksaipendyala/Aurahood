import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  Settings,
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  Trash2,
  AlertTriangle,
  Check,
  X,
  Moon,
  Sun,
  Monitor
} from "lucide-react";

const Settings = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState("profile");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileSettings, setProfileSettings] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    location: "Raleigh, NC",
    bio: "",
    timezone: "America/New_York"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    requestUpdates: true,
    communityNews: true,
    weeklyDigest: true,
    achievementAlerts: true,
    safetyAlerts: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showLocation: true,
    showContactInfo: false,
    showActivityHistory: true,
    allowMessages: true,
    showOnlineStatus: true,
    dataSharing: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    deviceManagement: true,
    sessionTimeout: "30min"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const timezones = [
    "America/New_York",
    "America/Chicago", 
    "America/Denver",
    "America/Los_Angeles",
    "America/Phoenix",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo"
  ];

  const sessionTimeouts = [
    { value: "15min", label: "15 minutes" },
    { value: "30min", label: "30 minutes" },
    { value: "1hour", label: "1 hour" },
    { value: "2hours", label: "2 hours" },
    { value: "never", label: "Never" }
  ];

  const handleSaveProfile = () => {
    updateUser({
      name: profileSettings.name,
      email: profileSettings.email
    });
    // Show success message
  };

  const handleSaveNotifications = () => {
    // Save notification preferences
    console.log("Notification settings saved:", notificationSettings);
  };

  const handleSavePrivacy = () => {
    // Save privacy preferences
    console.log("Privacy settings saved:", privacySettings);
  };

  const handleSaveSecurity = () => {
    // Save security preferences
    console.log("Security settings saved:", securitySettings);
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match");
      return;
    }
    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    // Change password logic
    console.log("Password changed");
    setIsChangingPassword(false);
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Delete account logic
      console.log("Account deletion requested");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and security settings</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Profile Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileSettings.name}
                        onChange={(e) => setProfileSettings({...profileSettings, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileSettings.email}
                        onChange={(e) => setProfileSettings({...profileSettings, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={profileSettings.phone}
                        onChange={(e) => setProfileSettings({...profileSettings, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profileSettings.location}
                        onChange={(e) => setProfileSettings({...profileSettings, location: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select 
                      value={profileSettings.timezone} 
                      onValueChange={(value) => setProfileSettings({...profileSettings, timezone: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={4}
                      value={profileSettings.bio}
                      onChange={(e) => setProfileSettings({...profileSettings, bio: e.target.value})}
                      placeholder="Tell the community about yourself..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} className="bg-gradient-hero hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                      </div>
                      <Switch
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailNotifications: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive push notifications on mobile</div>
                      </div>
                      <Switch
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Request Updates</div>
                        <div className="text-sm text-muted-foreground">Get notified about your requests</div>
                      </div>
                      <Switch
                        checked={notificationSettings.requestUpdates}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, requestUpdates: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Community News</div>
                        <div className="text-sm text-muted-foreground">Receive community updates and news</div>
                      </div>
                      <Switch
                        checked={notificationSettings.communityNews}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, communityNews: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Weekly Digest</div>
                        <div className="text-sm text-muted-foreground">Weekly summary of your activity</div>
                      </div>
                      <Switch
                        checked={notificationSettings.weeklyDigest}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, weeklyDigest: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Achievement Alerts</div>
                        <div className="text-sm text-muted-foreground">Get notified when you earn achievements</div>
                      </div>
                      <Switch
                        checked={notificationSettings.achievementAlerts}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, achievementAlerts: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Safety Alerts</div>
                        <div className="text-sm text-muted-foreground">Important safety and security notifications</div>
                      </div>
                      <Switch
                        checked={notificationSettings.safetyAlerts}
                        onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, safetyAlerts: checked})}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSaveNotifications} className="bg-gradient-hero hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Privacy Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Profile Visibility</Label>
                      <Select 
                        value={privacySettings.profileVisibility} 
                        onValueChange={(value) => setPrivacySettings({...privacySettings, profileVisibility: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public - Everyone can see your profile</SelectItem>
                          <SelectItem value="community">Community - Only community members can see</SelectItem>
                          <SelectItem value="private">Private - Only you can see</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show Location</div>
                        <div className="text-sm text-muted-foreground">Display your location on requests</div>
                      </div>
                      <Switch
                        checked={privacySettings.showLocation}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showLocation: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show Contact Info</div>
                        <div className="text-sm text-muted-foreground">Allow others to see your contact information</div>
                      </div>
                      <Switch
                        checked={privacySettings.showContactInfo}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showContactInfo: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show Activity History</div>
                        <div className="text-sm text-muted-foreground">Display your recent activities on profile</div>
                      </div>
                      <Switch
                        checked={privacySettings.showActivityHistory}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showActivityHistory: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Allow Messages</div>
                        <div className="text-sm text-muted-foreground">Let other members send you messages</div>
                      </div>
                      <Switch
                        checked={privacySettings.allowMessages}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, allowMessages: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show Online Status</div>
                        <div className="text-sm text-muted-foreground">Display when you're active</div>
                      </div>
                      <Switch
                        checked={privacySettings.showOnlineStatus}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showOnlineStatus: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Sharing</div>
                        <div className="text-sm text-muted-foreground">Allow anonymized data for research</div>
                      </div>
                      <Switch
                        checked={privacySettings.dataSharing}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, dataSharing: checked})}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSavePrivacy} className="bg-gradient-hero hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span>Security Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                      </div>
                      <Switch
                        checked={securitySettings.twoFactorAuth}
                        onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorAuth: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Login Alerts</div>
                        <div className="text-sm text-muted-foreground">Get notified of new login attempts</div>
                      </div>
                      <Switch
                        checked={securitySettings.loginAlerts}
                        onCheckedChange={(checked) => setSecuritySettings({...securitySettings, loginAlerts: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Device Management</div>
                        <div className="text-sm text-muted-foreground">Manage connected devices</div>
                      </div>
                      <Switch
                        checked={securitySettings.deviceManagement}
                        onCheckedChange={(checked) => setSecuritySettings({...securitySettings, deviceManagement: checked})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Session Timeout</Label>
                      <Select 
                        value={securitySettings.sessionTimeout} 
                        onValueChange={(value) => setSecuritySettings({...securitySettings, sessionTimeout: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sessionTimeouts.map((timeout) => (
                            <SelectItem key={timeout.value} value={timeout.value}>
                              {timeout.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-medium">Change Password</div>
                          <div className="text-sm text-muted-foreground">Update your account password</div>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsChangingPassword(!isChangingPassword)}
                        >
                          Change Password
                        </Button>
                      </div>

                      {isChangingPassword && (
                        <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <div className="relative">
                              <Input
                                id="currentPassword"
                                type={showCurrentPassword ? "text" : "password"}
                                value={passwordData.currentPassword}
                                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                              >
                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <div className="relative">
                              <Input
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                              >
                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <div className="relative">
                              <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button onClick={handleChangePassword}>
                              <Check className="w-4 h-4 mr-2" />
                              Update Password
                            </Button>
                            <Button variant="outline" onClick={() => setIsChangingPassword(false)}>
                              <X className="w-4 h-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSaveSecurity} className="bg-gradient-hero hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Account Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Download Data</div>
                          <div className="text-sm text-muted-foreground">Export all your account data</div>
                        </div>
                        <Button variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Reset Preferences</div>
                          <div className="text-sm text-muted-foreground">Reset all settings to default</div>
                        </div>
                        <Button variant="outline">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-red-800">Deactivate Account</div>
                          <div className="text-sm text-red-600">Temporarily disable your account</div>
                        </div>
                        <Button variant="destructive">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Deactivate
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-red-800">Delete Account</div>
                          <div className="text-sm text-red-600">Permanently delete your account and data</div>
                        </div>
                        <Button variant="destructive" onClick={handleDeleteAccount}>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;
