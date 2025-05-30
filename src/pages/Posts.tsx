
import { useState, useEffect, useCallback } from 'react';
import PostCard from '@/components/PostCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { RightSidebar } from '@/components/RightSidebar';

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Extended sample business posts data with multiple media items
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

    const mediaItems = [
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
      const business = businesses[businessIndex];
      
      // Generate 1-4 media items per post
      const mediaCount = Math.floor(Math.random() * 4) + 1;
      const media = Array.from({ length: mediaCount }, (_, mediaIndex) => {
        const itemIndex = (startId + i + mediaIndex) % mediaItems.length;
        return {
          url: mediaItems[itemIndex],
          type: Math.random() > 0.3 ? 'image' : 'video'
        };
      });
      
      return {
        id: (startId + i).toString(),
        businessName: business.name,
        businessAvatar: business.avatar,
        content: business.content,
        media: media,
        likes: Math.floor(Math.random() * 300) + 50,
        comments: Math.floor(Math.random() * 50) + 5,
        timeAgo: `${Math.floor(Math.random() * 24) + 1} hours ago`,
        height: Math.floor(Math.random() * 200) + 250
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <AppSidebar />
        
        {/* Center content with proper margins for sidebars */}
        <div className="flex-1 ml-64 mr-80">
          <div 
            id="center-content"
            className="h-screen overflow-y-auto px-6 py-6"
          >
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Business{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Posts
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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

              {/* Masonry Grid */}
              <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="break-inside-avoid mb-4">
                    <MasonryPostCard {...post} />
                  </div>
                ))}
              </div>

              {/* Loading indicator */}
              {loading && (
                <div className="text-center mt-8">
                  <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-purple-400 bg-gray-800/50 backdrop-blur-sm">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                  <p className="text-gray-400 text-lg">You've reached the end! 🎉</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <RightSidebar />
      </div>
    </SidebarProvider>
  );
};

// Masonry-optimized Post Card Component with Carousel and Video Controls
const MasonryPostCard = ({
  businessName,
  businessAvatar,
  content,
  media,
  likes,
  comments,
  timeAgo,
  height
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const goToMedia = (index) => {
    setCurrentMediaIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const currentMedia = media[currentMediaIndex];

  return (
    <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden border border-gray-700/50">
      {/* Media Carousel */}
      <div className="relative">
        <div className="relative overflow-hidden" style={{ height: `${height}px` }}>
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.url}
              alt="Post content"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          ) : (
            <div className="relative h-full">
              <video
                src={currentMedia.url}
                className="w-full h-full object-cover"
                poster={currentMedia.url}
                muted={isMuted}
                loop
                playsInline
                style={{ 
                  transform: `translateY(${isPlaying ? '-2px' : '0px'})`,
                  transition: 'transform 0.3s ease'
                }}
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between bg-black/50 rounded-lg p-2 backdrop-blur-sm">
                    <Button
                      size="sm"
                      onClick={togglePlay}
                      className="bg-white/20 hover:bg-white/30 text-white p-2"
                    >
                      {isPlaying ? (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </Button>
                    
                    <div className="flex items-center space-x-2 flex-1 mx-3">
                      <Button
                        size="sm"
                        onClick={toggleMute}
                        className="bg-white/20 hover:bg-white/30 text-white p-1"
                      >
                        {isMuted ? (
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                          </svg>
                        ) : (
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                          </svg>
                        )}
                      </Button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="flex-1 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation arrows for multiple media */}
        {media.length > 1 && (
          <>
            <Button
              onClick={prevMedia}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button
              onClick={nextMedia}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </>
        )}

        {/* Dots indicator for multiple media */}
        {media.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMedia(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentMediaIndex 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Save button overlay */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className={`absolute top-3 right-3 rounded-full p-2 ${
            isSaved ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-800/70 text-white hover:bg-gray-700/70'
          } transition-colors shadow-sm backdrop-blur-sm`}
        >
          <svg className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 21l-7-7 7-7h14a2 2 0 0 1 2 2v-8a2 2 0 0 1-2-2z"/>
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
            className="w-8 h-8 rounded-full object-cover border-2 border-purple-500/30"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white truncate">{businessName}</h3>
            <p className="text-xs text-gray-400">{timeAgo}</p>
          </div>
        </div>

        {/* Post Content */}
        {content && (
          <p className="text-gray-300 text-sm mb-3 line-clamp-3">{content}</p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`${
                isLiked ? 'text-red-500 hover:text-red-400' : 'text-gray-400 hover:text-white'
              } transition-colors p-1`}
            >
              <svg className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span className="text-xs">{likesCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="text-xs">{comments}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFollow}
              className={`${
                isFollowing 
                  ? 'text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              } transition-colors px-2 py-1 rounded-md`}
            >
              <span className="text-xs font-medium">
                {isFollowing ? 'Following' : 'Follow'}
              </span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
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
