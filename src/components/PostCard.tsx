
import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostCardProps {
  id: string;
  businessName: string;
  businessAvatar: string;
  content: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  likes: number;
  comments: number;
  timeAgo: string;
}

const PostCard = ({
  businessName,
  businessAvatar,
  content,
  mediaUrl,
  mediaType,
  likes,
  comments,
  timeAgo
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
      {/* Business Header */}
      <div className="p-4 flex items-center space-x-3">
        <img
          src={businessAvatar}
          alt={businessName}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
        />
        <div className="flex-1">
          <h3 className="text-white font-semibold">{businessName}</h3>
          <p className="text-gray-400 text-sm">{timeAgo}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <Share className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      {content && (
        <div className="px-4 pb-4">
          <p className="text-gray-300">{content}</p>
        </div>
      )}

      {/* Media */}
      <div className="relative">
        {mediaType === 'image' ? (
          <img
            src={mediaUrl}
            alt="Post content"
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="relative">
            <video
              src={mediaUrl}
              className="w-full h-80 object-cover"
              controls={false}
              poster={mediaUrl}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-4"
              >
                <Play className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`${
                isLiked ? 'text-red-500 hover:text-red-400' : 'text-gray-400 hover:text-white'
              } transition-colors`}
            >
              <Heart className={`h-5 w-5 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              {likesCount}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <MessageCircle className="h-5 w-5 mr-1" />
              {comments}
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSave}
            className={`${
              isSaved ? 'text-purple-500 hover:text-purple-400' : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
