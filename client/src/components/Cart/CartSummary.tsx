
import { Card, CardContent } from '@/components/ui/card';
import { CartItem } from './CartItem';

interface CartSummaryProps {
  items: CartItem[];
}

export const CartSummary = ({ items }: CartSummaryProps) => {
  const getTotalAmount = (items: CartItem[]) => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  if (items.length === 0) return null;

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Cart Summary</h3>
          <div className="text-right">
            <p className="text-gray-400">Total Items: {items.length}</p>
            <p className="text-2xl font-bold text-purple-400">${getTotalAmount(items)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
