
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WalletTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export function WalletTabs({ activeTab, onTabChange }: WalletTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 border border-gray-700/50 mb-6">
        <TabsTrigger value="web3" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
          Web3 (Crypto)
        </TabsTrigger>
        <TabsTrigger value="fiat" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
          Fiat
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
