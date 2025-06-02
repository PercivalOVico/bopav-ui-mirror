
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, History, CreditCard, Smartphone, Banknote, TrendingUp, Eye, EyeOff } from "lucide-react";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("web3");
  const [balanceVisible, setBalanceVisible] = useState(true);

  // Mock crypto data
  const cryptoAssets = [
    { symbol: "BNB", name: "Binance Coin", balance: "5.32501", value: "$1,683.67", change: "+1.24%", positive: true },
    { symbol: "BTC", name: "Bitcoin", balance: "0.0072", value: "$472.84", change: "-2.81%", positive: false },
    { symbol: "USDT", name: "Tether", balance: "32.8212", value: "$32.82", change: "+0.01%", positive: true },
    { symbol: "ETH", name: "Ethereum", balance: "0.8456", value: "$2,847.92", change: "+3.45%", positive: true }
  ];

  // Mock fiat data
  const fiatAccounts = [
    { type: "Visa Card", number: "**** 4532", balance: "$2,450.00", currency: "USD" },
    { type: "Master Card", number: "**** 8901", balance: "$1,890.50", currency: "USD" },
    { type: "Mobile Money", number: "+1 234 567 8901", balance: "$567.80", currency: "USD" },
    { type: "Bank Account", number: "**** 2345", balance: "$15,230.00", currency: "USD" }
  ];

  const totalCryptoValue = "$5,037.25";
  const totalFiatValue = "$20,138.30";

  const recentTransactions = [
    { type: "Send", amount: "-0.125 BTC", value: "-$8,250.00", time: "2h ago", status: "Completed" },
    { type: "Receive", amount: "+2.5 BNB", value: "+$835.50", time: "5h ago", status: "Completed" },
    { type: "Swap", amount: "1 ETH → 1,850 USDT", value: "$1,850.00", time: "1d ago", status: "Completed" },
    { type: "Purchase", amount: "-$500.00", value: "Visa *4532", time: "2d ago", status: "Completed" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
        <AppSidebar />
        
        <main className="flex-1 ml-64 mr-80 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
              <p className="text-gray-400">Manage your crypto and fiat assets</p>
            </div>

            {/* Wallet Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 border border-gray-700/50 mb-6">
                <TabsTrigger value="web3" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                  Web3 (Crypto)
                </TabsTrigger>
                <TabsTrigger value="fiat" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
                  Fiat
                </TabsTrigger>
              </TabsList>

              {/* Web3 Crypto Tab */}
              <TabsContent value="web3" className="space-y-6">
                {/* Main Balance Card */}
                <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-gray-700/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-400 text-sm">Total Crypto Balance</h2>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setBalanceVisible(!balanceVisible)}
                        className="text-gray-400 hover:text-white"
                      >
                        {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">
                      {balanceVisible ? totalCryptoValue : "••••••"}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-4">
                      <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-6">
                        <ArrowUpRight className="w-5 h-5 mb-1" />
                        <span className="text-sm">Send</span>
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-6">
                        <ArrowDownLeft className="w-5 h-5 mb-1" />
                        <span className="text-sm">Receive</span>
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-6">
                        <RefreshCw className="w-5 h-5 mb-1" />
                        <span className="text-sm">Swap</span>
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-6">
                        <History className="w-5 h-5 mb-1" />
                        <span className="text-sm">History</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Crypto Assets */}
                <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      Crypto Assets
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cryptoAssets.map((asset, index) => (
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
              </TabsContent>

              {/* Fiat Tab */}
              <TabsContent value="fiat" className="space-y-6">
                {/* Main Balance Card */}
                <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md border border-gray-700/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-400 text-sm">Total Fiat Balance</h2>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setBalanceVisible(!balanceVisible)}
                        className="text-gray-400 hover:text-white"
                      >
                        {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">
                      {balanceVisible ? totalFiatValue : "••••••"}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-4">
                      <Button className="bg-green-600 hover:bg-green-700 flex flex-col items-center py-6">
                        <ArrowUpRight className="w-5 h-5 mb-1" />
                        <span className="text-sm">Transfer</span>
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 flex flex-col items-center py-6">
                        <ArrowDownLeft className="w-5 h-5 mb-1" />
                        <span className="text-sm">Deposit</span>
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 flex flex-col items-center py-6">
                        <CreditCard className="w-5 h-5 mb-1" />
                        <span className="text-sm">Pay</span>
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 flex flex-col items-center py-6">
                        <History className="w-5 h-5 mb-1" />
                        <span className="text-sm">History</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Fiat Accounts */}
                <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      Payment Methods
                      <Banknote className="w-5 h-5 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {fiatAccounts.map((account, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            {account.type.includes('Card') ? (
                              <CreditCard className="w-5 h-5 text-white" />
                            ) : account.type.includes('Mobile') ? (
                              <Smartphone className="w-5 h-5 text-white" />
                            ) : (
                              <Banknote className="w-5 h-5 text-white" />
                            )}
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
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Recent Transactions */}
            <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'Send' ? 'bg-red-500/20' :
                        transaction.type === 'Receive' ? 'bg-green-500/20' :
                        transaction.type === 'Swap' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                      }`}>
                        {transaction.type === 'Send' ? <ArrowUpRight className="w-5 h-5 text-red-400" /> :
                         transaction.type === 'Receive' ? <ArrowDownLeft className="w-5 h-5 text-green-400" /> :
                         transaction.type === 'Swap' ? <RefreshCw className="w-5 h-5 text-blue-400" /> :
                         <CreditCard className="w-5 h-5 text-purple-400" />}
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
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
        
        <RightSidebar />
      </div>
    </SidebarProvider>
  );
};

export default Wallet;
