
import { useState } from "react";
import { MainLayout } from "../components/Layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MasonryPostGrid } from "../components/MasonryPostGrid";
import { MapPin, Calendar, Link, Edit, Settings } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  // Mock data for demonstration - updated to match Post interface
  const userPosts = [
    {
      id: "1",
      businessName: "Bogdan Nikitin",
      businessAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      content: "Just finished an amazing coding session! The new features are looking great.",
      media: [{ url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop", type: "image" }],
      likes: 42,
      comments: 8,
      timeAgo: "2h",
      height: 300
    }
  ];

  const savedPosts = [
    {
      id: "2",
      businessName: "Jane Smith",
      businessAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612c8e9?w=60&h=60&fit=crop&crop=face",
      content: "Beautiful sunset from my balcony today 🌅",
      media: [{ url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop", type: "image" }],
      likes: 89,
      comments: 12,
      timeAgo: "1d",
      height: 280
    }
  ];

  const followingUsers = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "@alexj",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      isFollowing: true
    },
    {
      id: 2,
      name: "Sarah Wilson",
      username: "@sarahw",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      isFollowing: true
    }
  ];

  const followingBusinesses = [
    {
      id: 1,
      name: "TechCorp",
      username: "@techcorp",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
      isFollowing: true,
      verified: true
    },
    {
      id: 2,
      name: "Design Studio",
      username: "@designstudio",
      avatar: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=60&h=60&fit=crop",
      isFollowing: true,
      verified: true
    }
  ];

  return (
    <MainLayout>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="w-32 h-32 border-4 border-purple-500/30">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" />
                    <AvatarFallback>BN</AvatarFallback>
                  </Avatar>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-white">Bogdan Nikitin</h1>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-gray-400 mb-3">@nikitinteam</p>
                  
                  <p className="text-gray-300 mb-4">
                    Full-stack developer passionate about creating amazing user experiences. 
                    Love working with React, TypeScript, and modern web technologies.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-1">
                      <Link className="w-4 h-4" />
                      <a href="#" className="text-purple-400 hover:underline">portfolio.dev</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined March 2023
                    </div>
                  </div>
                  
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-semibold text-white">847</span>
                      <span className="text-gray-400 ml-1">Following</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">2.1K</span>
                      <span className="text-gray-400 ml-1">Followers</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">156</span>
                      <span className="text-gray-400 ml-1">Posts</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700/50">
              <TabsTrigger value="posts" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Posts
              </TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Saved
              </TabsTrigger>
              <TabsTrigger value="following-users" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Following Users
              </TabsTrigger>
              <TabsTrigger value="following-business" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Following Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-6">
              <MasonryPostGrid posts={userPosts} loading={false} hasMore={false} />
            </TabsContent>

            <TabsContent value="saved" className="mt-6">
              <MasonryPostGrid posts={savedPosts} loading={false} hasMore={false} />
            </TabsContent>

            <TabsContent value="following-users" className="mt-6">
              <div className="grid gap-4">
                {followingUsers.map((user) => (
                  <Card key={user.id} className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{user.name}</h3>
                            <p className="text-gray-400 text-sm">{user.username}</p>
                          </div>
                        </div>
                        <Button 
                          variant={user.isFollowing ? "outline" : "default"}
                          size="sm"
                          className={user.isFollowing ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-purple-600 hover:bg-purple-700"}
                        >
                          {user.isFollowing ? "Following" : "Follow"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="following-business" className="mt-6">
              <div className="grid gap-4">
                {followingBusinesses.map((business) => (
                  <Card key={business.id} className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={business.avatar} />
                            <AvatarFallback>{business.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-white">{business.name}</h3>
                              {business.verified && (
                                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm">{business.username}</p>
                          </div>
                        </div>
                        <Button 
                          variant={business.isFollowing ? "outline" : "default"}
                          size="sm"
                          className={business.isFollowing ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-purple-600 hover:bg-purple-700"}
                        >
                          {business.isFollowing ? "Following" : "Follow"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </MainLayout>
  );
};

export default Profile;
