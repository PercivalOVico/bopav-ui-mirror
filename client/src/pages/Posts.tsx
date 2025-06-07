
import { useState, useEffect, useCallback } from 'react';

import { MainLayout } from '@/components/Layout/MainLayout';
import { PostHeader } from '@/components/Posts/PostHeader';
import { PostContent } from '@/components/Posts/PostContent';
import { generateSamplePosts } from '@/utils/postUtils';

interface Post {
  id: string;
  businessName: string;
  businessAvatar: string;
  content: string;
  media: Array<{ url: string; type: string }>;
  likes: number;
  comments: number;
  timeAgo: string;
  height: number;
}

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
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
    const handleScroll = (e: Event) => {
      const element = e.target as HTMLElement;
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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <MainLayout>
      <PostHeader 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onPost={handlePost}
      />
      <PostContent 
        posts={filteredPosts}
        loading={loading}
        hasMore={hasMore}
      />
    </MainLayout>
  );
};

export default Posts;
