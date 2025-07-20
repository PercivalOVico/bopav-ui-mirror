
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { PostsHeader } from '@/components/posts/PostsHeader';
import { PostsContent } from '@/components/posts/PostsContent';
import { usePosts } from '@/hooks/usePosts';
import { useSearch } from '@/hooks/useSearch';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const Posts = React.memo(() => {
  const { posts, loading, hasMore, loadMorePosts } = usePosts();
  const { searchTerm, setSearchTerm, filteredPosts } = useSearch(posts);

  // Set up infinite scroll
  useInfiniteScroll({
    loadMore: loadMorePosts,
    containerId: 'center-content'
  });

  const handlePost = (content: string) => {
    if (content.trim()) {
      console.log('Posting:', content);
    }
  };

  return (
    <MainLayout>
      <PostsHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onPost={handlePost}
      />
      <PostsContent
        posts={filteredPosts}
        loading={loading}
        hasMore={hasMore}
      />
    </MainLayout>
  );
});

Posts.displayName = 'Posts';

export default Posts;
