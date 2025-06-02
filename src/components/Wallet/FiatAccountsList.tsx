
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, CreditCard, Smartphone } from "lucide-react";

interface FiatAccount {
  type: string;
  number: string;
  balance: string;
  currency: string;
}

interface FiatAccountsListProps {
  accounts: FiatAccount[];
}

export function FiatAccountsList({ accounts }: FiatAccountsListProps) {
  const getAccountIcon = (type: string) => {
    if (type.includes('Card')) return CreditCard;
    if (type.includes('Mobile')) return Smartphone;
    return Banknote;
  };

  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Payment Methods
          <Banknote className="w-5 h-5 text-green-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {accounts.map((account, index) => {
          const IconComponent = getAccountIcon(account.type);
          return (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">{account.type}</div>
                  <div className="text-sm text-gray-400">{account.number}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">{account.balance}</div>
                <div className="text-sm text-gray-400">{account.currency}</div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
