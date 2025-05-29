
import { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import PostCard from '@/components/PostCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Extended sample business posts data with varying heights
  const generatePosts = (startId: number, count: number) => {
    const businesses = [
      {
        name: 'TechFlow Solutions',
        avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face',
        content: 'Revolutionizing workflow automation for modern businesses.',
      },
      {
        name: 'Creative Marketing Co',
        avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
        content: 'Behind the scenes of our latest campaign!',
      },
      {
        name: 'DataViz Analytics',
        avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face',
        content: 'The power of data visualization in action.',
      },
      {
        name: 'DevCode Studios',
        avatar: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face',
        content: 'Clean code is not just about syntax.',
      },
      {
        name: 'Future Events Hub',
        avatar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=face',
        content: 'Connecting businesses through immersive virtual experiences.',
      },
      {
        name: 'InnovateXR',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
        content: 'The future is here! Our AR/VR solutions are transforming businesses.',
      }
    ];

    const images = [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&fit=crop',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&fit=crop',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&fit=crop',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&fit=crop'
    ];

    return Array.from({ length: count }, (_, i) => {
      const businessIndex = (startId + i) % businesses.length;
      const imageIndex = (startId + i) % images.length;
      const business = businesses[businessIndex];
      
      return {
        id: (startId + i).toString(),
        businessName: business.name,
        businessAvatar: business.avatar,
        content: business.content,
        mediaUrl: images[imageIndex],
        mediaType: Math.random() > 0.3 ? 'image' : 'video',
        likes: Math.floor(Math.random() * 300) + 50,
        comments: Math.floor(Math.random() * 50) + 5,
        timeAgo: `${Math.floor(Math.random() * 24) + 1} hours ago`,
        height: Math.floor(Math.random() * 200) + 250 // Random height for masonry effect
      };
    });
  };

  // Initialize with first batch of posts
  useEffect(() => {
    setPosts(generatePosts(0, 12));
  }, []);

  // Load more posts function
  const loadMorePosts = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newPosts = generatePosts(posts.length, 8);
      setPosts(prev => [...prev, ...newPosts]);
      setLoading(false);
      
      // Stop infinite scroll after 50 posts for demo
      if (posts.length >= 42) {
        setHasMore(false);
      }
    }, 1000);
  }, [posts.length, loading, hasMore]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      loadMorePosts();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePosts]);

  const filteredPosts = posts.filter(post =>
    post.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Business{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Posts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover engaging content from businesses worldwide. Like, comment, and save posts that inspire you.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search businesses or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 rounded-full"
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="break-inside-avoid mb-4">
                <MasonryPostCard {...post} />
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          {loading && (
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-purple-500 bg-white">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading more posts...
              </div>
            </div>
          )}

          {/* End of posts message */}
          {!hasMore && !loading && (
            <div className="text-center mt-12">
              <p className="text-gray-500 text-lg">You've reached the end! 🎉</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Masonry-optimized Post Card Component
const MasonryPostCard = ({
  businessName,
  businessAvatar,
  content,
  mediaUrl,
  mediaType,
  likes,
  comments,
  timeAgo,
  height
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Media */}
      <div className="relative">
        {mediaType === 'image' ? (
          <img
            src={mediaUrl}
            alt="Post content"
            className="w-full object-cover"
            style={{ height: `${height}px` }}
          />
        ) : (
          <div className="relative" style={{ height: `${height}px` }}>
            <video
              src={mediaUrl}
              className="w-full h-full object-cover"
              controls={false}
              poster={mediaUrl}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-3"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Button>
            </div>
          </div>
        )}
        
        {/* Save button overlay */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className={`absolute top-3 right-3 rounded-full p-2 ${
            isSaved ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-white/90 text-gray-700 hover:bg-white'
          } transition-colors shadow-sm`}
        >
          <svg className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Business Header */}
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={businessAvatar}
            alt={businessName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{businessName}</h3>
            <p className="text-xs text-gray-500">{timeAgo}</p>
          </div>
        </div>

        {/* Post Content */}
        {content && (
          <p className="text-gray-700 text-sm mb-3 line-clamp-3">{content}</p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`${
                isLiked ? 'text-red-500 hover:text-red-400' : 'text-gray-500 hover:text-gray-700'
              } transition-colors p-1`}
            >
              <svg className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span className="text-xs">{likesCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="text-xs">{comments}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16,6 12,2 8,6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
