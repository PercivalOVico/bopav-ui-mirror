
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, CreditCard, X, MessageCircle } from 'lucide-react';

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

interface CartItemProps {
  item: CartItem;
  onCancel: (itemId: string) => void;
  onPayment: (item: CartItem) => void;
  onContactProvider: (provider: string) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'paid': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export const CartItemComponent = ({ item, onCancel, onPayment, onContactProvider }: CartItemProps) => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
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
                    onClick={() => onCancel(item.id)}
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
                onClick={() => onContactProvider(item.serviceProvider)}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Provider
              </Button>
              {item.status === 'pending' && (
                <Button
                  onClick={() => onPayment(item)}
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
  );
};

export type { CartItem };
