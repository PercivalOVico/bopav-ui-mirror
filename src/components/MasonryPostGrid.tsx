
import { MasonryPostCard } from '@/components/MasonryPostCard';

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

interface MasonryPostGridProps {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
}

export const MasonryPostGrid = ({ posts, loading, hasMore }: MasonryPostGridProps) => {
  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {posts.map((post) => (
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
    </>
  );
};
