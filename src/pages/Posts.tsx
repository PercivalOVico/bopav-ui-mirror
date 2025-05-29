
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import PostCard from '@/components/PostCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample business posts data
  const businessPosts = [
    {
      id: '1',
      businessName: 'TechFlow Solutions',
      businessAvatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face',
      content: 'Revolutionizing workflow automation for modern businesses. Our latest AI-powered platform helps companies streamline their operations and boost productivity by 300%.',
      mediaUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      mediaType: 'image' as const,
      likes: 124,
      comments: 18,
      timeAgo: '2 hours ago'
    },
    {
      id: '2',
      businessName: 'Creative Marketing Co',
      businessAvatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
      content: 'Behind the scenes of our latest campaign! Watch how we transformed a simple idea into a viral marketing phenomenon.',
      mediaUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      mediaType: 'video' as const,
      likes: 89,
      comments: 24,
      timeAgo: '4 hours ago'
    },
    {
      id: '3',
      businessName: 'DataViz Analytics',
      businessAvatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face',
      content: 'The power of data visualization in action. Our dashboard helps businesses make informed decisions with real-time analytics and beautiful, intuitive interfaces.',
      mediaUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      mediaType: 'image' as const,
      likes: 156,
      comments: 32,
      timeAgo: '6 hours ago'
    },
    {
      id: '4',
      businessName: 'DevCode Studios',
      businessAvatar: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face',
      content: 'Clean code is not just about syntax - it\'s about creating maintainable, scalable solutions that stand the test of time.',
      mediaUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      mediaType: 'image' as const,
      likes: 203,
      comments: 41,
      timeAgo: '8 hours ago'
    },
    {
      id: '5',
      businessName: 'Future Events Hub',
      businessAvatar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=face',
      content: 'Connecting businesses through immersive virtual experiences. Join our upcoming networking event and discover new opportunities.',
      mediaUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      mediaType: 'video' as const,
      likes: 78,
      comments: 15,
      timeAgo: '12 hours ago'
    },
    {
      id: '6',
      businessName: 'InnovateXR',
      businessAvatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      content: 'The future is here! Our AR/VR solutions are transforming how businesses engage with customers and train employees.',
      mediaUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      mediaType: 'image' as const,
      likes: 267,
      comments: 52,
      timeAgo: '1 day ago'
    }
  ];

  const filteredPosts = businessPosts.filter(post =>
    post.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
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
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search businesses or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Posts Grid */}
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                {...post}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
