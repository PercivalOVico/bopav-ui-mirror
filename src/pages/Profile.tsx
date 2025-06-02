import { MainLayout } from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MasonryPostGrid from "@/components/MasonryPostGrid";

const Profile = () => {
  // Mock data for stats
  const stats = [
    { label: "Posts", value: "124" },
    { label: "Followers", value: "4.5k" },
    { label: "Following", value: "867" },
    { label: "Likes", value: "2.1k" },
  ];

  // Mock data for posts
  const posts = [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1682687220793-c6265599926a?w=600&dpr=2&q=80",
      title: "Exploring the Mountains",
      description: "An amazing hike through the peaks.",
      likes: 42,
      comments: 12,
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1682621745356-b358b3c4984a?w=600&dpr=2&q=80",
      title: "City at Night",
      description: "The vibrant city comes alive when the sun sets.",
      likes: 31,
      comments: 8,
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1682586915897-4899a7f30979?w=600&dpr=2&q=80",
      title: "Coffee Time",
      description: "Enjoying a cup of coffee in a cozy cafe.",
      likes: 58,
      comments: 22,
    },
    {
      id: "4",
      imageUrl: "https://images.unsplash.com/photo-1677601194449-c99658c6917c?w=600&dpr=2&q=80",
      title: "Beach Vibes",
      description: "Soaking up the sun on a beautiful beach.",
      likes: 65,
      comments: 15,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop" 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex items-end space-x-4 -mt-16">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="flex-1 pt-16">
                <h1 className="text-3xl font-bold text-white">Bogdan Nikitin</h1>
                <p className="text-gray-400 mb-2">@nikitinteam</p>
                <p className="text-gray-300 max-w-2xl">
                  Full-stack developer passionate about creating amazing user experiences. 
                  Love working with React, TypeScript, and modern web technologies.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 mt-16">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-center">
              <CardContent className="p-4">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Posts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">My Posts</h2>
          <MasonryPostGrid posts={posts} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
