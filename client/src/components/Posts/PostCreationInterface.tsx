
import { useState } from 'react';
import { Smile, MapPin, Image as ImageIcon, Video, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface PostCreationInterfaceProps {
  onPost: (content: string) => void;
}

export const PostCreationInterface = ({ onPost }: PostCreationInterfaceProps) => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      onPost(postContent);
      setPostContent('');
    }
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50">
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback className="bg-purple-500 text-white">U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="relative">
            <Input
              placeholder="Share something"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-full pr-12 backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 p-2 rounded-full"
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 p-2 rounded-full"
              >
                <Video className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 p-2 rounded-full"
              >
                <MapPin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 p-2 rounded-full"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handlePost}
              disabled={!postContent.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
