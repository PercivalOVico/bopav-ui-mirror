
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/Layout/MainLayout';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Phone, Mail, CreditCard, X, MessageCircle } from 'lucide-react';

interface CartItem {
  id: string;
  serviceName: string;
  serviceProvider: string;
  providerAvatar: string;
  serviceImage: string;
  price: string;
  bookingDate: string;
  deliveryDate: string;
  status: 'pending' | 'confirmed' | 'completed';
  description: string;
  duration: string;
}

const Cart = () => {
  const { toast } = useToast();
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
      status: 'confirmed',
      description: 'Complete social media strategy and content creation for 1 month',
      duration: '30 days'
    }
  ]);

  const handleCancelBooking = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been successfully cancelled.",
    });
  };

  const handlePayment = (item: CartItem) => {
    toast({
      title: "Payment Initiated",
      description: `Processing payment for ${item.serviceName}`,
    });
  };

  const handleContactProvider = (provider: string) => {
    toast({
      title: "Contact Provider",
      description: `Opening conversation with ${provider}`,
    });
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'confirmed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <MainLayout showRightSidebar={false}>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Cart</h1>
            <p className="text-gray-400">Manage your bookings and services</p>
          </div>

          {cartItems.length === 0 ? (
            <Card className="bg-gray-800/50 border-gray-700 text-center py-12">
              <CardContent>
                <div className="text-gray-400 mb-4">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                  <p>Browse services and add them to your cart to get started.</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 mt-4">
                  Browse Services
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
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
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCancelBooking(item.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                              >
                                <X className="h-4 w-4" />
                              </Button>
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
                            <Button
                              onClick={() => handlePayment(item)}
                              className="bg-green-600 hover:bg-green-700"
                              size="sm"
                            >
                              <CreditCard className="h-4 w-4 mr-2" />
                              Pay Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cart Summary */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">Cart Summary</h3>
                    <div className="text-right">
                      <p className="text-gray-400">Total Items: {cartItems.length}</p>
                      <p className="text-2xl font-bold text-purple-400">${getTotalAmount()}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Continue Shopping
                    </Button>
                    <Button
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                      onClick={() => toast({
                        title: "Processing Payment",
                        description: "Redirecting to payment gateway...",
                      })}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay All (${getTotalAmount()})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
