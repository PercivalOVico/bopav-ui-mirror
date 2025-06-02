import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Masonry from 'react-masonry-css';

interface Post {
  id: string;
  author: string;
  content: string;
  image?: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  text: string;
}

const PostCreationInterface = () => {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState<File | null>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPostImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle post submission logic here
    console.log("Submitting post with content:", postContent, "and image:", postImage);
    // Reset state after submission
    setPostContent("");
    setPostImage(null);
  };

  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Create a Post</CardTitle>
        <CardDescription className="text-gray-400">Share your thoughts and media with the community.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="post">Content</Label>
          <Textarea
            id="post"
            placeholder="Write something..."
            className="bg-gray-700 text-white"
            value={postContent}
            onChange={handleContentChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Image (optional)</Label>
          <Input
            id="image"
            type="file"
            className="bg-gray-700 text-white file:bg-purple-500 file:border-0 file:text-white"
            onChange={handleImageChange}
          />
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleSubmit}>
          Post
        </Button>
      </CardContent>
    </Card>
  );
};

const PostCard = ({ post, onCommentClick }: { post: Post; onCommentClick: (post: Post) => void }) => {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">{post.author}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post" className="w-full rounded-md" />
        )}
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => onCommentClick(post)}>
          View Comments
        </Button>
      </CardContent>
    </Card>
  );
};

const MasonryPostGrid = ({ posts }: { posts: Post[] }) => {
  const masonryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map(post => (
        <div key={post.id}>
          <PostCard post={post} onCommentClick={(post) => console.log('Clicked on post:', post)} />
        </div>
      ))}
    </Masonry>
  );
};

const CommentModal = ({ isOpen, onClose, post }: { isOpen: boolean; onClose: () => void; post: Post | null }) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 text-white">
        <DialogHeader>
          <DialogTitle>Comments for {post.author}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {post.comments.map(comment => (
            <Card key={comment.id} className="bg-gray-700/50">
              <CardHeader>
                <CardTitle>{comment.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{comment.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "John Doe",
      content: "This is my first post!",
      image: "https://images.unsplash.com/photo-1682685797424-99c984583013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      comments: [
        { id: "1", author: "Jane Doe", text: "Great post!" },
        { id: "2", author: "Jim Smith", text: "I agree!" }
      ]
    },
    {
      id: "2",
      author: "Jane Doe",
      content: "Check out this amazing photo!",
      image: "https://images.unsplash.com/photo-1682622374449-5744991194ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      comments: [
        { id: "3", author: "John Doe", text: "Wow, beautiful!" },
        { id: "4", author: "Jim Smith", text: "Where was this taken?" }
      ]
    },
    {
      id: "3",
      author: "Jim Smith",
      content: "Just finished reading a great book. Highly recommend!",
      comments: [
        { id: "5", author: "John Doe", text: "What book was it?" },
        { id: "6", author: "Jane Doe", text: "I'll add it to my list!" }
      ]
    },
    {
      id: "4",
      author: "Alice Johnson",
      content: "Enjoying a sunny day at the beach!",
      image: "https://images.unsplash.com/photo-1682586915786-83a75984a45c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
      comments: []
    },
    {
      id: "5",
      author: "Bob Williams",
      content: "Coding all night long!",
      comments: []
    },
    {
      id: "6",
      author: "Charlie Brown",
      content: "Just adopted a new puppy!",
      image: "https://images.unsplash.com/photo-1682695797226-9f899e61358a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      comments: []
    }
  ]);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleCommentClick = (post: Post) => {
    setSelectedPost(post);
    setIsCommentModalOpen(true);
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
        <PostCreationInterface />

        {/* Posts Grid */}
        <MasonryPostGrid posts={posts} />

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
