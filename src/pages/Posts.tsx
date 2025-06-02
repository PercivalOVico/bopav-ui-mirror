
import { useState, useEffect, useCallback } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { RightSidebar } from '@/components/RightSidebar';
import { PostCreationInterface } from '@/components/PostCreationInterface';
import { MasonryPostGrid } from '@/components/MasonryPostGrid';
import { generateSamplePosts } from '@/utils/postUtils';

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Initialize with first batch of posts
  useEffect(() => {
    setPosts(generateSamplePosts(0, 12));
  }, []);

  // Load more posts function
  const loadMorePosts = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newPosts = generateSamplePosts(posts.length, 8);
      setPosts(prev => [...prev, ...newPosts]);
      setLoading(false);
      
      // Stop infinite scroll after 50 posts for demo
      if (posts.length >= 42) {
        setHasMore(false);
      }
    }, 1000);
  }, [posts.length, loading, hasMore]);

  // Infinite scroll handler for center content only
  useEffect(() => {
    const handleScroll = (e) => {
      const element = e.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        loadMorePosts();
      }
    };

    const centerContent = document.getElementById('center-content');
    if (centerContent) {
      centerContent.addEventListener('scroll', handleScroll);
      return () => centerContent.removeEventListener('scroll', handleScroll);
    }
  }, [loadMorePosts]);

  const filteredPosts = posts.filter(post =>
    post.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePost = (content: string) => {
    if (content.trim()) {
      console.log('Posting:', content);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>
        
        {/* Center content with responsive margins */}
        <div className="flex-1 lg:ml-64 lg:mr-80 mx-0">
          {/* Sticky Header with Post Creation and Search */}
          <div className="sticky top-0 z-50 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-violet-900/95 backdrop-blur-md border-b border-gray-700/50">
            <div className="px-4 lg:px-6 py-4">
              <div className="max-w-4xl mx-auto space-y-4">
                {/* Post Creation Interface */}
                <PostCreationInterface onPost={handlePost} />

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search businesses or content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
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

          {/* Scrollable Content */}
          <div 
            id="center-content"
            className="h-screen overflow-y-auto px-4 lg:px-6 py-6"
            style={{ paddingTop: '0' }}
          >
            <div className="max-w-4xl mx-auto">
              <MasonryPostGrid 
                posts={filteredPosts}
                loading={loading}
                hasMore={hasMore}
              />
            </div>
          </div>
        </div>
        
        {/* Right Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-80 fixed right-0 top-0 h-full">
          <RightSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Posts;
