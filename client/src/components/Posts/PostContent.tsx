
import { MasonryPostGrid } from '@/components/MasonryPostGrid';

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

interface PostContentProps {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
}

export const PostContent = ({ posts, loading, hasMore }: PostContentProps) => {
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
};
