
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  Heart, 
  Home, 
  MessageSquare, 
  Package, 
  Settings, 
  ShoppingCart, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  
  // Mock data for orders
  const orders = [
    {
      id: "ORD-1234",
      date: "2023-09-15",
      status: "completed",
      title: "Custom Wedding Invitation",
      price: "$249.00",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ORD-2345",
      date: "2023-10-02",
      status: "in-progress",
      title: "Family Name Artwork",
      price: "$149.00",
      image: "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ORD-3456",
      date: "2023-10-20",
      status: "pending",
      title: "Business Logo Design",
      price: "$399.00",
      image: "https://images.unsplash.com/photo-1544070078-a212eda27b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  // Mock data for saved designs
  const savedDesigns = [
    {
      id: "DES-1234",
      title: "Anniversary Quote",
      type: "Custom Quote",
      preview: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      saved: "2023-09-10",
    },
    {
      id: "DES-2345",
      title: "Wedding Invitation Design",
      type: "Wedding",
      preview: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      saved: "2023-09-18",
    },
    {
      id: "DES-3456",
      title: "Coffee Shop Logo",
      type: "Business Branding",
      preview: "https://images.unsplash.com/photo-1618771414747-2a2614af9a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      saved: "2023-10-05",
    },
  ];
  
  // Mock data for messages
  const messages = [
    {
      id: "MSG-1234",
      from: "AK Calligraphy Team",
      subject: "Your Order Update",
      preview: "Hello! We wanted to update you on your recent order...",
      date: "Oct 15, 2023",
      read: false,
    },
    {
      id: "MSG-2345",
      from: "Sarah from AK Calligraphy",
      subject: "Design Confirmation",
      preview: "Thank you for your design choices. We'd like to confirm...",
      date: "Oct 10, 2023",
      read: true,
    },
    {
      id: "MSG-3456",
      from: "AK Calligraphy Support",
      subject: "Your Recent Inquiry",
      preview: "Thank you for contacting us about your custom project...",
      date: "Oct 5, 2023",
      read: true,
    },
  ];
  
  // Mock data for user
  const user = {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    image: "",
    initials: "EJ",
    joined: "August 2023",
  };
  
  // Sidebar items
  const sidebarItems = [
    { icon: Home, label: "Dashboard", id: "dashboard" },
    { icon: ShoppingCart, label: "Orders", id: "orders" },
    { icon: Heart, label: "Saved Designs", id: "saved" },
    { icon: MessageSquare, label: "Messages", id: "messages" },
    { icon: Calendar, label: "Appointments", id: "appointments" },
    { icon: FileText, label: "Invoices", id: "invoices" },
    { icon: User, label: "Profile", id: "profile" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];
  
  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            In Progress
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {status}
          </Badge>
        );
    }
  };

  return (
    <div className="pt-16">
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-secondary/30 border-r">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">Member since {user.joined}</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={cn(
                      "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/">Return to Website</Link>
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-heading font-bold mb-1">Welcome back, {user.name.split(" ")[0]}</h1>
            <p className="text-muted-foreground mb-8">Manage your calligraphy orders and saved designs</p>
            
            {/* Mobile Tabs Navigation */}
            <div className="md:hidden mb-6">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Your Orders</h2>
                  <Button variant="outline" size="sm">
                    <Package className="h-4 w-4 mr-2" />
                    Track Orders
                  </Button>
                </div>
                
                {orders.length > 0 ? (
                  <div className="grid gap-6">
                    {orders.map((order) => (
                      <Card key={order.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r">
                            <img
                              src={order.image}
                              alt={order.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-medium mb-1">{order.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                  Order #{order.id} • {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                {renderStatusBadge(order.status)}
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <p className="text-lg font-medium">
                                {order.price}
                              </p>
                              <div className="space-x-2 mt-4 md:mt-0">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                                <Button size="sm">
                                  {order.status === "completed" ? "Reorder" : "Contact Us"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 pb-4 text-center">
                      <p className="text-muted-foreground">
                        You don't have any orders yet.
                      </p>
                      <Button className="mt-4" asChild>
                        <Link to="/services">Explore Services</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
            
            {/* Saved Designs Tab */}
            {activeTab === "saved" && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Saved Designs</h2>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                </div>
                
                {savedDesigns.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedDesigns.map((design) => (
                      <Card key={design.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={design.preview}
                            alt={design.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-medium">{design.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {design.type}
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="ghost" size="sm">
                            Remove
                          </Button>
                          <Button size="sm">
                            Order Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 pb-4 text-center">
                      <p className="text-muted-foreground">
                        You don't have any saved designs yet.
                      </p>
                      <Button className="mt-4" asChild>
                        <Link to="/services">Explore Services</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
            
            {/* Messages Tab */}
            {activeTab === "messages" && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Messages</h2>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    New Message
                  </Button>
                </div>
                
                {messages.length > 0 ? (
                  <div className="grid gap-3">
                    {messages.map((message) => (
                      <Card 
                        key={message.id}
                        className={cn(
                          "p-4 transition-colors cursor-pointer hover:bg-secondary/50",
                          !message.read && "bg-primary/5 border-primary/20"
                        )}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className={cn(
                                "font-medium",
                                !message.read && "font-semibold"
                              )}>
                                {message.from}
                              </h3>
                              {!message.read && (
                                <Badge className="h-2 w-2 p-0 rounded-full bg-primary" />
                              )}
                            </div>
                            <p className="text-sm font-medium">{message.subject}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {message.preview}
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground ml-4">
                            {message.date}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 pb-4 text-center">
                      <p className="text-muted-foreground">
                        You don't have any messages yet.
                      </p>
                      <Button className="mt-4" asChild>
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
            
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Your Profile</h2>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Manage your personal information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback className="text-xl">{user.initials}</AvatarFallback>
                      </Avatar>
                      
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Member since {user.joined}
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Change Avatar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid gap-6 pt-4 border-t">
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">Password</p>
                        <p className="text-sm text-muted-foreground">
                          ••••••••
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto w-auto text-sm justify-start"
                        >
                          Change password
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Manage how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about your orders
                          </p>
                        </div>
                        <div>
                          {/* This would be a toggle component in a real app */}
                          <div className="h-6 w-11 bg-primary rounded-full relative">
                            <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Emails</p>
                          <p className="text-sm text-muted-foreground">
                            Receive special offers and promotions
                          </p>
                        </div>
                        <div>
                          {/* This would be a toggle component in a real app */}
                          <div className="h-6 w-11 bg-secondary rounded-full relative">
                            <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Show default welcome content for other tabs */}
            {!["orders", "saved", "messages", "profile"].includes(activeTab) && (
              <div className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6 pb-4 text-center">
                    <h2 className="text-xl font-medium mb-2">Coming Soon</h2>
                    <p className="text-muted-foreground">
                      This feature is currently under development. Check back soon!
                    </p>
                    <Button className="mt-4" asChild>
                      <Link to="/">Return to Homepage</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
