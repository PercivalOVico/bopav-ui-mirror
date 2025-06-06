
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Search } from 'lucide-react';
import { ReactNode } from 'react';

interface CartFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  allCount: number;
  pendingCount: number;
  paidCount: number;
  completedCount: number;
  cancelledCount: number;
  children: ReactNode;
}

export const CartFilters = ({
  searchQuery,
  onSearchChange,
  allCount,
  pendingCount,
  paidCount,
  completedCount,
  cancelledCount,
  children
}: CartFiltersProps) => {
  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search services, providers, or descriptions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-800/50 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            All ({allCount})
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Pending ({pendingCount})
          </TabsTrigger>
          <TabsTrigger value="paid" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Paid ({paidCount})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Completed ({completedCount})
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Cancelled ({cancelledCount})
          </TabsTrigger>
        </TabsList>
        {children}
      </Tabs>
    </>
  );
};
