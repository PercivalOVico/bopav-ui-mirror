
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, History, CreditCard, Smartphone, Banknote, TrendingUp, Eye, EyeOff, Plus, MoreHorizontal, Search, Bell } from "lucide-react";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("web3");
  const [balanceVisible, setBalanceVisible] = useState(true);

  // Mock crypto data
  const cryptoAssets = [
    { symbol: "BNB", name: "Binance Coin", balance: "5.32501", value: "$1,683.67", change: "+1.24%", positive: true, chart: "📈" },
    { symbol: "BTC", name: "Bitcoin", balance: "0.0072", value: "$472.84", change: "-2.81%", positive: false, chart: "📉" },
    { symbol: "USDT", name: "Tether", balance: "32.8212", value: "$32.82", change: "+0.01%", positive: true, chart: "📊" },
    { symbol: "ETH", name: "Ethereum", balance: "0.8456", value: "$2,847.92", change: "+3.45%", positive: true, chart: "📈" }
  ];

  // Mock fiat data
  const fiatAccounts = [
    { type: "Visa Card", number: "**** 4532", balance: "$2,450.00", currency: "USD", color: "bg-blue-600" },
    { type: "Master Card", number: "**** 8901", balance: "$1,890.50", currency: "USD", color: "bg-red-600" },
    { type: "Mobile Money", number: "+1 234 567 8901", balance: "$567.80", currency: "USD", color: "bg-green-600" },
    { type: "Bank Account", number: "**** 2345", balance: "$15,230.00", currency: "USD", color: "bg-purple-600" }
  ];

  // Mock goals data
  const goals = [
    { name: "New iPhone", progress: 75, current: "$1,099", target: "$1,499", color: "bg-blue-500" },
    { name: "Emergency Fund", progress: 45, current: "$2,000", target: "$5,000", color: "bg-green-500" },
    { name: "Vacation", progress: 30, current: "$800", target: "$2,400", color: "bg-purple-500" }
  ];

  // Mock recent transactions
  const recentTransactions = [
    { type: "Send", amount: "-0.125 BTC", value: "-$8,250.00", time: "2h ago", status: "Completed", merchant: "Transfer to Alice" },
    { type: "Receive", amount: "+2.5 BNB", value: "+$835.50", time: "5h ago", status: "Completed", merchant: "DeFi Rewards" },
    { type: "Purchase", amount: "-$94.99", value: "Starbucks Coffee", time: "1d ago", status: "Completed", merchant: "Starbucks" },
    { type: "Swap", amount: "1 ETH → 1,850 USDT", value: "$1,850.00", time: "1d ago", status: "Completed", merchant: "DEX Swap" }
  ];

  const totalCryptoValue = "$5,037.25";
  const totalFiatValue = "$20,138.30";
  const totalIncome = "$3,762.11";
  const totalSpending = "$1,934.67";

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
            <p className="text-gray-400">Manage your crypto and fiat assets</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-gray-800/50 border-gray-700">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800/50 border-gray-700">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Balance Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main Balance Card */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-gray-400 text-sm">Balance</h2>
                  <Badge className="bg-blue-500/20 text-blue-400 text-xs">USD</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setBalanceVisible(!balanceVisible)}
                    className="text-gray-400 hover:text-white"
                  >
                    {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-6">
                {balanceVisible ? "$25,175.40" : "••••••"}
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/30 rounded-lg p-3">
                  <div className="text-sm text-gray-400">Total income</div>
                  <div className="text-lg font-semibold text-green-400">{totalIncome}</div>
                  <div className="text-xs text-green-400">↗ 12.5%</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-3">
                  <div className="text-sm text-gray-400">Total spending</div>
                  <div className="text-lg font-semibold text-red-400">{totalSpending}</div>
                  <div className="text-xs text-red-400">↘ 8.2%</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-4">
                  <ArrowUpRight className="w-4 h-4 mb-1" />
                  <span className="text-xs">Send</span>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-4">
                  <ArrowDownLeft className="w-4 h-4 mb-1" />
                  <span className="text-xs">Receive</span>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-4">
                  <RefreshCw className="w-4 h-4 mb-1" />
                  <span className="text-xs">Swap</span>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-4">
                  <Plus className="w-4 h-4 mb-1" />
                  <span className="text-xs">Add</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center justify-between">
                My Goals
                <Button variant="ghost" size="sm" className="text-purple-400 text-xs">
                  View all
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${goal.color}`}></div>
                      <span className="text-white text-sm font-medium">{goal.name}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">{goal.current}</span>
                    <span className="text-gray-400">{goal.target}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add new goal
              </Button>
            </CardContent>
          </Card>
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
            <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Crypto Assets
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{totalCryptoValue}</span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cryptoAssets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center font-bold text-white">
                        {asset.symbol.slice(0, 1)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{asset.symbol}</div>
                        <div className="text-sm text-gray-400">{asset.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{asset.chart}</div>
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
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fiat Tab */}
          <TabsContent value="fiat" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Payment Methods
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{totalFiatValue}</span>
                    <Banknote className="w-5 h-5 text-green-500" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {fiatAccounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${account.color} flex items-center justify-center`}>
                        {account.type.includes('Card') ? (
                          <CreditCard className="w-6 h-6 text-white" />
                        ) : account.type.includes('Mobile') ? (
                          <Smartphone className="w-6 h-6 text-white" />
                        ) : (
                          <Banknote className="w-6 h-6 text-white" />
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
        <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              Recent Transactions
              <Button variant="ghost" className="text-purple-400 text-sm">
                View all
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    transaction.type === 'Send' ? 'bg-red-500/20' :
                    transaction.type === 'Receive' ? 'bg-green-500/20' :
                    transaction.type === 'Swap' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    {transaction.type === 'Send' ? <ArrowUpRight className="w-6 h-6 text-red-400" /> :
                     transaction.type === 'Receive' ? <ArrowDownLeft className="w-6 h-6 text-green-400" /> :
                     transaction.type === 'Swap' ? <RefreshCw className="w-6 h-6 text-blue-400" /> :
                     <CreditCard className="w-6 h-6 text-purple-400" />}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{transaction.merchant}</div>
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
    </MainLayout>
  );
};

export default Wallet;
