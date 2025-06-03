
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MainLayout } from '@/components/Layout/MainLayout';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Phone, Mail, CreditCard, X, MessageCircle, ShoppingCart, Search } from 'lucide-react';

interface CartItem {
  id: string;
  serviceName: string;
  serviceProvider: string;
  providerAvatar: string;
  serviceImage: string;
  price: string;
  bookingDate: string;
  deliveryDate: string;
  status: 'pending' | 'paid' | 'completed' | 'cancelled';
  description: string;
  duration: string;
}

const Cart = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      serviceName: 'Professional Photography Session',
      serviceProvider: 'Creative Marketing Co.',
      providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      serviceImage: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=250&fit=crop',
      price: '$150.00',
      bookingDate: 'Dec 15, 2024 at 2:00 PM',
      deliveryDate: 'Dec 16, 2024',
      status: 'pending',
      description: '2-hour professional photography session for business portraits',
      duration: '2 hours'
    },
    {
      id: '2',
      serviceName: 'Social Media Marketing Package',
      serviceProvider: 'Digital Solutions Pro',
      providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      serviceImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      price: '$299.00',
      bookingDate: 'Dec 20, 2024',
      deliveryDate: 'Jan 15, 2025',
      status: 'paid',
      description: 'Complete social media strategy and content creation for 1 month',
      duration: '30 days'
    },
    {
      id: '3',
      serviceName: 'Website Development',
      serviceProvider: 'Tech Solutions Inc.',
      providerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      serviceImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      price: '$1,200.00',
      bookingDate: 'Dec 10, 2024',
      deliveryDate: 'Dec 12, 2024',
      status: 'completed',
      description: 'Complete website development with modern design',
      duration: '5 days'
    },
    {
      id: '4',
      serviceName: 'Logo Design',
      serviceProvider: 'Creative Studio',
      providerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=60&h=60&fit=crop&crop=face',
      serviceImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      price: '$75.00',
      bookingDate: 'Dec 5, 2024',
      deliveryDate: 'Dec 8, 2024',
      status: 'cancelled',
      description: 'Custom logo design for brand identity',
      duration: '3 days'
    }
  ]);

  const handleCancelBooking = (itemId: string) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, status: 'cancelled' as const } : item
    ));
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been successfully cancelled.",
    });
  };

  const handlePayment = (item: CartItem) => {
    setCartItems(cartItems.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, status: 'paid' as const } : cartItem
    ));
    toast({
      title: "Payment Successful",
      description: `Payment processed for ${item.serviceName}`,
    });
  };

  const handleContactProvider = (provider: string) => {
    toast({
      title: "Contact Provider",
      description: `Opening conversation with ${provider}`,
    });
  };

  const filterItemsBySearch = (items: CartItem[]) => {
    if (!searchQuery) return items;
    return items.filter(item => 
      item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.serviceProvider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filterItemsByStatus = (status: string) => {
    if (status === 'all') return cartItems;
    return cartItems.filter(item => item.status === status);
  };

  const getTotalAmount = (items: CartItem[]) => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'paid': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const renderCartItems = (items: CartItem[]) => {
    const filteredItems = filterItemsBySearch(items);

    if (filteredItems.length === 0) {
      return (
        <Card className="bg-gray-800/50 border-gray-700 text-center py-12">
          <CardContent>
            <div className="text-gray-400 mb-4">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p>No items match your search criteria.</p>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Service Image */}
                <div className="md:w-1/3">
                  <img
                    src={item.serviceImage}
                    alt={item.serviceName}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.serviceName}
                      </h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={item.providerAvatar}
                          alt={item.serviceProvider}
                          className="w-8 h-8 rounded-full border-2 border-purple-500/30"
                        />
                        <span className="text-gray-300">{item.serviceProvider}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getStatusColor(item.status)} border`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                      {item.status !== 'cancelled' && item.status !== 'completed' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCancelBooking(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{item.description}</p>

                  {/* Booking Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                        <span className="text-sm">Booking: {item.bookingDate}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-purple-400" />
                        <span className="text-sm">Duration: {item.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <User className="h-4 w-4 mr-2 text-purple-400" />
                        <span className="text-sm">Delivery: {item.deliveryDate}</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => handleContactProvider(item.serviceProvider)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Provider
                    </Button>
                    {item.status === 'pending' && (
                      <Button
                        onClick={() => handlePayment(item)}
                        className="bg-green-600 hover:bg-green-700"
                        size="sm"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const allItems = cartItems;
  const pendingItems = filterItemsByStatus('pending');
  const paidItems = filterItemsByStatus('paid');
  const completedItems = filterItemsByStatus('completed');
  const cancelledItems = filterItemsByStatus('cancelled');

  return (
    <MainLayout showRightSidebar={false}>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Cart</h1>
            <p className="text-gray-400">Manage your bookings and services</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services, providers, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-800/50 border-gray-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                All ({allItems.length})
              </TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Pending ({pendingItems.length})
              </TabsTrigger>
              <TabsTrigger value="paid" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Paid ({paidItems.length})
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Completed ({completedItems.length})
              </TabsTrigger>
              <TabsTrigger value="cancelled" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Cancelled ({cancelledItems.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6 mt-6">
              {renderCartItems(allItems)}
              {allItems.length > 0 && (
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">Cart Summary</h3>
                      <div className="text-right">
                        <p className="text-gray-400">Total Items: {filterItemsBySearch(allItems).length}</p>
                        <p className="text-2xl font-bold text-purple-400">${getTotalAmount(filterItemsBySearch(allItems))}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-6 mt-6">
              {renderCartItems(pendingItems)}
            </TabsContent>

            <TabsContent value="paid" className="space-y-6 mt-6">
              {renderCartItems(paidItems)}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6 mt-6">
              {renderCartItems(completedItems)}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-6 mt-6">
              {renderCartItems(cancelledItems)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
