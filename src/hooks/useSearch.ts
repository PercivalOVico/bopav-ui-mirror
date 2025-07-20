import { useState, useMemo } from 'react';
import type { Post } from '@/types';

export const useSearch = (posts: Post[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return posts;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return posts.filter(post =>
      post.businessName.toLowerCase().includes(lowerSearchTerm) ||
      post.content.toLowerCase().includes(lowerSearchTerm)
    );
  }, [posts, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredPosts
  };
};