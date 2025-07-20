
import { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, Reply, Send, X } from 'lucide-react';

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
  userName: string;
  userAvatar: string;
  comment: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[];
}

interface CommentModalProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
}

// Sample comments data
const sampleComments: Comment[] = [
  {
    id: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    comment: 'This is amazing! Love the content 🔥',
    timeAgo: '2h ago',
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: '1-1',
        userName: 'Mike Davis',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        comment: 'Totally agree!',
        timeAgo: '1h ago',
        likes: 3,
        isLiked: true,
      }
    ]
  },
  {
    id: '2',
    userName: 'Alex Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    comment: 'Great work on this project. Would love to see more updates!',
    timeAgo: '4h ago',
    likes: 8,
    isLiked: false,
  },
  {
    id: '3',
    userName: 'Emma Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    comment: 'Incredible attention to detail 👏',
    timeAgo: '6h ago',
    likes: 15,
    isLiked: true,
  }
];

export const CommentModal = ({ post, isOpen, onClose }: CommentModalProps) => {
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleLikeComment = (commentId: string, isReply = false, parentId?: string) => {
    setComments(prev => prev.map(comment => {
      if (isReply && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies?.map(reply => 
            reply.id === commentId 
              ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
              : reply
          )
        };
      } else if (comment.id === commentId) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userName: 'Current User',
      userAvatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      comment: newComment,
      timeAgo: 'now',
      likes: 0,
      isLiked: false,
    };

    if (replyingTo) {
      setComments(prev => prev.map(c => 
        c.id === replyingTo 
          ? { ...c, replies: [...(c.replies || []), comment] }
          : c
      ));
      setReplyingTo(null);
    } else {
      setComments(prev => [comment, ...prev]);
    }
    
    setNewComment('');
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % post.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + post.media.length) % post.media.length);
  };

  const currentMedia = post.media[currentMediaIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent className="max-w-6xl w-full max-h-[90vh] p-0 bg-gray-900/95 backdrop-blur-md border border-gray-700/50">
        <div className="flex h-[80vh]">
          {/* Left Side - Media */}
          <div className="flex-1 bg-black rounded-l-lg relative">
            <Button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="relative h-full flex items-center justify-center">
              {currentMedia?.type === 'image' ? (
                <img
                  src={currentMedia.url}
                  alt="Post content"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <video
                  src={currentMedia?.url}
                  className="max-h-full max-w-full object-contain"
                  controls
                  playsInline
                />
              )}

              {/* Navigation arrows for multiple media */}
              {post.media.length > 1 && (
                <>
                  <Button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    size="sm"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    size="sm"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </>
              )}

              {/* Dots indicator */}
              {post.media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {post.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentMediaIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Comments */}
          <div className="w-96 bg-gray-800/40 backdrop-blur-md flex flex-col">
            {/* Post Header */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.businessAvatar} />
                  <AvatarFallback className="bg-purple-500 text-white">
                    {post.businessName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-semibold">{post.businessName}</h3>
                  <p className="text-gray-400 text-sm">{post.timeAgo}</p>
                </div>
              </div>
              {post.content && (
                <p className="text-gray-300 text-sm mt-3">{post.content}</p>
              )}
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={comment.userAvatar} />
                      <AvatarFallback className="bg-purple-500 text-white">
                        {comment.userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="bg-gray-700/30 rounded-lg p-3">
                        <h4 className="text-white font-medium text-sm">{comment.userName}</h4>
                        <p className="text-gray-300 text-sm">{comment.comment}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <button
                          onClick={() => handleLikeComment(comment.id)}
                          className={`flex items-center space-x-1 text-xs ${
                            comment.isLiked ? 'text-red-400' : 'text-gray-400'
                          } hover:text-red-400`}
                        >
                          <Heart className={`h-3 w-3 ${comment.isLiked ? 'fill-current' : ''}`} />
                          <span>{comment.likes}</span>
                        </button>
                        <button
                          onClick={() => setReplyingTo(comment.id)}
                          className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white"
                        >
                          <Reply className="h-3 w-3" />
                          <span>Reply</span>
                        </button>
                        <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-11 space-y-2">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start space-x-3">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={reply.userAvatar} />
                            <AvatarFallback className="bg-purple-500 text-white text-xs">
                              {reply.userName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="bg-gray-700/20 rounded-lg p-2">
                              <h4 className="text-white font-medium text-xs">{reply.userName}</h4>
                              <p className="text-gray-300 text-xs">{reply.comment}</p>
                            </div>
                            <div className="flex items-center space-x-3 mt-1">
                              <button
                                onClick={() => handleLikeComment(reply.id, true, comment.id)}
                                className={`flex items-center space-x-1 text-xs ${
                                  reply.isLiked ? 'text-red-400' : 'text-gray-400'
                                } hover:text-red-400`}
                              >
                                <Heart className={`h-2 w-2 ${reply.isLiked ? 'fill-current' : ''}`} />
                                <span>{reply.likes}</span>
                              </button>
                              <span className="text-xs text-gray-500">{reply.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Comment Input */}
            <div className="p-4 border-t border-gray-700/50">
              {replyingTo && (
                <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
                  <span>Replying to {comments.find(c => c.id === replyingTo)?.userName}</span>
                  <Button
                    onClick={() => setReplyingTo(null)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback className="bg-purple-500 text-white">U</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex items-center space-x-2">
                  <Input
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
                    className="bg-gray-700/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-full"
                  />
                  <Button
                    onClick={handleSubmitComment}
                    disabled={!newComment.trim()}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 disabled:opacity-50"
                    size="sm"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
