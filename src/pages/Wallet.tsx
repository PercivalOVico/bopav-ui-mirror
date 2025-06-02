
import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, History, CreditCard } from "lucide-react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { WalletHeader } from "@/components/Wallet/WalletHeader";
import { WalletTabs } from "@/components/Wallet/WalletTabs";
import { BalanceCard } from "@/components/Wallet/BalanceCard";
import { CryptoAssetsList } from "@/components/Wallet/CryptoAssetsList";
import { FiatAccountsList } from "@/components/Wallet/FiatAccountsList";
import { TransactionsList } from "@/components/Wallet/TransactionsList";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("web3");
  const [balanceVisible, setBalanceVisible] = useState(true);

  // Mock data
  const cryptoAssets = [
    { symbol: "BNB", name: "Binance Coin", balance: "5.32501", value: "$1,683.67", change: "+1.24%", positive: true },
    { symbol: "BTC", name: "Bitcoin", balance: "0.0072", value: "$472.84", change: "-2.81%", positive: false },
    { symbol: "USDT", name: "Tether", balance: "32.8212", value: "$32.82", change: "+0.01%", positive: true },
    { symbol: "ETH", name: "Ethereum", balance: "0.8456", value: "$2,847.92", change: "+3.45%", positive: true }
  ];

  const fiatAccounts = [
    { type: "Visa Card", number: "**** 4532", balance: "$2,450.00", currency: "USD" },
    { type: "Master Card", number: "**** 8901", balance: "$1,890.50", currency: "USD" },
    { type: "Mobile Money", number: "+1 234 567 8901", balance: "$567.80", currency: "USD" },
    { type: "Bank Account", number: "**** 2345", balance: "$15,230.00", currency: "USD" }
  ];

  const recentTransactions = [
    { type: "Send", amount: "-0.125 BTC", value: "-$8,250.00", time: "2h ago", status: "Completed" },
    { type: "Receive", amount: "+2.5 BNB", value: "+$835.50", time: "5h ago", status: "Completed" },
    { type: "Swap", amount: "1 ETH → 1,850 USDT", value: "$1,850.00", time: "1d ago", status: "Completed" },
    { type: "Purchase", amount: "-$500.00", value: "Visa *4532", time: "2d ago", status: "Completed" }
  ];

  const cryptoActions = [
    { icon: ArrowUpRight, label: "Send" },
    { icon: ArrowDownLeft, label: "Receive" },
    { icon: RefreshCw, label: "Swap" },
    { icon: History, label: "History" }
  ];

  const fiatActions = [
    { icon: ArrowUpRight, label: "Transfer" },
    { icon: ArrowDownLeft, label: "Deposit" },
    { icon: CreditCard, label: "Pay" },
    { icon: History, label: "History" }
  ];

  return (
    <MainLayout>
      <WalletHeader 
        title="Wallet" 
        description="Manage your crypto and fiat assets" 
      />

      <WalletTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Web3 Crypto Tab */}
      <TabsContent value="web3" className="space-y-6">
        <BalanceCard
          title="Total Crypto Balance"
          totalBalance="$5,037.25"
          balanceVisible={balanceVisible}
          onToggleVisibility={() => setBalanceVisible(!balanceVisible)}
          actions={cryptoActions}
          gradientClass="bg-gradient-to-r from-purple-600/20 to-blue-600/20"
          buttonColor="bg-purple-600 hover:bg-purple-700"
        />
        <CryptoAssetsList assets={cryptoAssets} />
      </TabsContent>

      {/* Fiat Tab */}
      <TabsContent value="fiat" className="space-y-6">
        <BalanceCard
          title="Total Fiat Balance"
          totalBalance="$20,138.30"
          balanceVisible={balanceVisible}
          onToggleVisibility={() => setBalanceVisible(!balanceVisible)}
          actions={fiatActions}
          gradientClass="bg-gradient-to-r from-green-600/20 to-emerald-600/20"
          buttonColor="bg-green-600 hover:bg-green-700"
        />
        <FiatAccountsList accounts={fiatAccounts} />
      </TabsContent>

      {/* Recent Transactions */}
      <TransactionsList transactions={recentTransactions} />
    </MainLayout>
  );
};

export default Wallet;
