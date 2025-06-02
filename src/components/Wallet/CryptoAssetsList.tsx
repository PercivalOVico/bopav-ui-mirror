
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface CryptoAsset {
  symbol: string;
  name: string;
  balance: string;
  value: string;
  change: string;
  positive: boolean;
}

interface CryptoAssetsListProps {
  assets: CryptoAsset[];
}

export function CryptoAssetsList({ assets }: CryptoAssetsListProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Crypto Assets
          <TrendingUp className="w-5 h-5 text-green-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center font-bold text-white">
                {asset.symbol.slice(0, 1)}
              </div>
              <div>
                <div className="font-semibold text-white">{asset.symbol}</div>
                <div className="text-sm text-gray-400">{asset.name}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-white">{asset.balance} {asset.symbol}</div>
              <div className="text-sm text-gray-400">{asset.value}</div>
            </div>
            <Badge 
              variant="secondary" 
              className={`${asset.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
            >
              {asset.change}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
