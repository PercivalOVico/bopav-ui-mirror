
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

interface ActionButton {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}

interface BalanceCardProps {
  title: string;
  totalBalance: string;
  balanceVisible: boolean;
  onToggleVisibility: () => void;
  actions: ActionButton[];
  gradientClass: string;
  buttonColor: string;
}

export function BalanceCard({
  title,
  totalBalance,
  balanceVisible,
  onToggleVisibility,
  actions,
  gradientClass,
  buttonColor
}: BalanceCardProps) {
  return (
    <Card className={`${gradientClass} backdrop-blur-md border border-gray-700/50`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-400 text-sm">{title}</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onToggleVisibility}
            className="text-gray-400 hover:text-white"
          >
            {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </Button>
        </div>
        <div className="text-4xl font-bold text-white mb-6">
          {balanceVisible ? totalBalance : "••••••"}
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button 
              key={index}
              className={`${buttonColor} flex flex-col items-center py-6`}
              onClick={action.onClick}
            >
              <action.icon className="w-5 h-5 mb-1" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
