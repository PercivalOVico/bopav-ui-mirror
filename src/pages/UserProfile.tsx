import { useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingModal } from "@/components/BookingModal";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Star, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageCircle,
  Share,
  Heart,
  Bookmark
} from "lucide-react";

const UserProfile = () => {
  const { userId } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  // Mock user data - in real app this would come from API
  const userData = {
    id: userId,
    name: "GlowUp Studio",
    username: "@glowupstudio",
    avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 127,
    location: "Tower Plaza, Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "contact@glowupstudio.ae",
    description: "Professional barber shop offering premium haircuts, styling, and grooming services. Expert stylists with 10+ years experience.",
    services: [
      { name: "Classic Cut", price: "$25", duration: "30 min" },
      { name: "Beard Trim", price: "$15", duration: "20 min" },
      { name: "Hair Styling", price: "$35", duration: "45 min" },
      { name: "Hair Coloring", price: "$60", duration: "90 min" },
      { name: "Shaving", price: "$20", duration: "25 min" },
      { name: "Hair Wash", price: "$10", duration: "15 min" }
    ],
    portfolio: [
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300&h=300&fit=crop"
    ],
    workingHours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 10:00 PM",
      saturday: "8:00 AM - 10:00 PM",
      sunday: "10:00 AM - 6:00 PM"
    }
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? "Unfollowed" : "Following",
      description: isFollowing 
        ? `You are no longer following ${userData.name}` 
        : `You are now following ${userData.name}`,
    });
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited 
        ? `${userData.name} removed from your favorites` 
        : `${userData.name} added to your favorites`,
    });
  };

  const handleBookAppointment = () => {
    console.log("Booking appointment for:", userData.name);
  };

  const handleMessage = () => {
    toast({
      title: "Message sent",
      description: `Opening conversation with ${userData.name}`,
    });
    console.log("Opening message to:", userData.name);
  };

  const handleShare = () => {
    toast({
      title: "Profile shared",
      description: "Profile link copied to clipboard",
    });
  };

  return (
    <MainLayout>
      <main className="flex-1 overflow-y-auto">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64">
          <img
            src={userData.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
          {/* Profile Header */}
          <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="w-32 h-32 border-4 border-purple-500/30 mb-4">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback className="text-2xl">{userData.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex gap-2">
                  <Button
                    onClick={handleFollow}
                    className={`${
                      isFollowing 
                        ? 'bg-gray-600 hover:bg-gray-700' 
                        : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleFavorite}
                    className={`border-gray-600 ${
                      isFavorited ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                  <Badge className="bg-blue-500 text-white">Verified</Badge>
                </div>
                <p className="text-gray-400 mb-3">{userData.username}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{userData.rating}</span>
                    <span className="text-gray-400">({userData.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{userData.description}</p>
                
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{userData.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <BookingModal
                serviceName="General Appointment"
                servicePrice="$50"
                serviceDuration="60 min"
                businessName={userData.name}
              >
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </BookingModal>
              <Button 
                variant="outline" 
                onClick={handleMessage}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleShare}
                className="border-gray-600 text-gray-400 hover:bg-gray-700"
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border border-gray-700/50">
              <TabsTrigger value="services" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Services
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="hours" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                Hours & Info
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                {userData.services.map((service, index) => (
                  <Card key={index} className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white">{service.name}</h3>
                        <span className="text-purple-400 font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{service.duration}</span>
                      </div>
                      <BookingModal
                        serviceName={service.name}
                        servicePrice={service.price}
                        serviceDuration={service.duration}
                        businessName={userData.name}
                      >
                        <Button 
                          size="sm" 
                          className="w-full mt-3 bg-purple-600 hover:bg-purple-700"
                        >
                          Book Now
                        </Button>
                      </BookingModal>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userData.portfolio.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hours" className="mt-6">
              <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
                  <div className="space-y-3">
                    {Object.entries(userData.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-gray-300 capitalize">{day}</span>
                        <span className="text-white">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </MainLayout>
  );
};

export default UserProfile;
