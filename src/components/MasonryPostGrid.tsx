
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MasonryPostCard } from '@/components/MasonryPostCard';
import { CommentModal } from '@/components/CommentModal';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { Post } from '@/types';

interface MasonryPostGridProps {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
}

export const MasonryPostGrid = React.memo(({ posts, loading, hasMore }: MasonryPostGridProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleCommentClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {/* Masonry Grid - Updated to show 2 columns on mobile */}
      <div className="columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="break-inside-avoid mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.25, 0.25, 0, 1]
              }}
            >
              <MasonryPostCard {...post} onCommentClick={() => handleCommentClick(post)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Loading indicator */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center px-6 py-3 font-semibold leading-6 text-sm shadow-lg rounded-2xl text-primary bg-card/90 backdrop-blur-sm border border-border/50">
              <LoadingSpinner size="sm" className="mr-3" />
              Loading more posts...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End of posts message */}
      <AnimatePresence>
        {!hasMore && !loading && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <p className="text-muted-foreground text-lg font-medium">You've reached the end!</p>
            <p className="text-sm text-muted-foreground/70 mt-1">That's all the amazing content for now</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comment Modal */}
      <AnimatePresence>
        {selectedPost && (
          <CommentModal
            post={selectedPost}
            isOpen={!!selectedPost}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
});

MasonryPostGrid.displayName = 'MasonryPostGrid';
