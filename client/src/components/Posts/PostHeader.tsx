
import { Search, Filter } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PostCreationInterface } from '@/components/Posts/PostCreationInterface';

interface PostHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onPost: (content: string) => void;
}

export const PostHeader = ({ searchTerm, onSearchChange, onPost }: PostHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-violet-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="px-4 lg:px-6 py-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Post Creation Interface */}
          <PostCreationInterface onPost={onPost} />

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search businesses or content..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-full backdrop-blur-sm"
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-full px-6 backdrop-blur-sm"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
