
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { PostCreationInterface } from "@/components/PostCreationInterface";
import { MasonryPostGrid } from "@/components/MasonryPostGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

interface Comment {
  id: string;
  author: string;
  text: string;
}

const CommentModal = ({ isOpen, onClose, post }: { isOpen: boolean; onClose: () => void; post: Post | null }) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 text-white">
        <DialogHeader>
          <DialogTitle>Comments for {post.businessName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Posts = () => {
  const [posts] = useState<Post[]>([
    {
      id: "1",
      businessName: "John Doe",
      businessAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      content: "This is my first post! Sharing some amazing content with everyone.",
      media: [{ url: "https://images.unsplash.com/photo-1682685797424-99c984583013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8", type: "image" }],
      likes: 42,
      comments: 5,
      timeAgo: "2 hours ago",
      height: 300,
    },
    {
      id: "2",
      businessName: "Jane Doe",
      businessAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b367?w=120&h=120&fit=crop&crop=face",
      content: "Check out this amazing photo! The colors are absolutely stunning.",
      media: [{ url: "https://images.unsplash.com/photo-1682622374449-5744991194ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8", type: "image" }],
      likes: 31,
      comments: 8,
      timeAgo: "4 hours ago",
      height: 250,
    },
    {
      id: "3",
      businessName: "Jim Smith",
      businessAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      content: "Just finished reading a great book. Highly recommend it to anyone interested in personal development!",
      media: [],
      likes: 18,
      comments: 3,
      timeAgo: "6 hours ago",
      height: 200,
    },
    {
      id: "4",
      businessName: "Alice Johnson",
      businessAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      content: "Enjoying a sunny day at the beach! Perfect weather for relaxation.",
      media: [{ url: "https://images.unsplash.com/photo-1682586915786-83a75984a45c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", type: "image" }],
      likes: 65,
      comments: 12,
      timeAgo: "1 day ago",
      height: 320,
    },
    {
      id: "5",
      businessName: "Bob Williams",
      businessAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      content: "Coding all night long! Working on an exciting new project that I can't wait to share.",
      media: [],
      likes: 22,
      comments: 4,
      timeAgo: "2 days ago",
      height: 180,
    },
    {
      id: "6",
      businessName: "Charlie Brown",
      businessAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=120&h=120&fit=crop&crop=face",
      content: "Just adopted a new puppy! He's absolutely adorable and full of energy.",
      media: [{ url: "https://images.unsplash.com/photo-1682695797226-9f899e61358a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", type: "image" }],
      likes: 89,
      comments: 16,
      timeAgo: "3 days ago",
      height: 280,
    }
  ]);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleCommentClick = (post: Post) => {
    setSelectedPost(post);
    setIsCommentModalOpen(true);
  };

  const handlePost = (content: string) => {
    console.log("New post content:", content);
    // Handle post creation logic here
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">News Feed</h1>
          <p className="text-gray-400">Stay updated with the latest posts</p>
        </div>

        {/* Post Creation Interface */}
        <PostCreationInterface onPost={handlePost} />

        {/* Posts Grid */}
        <MasonryPostGrid posts={posts} loading={false} hasMore={false} />

        {/* Comment Modal */}
        <CommentModal
          isOpen={isCommentModalOpen}
          onClose={() => setIsCommentModalOpen(false)}
          post={selectedPost}
        />
      </div>
    </MainLayout>
  );
};

export default Posts;
