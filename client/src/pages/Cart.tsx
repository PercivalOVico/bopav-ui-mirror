
import { useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { MainLayout } from '@/components/Layout/MainLayout';
import { useToast } from '@/hooks/use-toast';
import { CartItem } from '@/components/Cart/CartItem';
import { CartFilters } from '@/components/Cart/CartFilters';
import { CartItemsList } from '@/components/Cart/CartItemsList';
import { CartSummary } from '@/components/Cart/CartSummary';

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

          <CartFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            allCount={allItems.length}
            pendingCount={pendingItems.length}
            paidCount={paidItems.length}
            completedCount={completedItems.length}
            cancelledCount={cancelledItems.length}
          >
            <TabsContent value="all" className="space-y-6 mt-6">
              <CartItemsList
                items={filterItemsBySearch(allItems)}
                onCancel={handleCancelBooking}
                onPayment={handlePayment}
                onContactProvider={handleContactProvider}
              />
              <CartSummary items={filterItemsBySearch(allItems)} />
            </TabsContent>

            <TabsContent value="pending" className="space-y-6 mt-6">
              <CartItemsList
                items={filterItemsBySearch(pendingItems)}
                onCancel={handleCancelBooking}
                onPayment={handlePayment}
                onContactProvider={handleContactProvider}
              />
            </TabsContent>

            <TabsContent value="paid" className="space-y-6 mt-6">
              <CartItemsList
                items={filterItemsBySearch(paidItems)}
                onCancel={handleCancelBooking}
                onPayment={handlePayment}
                onContactProvider={handleContactProvider}
              />
            </TabsContent>

            <TabsContent value="completed" className="space-y-6 mt-6">
              <CartItemsList
                items={filterItemsBySearch(completedItems)}
                onCancel={handleCancelBooking}
                onPayment={handlePayment}
                onContactProvider={handleContactProvider}
              />
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-6 mt-6">
              <CartItemsList
                items={filterItemsBySearch(cancelledItems)}
                onCancel={handleCancelBooking}
                onPayment={handlePayment}
                onContactProvider={handleContactProvider}
              />
            </TabsContent>
          </CartFilters>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
