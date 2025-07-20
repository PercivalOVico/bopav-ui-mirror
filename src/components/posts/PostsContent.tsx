import React from 'react';
import { MasonryPostGrid } from '@/components/MasonryPostGrid';
import type { Post } from '@/types';

interface PostsContentProps {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
}

export const PostsContent = React.memo(({ posts, loading, hasMore }: PostsContentProps) => {
  return (
    <div 
      id="center-content"
      className="h-screen overflow-y-auto px-4 lg:px-6 py-6"
      style={{ paddingTop: '0' }}
    >
      <div className="max-w-4xl mx-auto">
        <MasonryPostGrid 
          posts={posts}
          loading={loading}
          hasMore={hasMore}
        />
      </div>
    </div>
  );
});

PostsContent.displayName = 'PostsContent';