import { useState, useEffect, useCallback, useMemo } from 'react';
import { generateSamplePosts } from '@/utils/postUtils';
import type { Post } from '@/types';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Initialize with first batch of posts
  useEffect(() => {
    setPosts(generateSamplePosts(0, 12));
  }, []);

  // Optimized load more posts function
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

  return {
    posts,
    loading,
    hasMore,
    loadMorePosts,
    setPosts
  };
};