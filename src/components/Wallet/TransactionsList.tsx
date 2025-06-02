
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, CreditCard } from "lucide-react";

interface Transaction {
  type: string;
  amount: string;
  value: string;
  time: string;
  status: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'Send': return ArrowUpRight;
      case 'Receive': return ArrowDownLeft;
      case 'Swap': return RefreshCw;
      default: return CreditCard;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'Send': return 'bg-red-500/20 text-red-400';
      case 'Receive': return 'bg-green-500/20 text-green-400';
      case 'Swap': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-purple-500/20 text-purple-400';
    }
  };

  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction, index) => {
          const IconComponent = getTransactionIcon(transaction.type);
          const colorClass = getTransactionColor(transaction.type);
          
          return (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">{transaction.type}</div>
                  <div className="text-sm text-gray-400">{transaction.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">{transaction.amount}</div>
                <div className="text-sm text-gray-400">{transaction.value}</div>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                {transaction.status}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
