import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
  roles: string[];
  auraPoints: number;
  trustScore: number;
  createdAt?: string;
  isVerified?: boolean;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<void>;
  register: (name: string, email: string, password?: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  demoLogin: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock demo user data
  const mockUser: User = {
    id: "1",
    name: "Deepak Sai",
    email: "deepak@student.edu",
    avatar: null,
    roles: ["user"],
    auraPoints: 1250,
    trustScore: 4.8,
    createdAt: new Date().toISOString(),
    isVerified: true
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would check for stored tokens or session
        const storedUser = localStorage.getItem('aurahood_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password?: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login logic - in real app, this would validate with backend
      const loginUser: User = {
        ...mockUser,
        email: email,
        name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      };
      
      setUser(loginUser);
      localStorage.setItem('aurahood_user', JSON.stringify(loginUser));
    } catch (error) {
      throw new Error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password?: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock registration logic
      const newUser: User = {
        id: Date.now().toString(),
        name: name,
        email: email,
        avatar: null,
        roles: ["user"],
        auraPoints: 100, // Starting points for new users
        trustScore: 5.0, // Starting trust score
        createdAt: new Date().toISOString(),
        isVerified: false
      };
      
      setUser(newUser);
      localStorage.setItem('aurahood_user', JSON.stringify(newUser));
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aurahood_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('aurahood_user', JSON.stringify(updatedUser));
    }
  };

  const demoLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setUser(mockUser);
      localStorage.setItem('aurahood_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Demo login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const value: UserContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser,
    demoLogin
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
