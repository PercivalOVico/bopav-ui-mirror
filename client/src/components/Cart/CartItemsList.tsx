
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { CartItem, CartItemComponent } from './CartItem';

interface CartItemsListProps {
  items: CartItem[];
  onCancel: (itemId: string) => void;
  onPayment: (item: CartItem) => void;
  onContactProvider: (provider: string) => void;
}

export const CartItemsList = ({ items, onCancel, onPayment, onContactProvider }: CartItemsListProps) => {
  if (items.length === 0) {
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
      {items.map((item) => (
        <CartItemComponent
          key={item.id}
          item={item}
          onCancel={onCancel}
          onPayment={onPayment}
          onContactProvider={onContactProvider}
        />
      ))}
    </div>
  );
};
